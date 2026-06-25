import { analyzeWebsite } from '../engine';

const SYSTEM_PROMPT = `You are an expert business and web operations analyst. You will receive: 1. A company website URL 2. The technical diagnostic scores already computed (system structure, load velocity, content density, optimization scores) 3. The detected technical bottlenecks from DOM analysis 4. The company's stated operational pain point Your job is to generate a concise OPERATIONAL INTELLIGENCE REPORT — not a repeat of the technical data already shown, but a business-level interpretation of what those signals mean operationally. Structure your response exactly as follows: ## OPERATIONAL DIAGNOSIS 2-3 sentences: What the technical signals reveal about how this business operates. Be direct and specific. ## WHERE THE REVENUE IS LEAKING Bullet list (3-4 points): Specific operational gaps identified from the website signals and stated pain point. Each bullet = one specific leak with business consequence. ## WHAT NEEDS TO BE ENGINEERED Numbered list (3 points only): Prioritized system interventions. Not generic advice — specific to this business type and the signals detected. ## SYSTEM READINESS SCORE Rate 1-10 with one sentence explaining the score: - Automation Readiness: X/10 - Client Visibility: X/10 - Operational Scalability: X/10 Keep the entire response under 400 words. Be direct. No filler. Every sentence must carry operational weight.`;

export const runAIAnalysis = async ({ url, painPoint, technicalScores, bottlenecks }) => {
  const technicalContext = technicalScores ? `Technical scores already computed: - System Structure: ${technicalScores.systemStructure}/100 - Load Velocity: ${technicalScores.loadVelocity}/100 - Content Density: ${technicalScores.contentDensity}/100 - Optimization: ${technicalScores.optimization}/100 - Load Time: ${technicalScores.loadTime} - DOM Depth: ${technicalScores.domDepth} - Mode: ${technicalScores.mode} Detected bottlenecks: ${bottlenecks?.map(b => `${b.impact} impact — ${b.title}: ${b.description}`).join('\n') || 'None detected'}` : 'Technical scores not yet available';

  const response = await fetch(
    import.meta.env.VITE_NVIDIA_URL,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_NVIDIA_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        model: import.meta.env.VITE_NVIDIA_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `WEBSITE URL: ${url} STATED PAIN POINT: ${painPoint || 'Not provided'} ${technicalContext} Generate the operational intelligence report.`.trim() },
        ],
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.95,
        stream: false,
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.detail || `NVIDIA API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
};

// Simulation helper to generate deterministic HTML based on URL hash
const simulateHTML = (url) => {
    let hash = 0;
    for (let i = 0; i < url.length; i++) hash = url.charCodeAt(i) + ((hash << 5) - hash);

    const absHash = Math.abs(hash);
    const domDepth = 5 + (absHash % 25);
    const scriptCount = 5 + (absHash % 25);
    const imgCount = 5 + (absHash % 40);
    const hasAlt = absHash % 2 === 0;

    let html = `
        <!DOCTYPE html>
        <html lang="${absHash % 20 === 0 ? '' : 'en'}">
        <head>
            <title>Simulated Analysis for ${url}</title>
            <meta name="description" content="This is a simulated page for analysis purposes.">
        </head>
        <body>
            <h1>Main Title</h1>
            <div id="app">
    `;

    // Create depth
    let closingDivs = "";
    for (let i = 0; i < domDepth; i++) {
        html += `<div><p>Deep content level ${i}</p>`;
        closingDivs += "</div>";
    }
    html += closingDivs;

    // Add scripts
    for (let i = 0; i < scriptCount; i++) {
        html += `<script src="script-${i}.js"></script>`;
    }

    // Add images
    for (let i = 0; i < imgCount; i++) {
        html += `<img src="img-${i}.jpg" ${hasAlt && i % 3 !== 0 ? 'alt="An image"' : ''} />`;
    }

    html += `
            </div>
        </body>
        </html>
    `;
    return html;
};

const PROXIES = [
  (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(url)}`,
];

async function fetchWithFallback(url) {
  for (const makeProxy of PROXIES) {
    try {
      const proxyUrl = makeProxy(url);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      let html = '';
      if (proxyUrl.includes('allorigins')) {
        const json = await res.json();
        html = json.contents || '';
      } else {
        html = await res.text();
      }

      if (html && html.length > 500 && (html.includes('<html') || html.includes('<body') || html.includes('<head'))) {
        return html;
      }
    } catch (e) {
      continue;
    }
  }
  return '<html><body></body></html>';
}

export const runAnalysis = async (url) => {
    await new Promise(r => setTimeout(r, 1500));

    let html = "";
    let loadTime = 0;

    const start = performance.now();
    html = await fetchWithFallback(url);
    const end = performance.now();
    const rawLoadTime = (end - start) / 1000;
    const PROXY_OVERHEAD = 0.8;
    loadTime = Math.min(
      5.0,
      Math.max(0.5, rawLoadTime - PROXY_OVERHEAD)
    );

    if (!html || html.length < 100) {
      html = simulateHTML(url);
      loadTime = 0.5 + (Math.random() * 2);
    }

    return await analyzeWebsite(html, url, loadTime);
};
