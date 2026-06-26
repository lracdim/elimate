const NOISE_DOMAINS = [
  'googletagmanager.com',
  'google-analytics.com',
  'googleadservices.com',
  'doubleclick.net',
  'facebook.net',
  'connect.facebook.net',
  'hotjar.com',
  'clarity.ms',
  'cdn.jsdelivr.net/npm/bootstrap',
  'ajax.googleapis.com',
  'maps.googleapis.com',
  'recaptcha',
  'intercom',
  'crisp.chat',
  'tawk.to',
  'tidio',
  'zendesk',
  'hubspot',
];

const estimateLoadTime = (scriptCount, imageCount, htmlSize = 0) => {
  let estimated = 0.5;
  estimated += scriptCount * 0.05;
  estimated += imageCount * 0.03;
  estimated += (htmlSize / 50000) * 0.1;
  return Math.round(estimated * 100) / 100;
};

export const analyzeNetwork = (doc, htmlSize = 0) => {
  if (!doc) return { scriptCount: 0, cssCount: 0, imageCount: 0, totalAssets: 0, loadTimeSeconds: 0.5 };

  const allScripts = doc.getElementsByTagName('script');
  const externalScripts = [...allScripts].filter(s => {
    const src = (s.getAttribute('src') || '').trim();
    if (!src) return false;
    if (src.startsWith('data:') || src.startsWith('blob:')) return false;
    const isNoise = NOISE_DOMAINS.some(d => src.includes(d));
    if (isNoise) return false;
    if (src.includes('chunk') || src.includes('.min.min.') || src.includes('webpack-runtime')) return false;
    return true;
  });

  const seen = new Set();
  const dedupedScripts = externalScripts.filter(s => {
    const src_slice = s.getAttribute('src') || '';
    const base = src_slice.split('?')[0].split('/').pop();
    if (seen.has(base)) return false;
    seen.add(base);
    return true;
  });

  const scriptCount = dedupedScripts.length;
  const links = doc.getElementsByTagName('link');
  const images = doc.getElementsByTagName('img');

  let cssCount = 0;
  for (let l of links) {
    if (l.rel === 'stylesheet') cssCount++;
  }

  const imageCount = images.length;
  const loadTimeSeconds = estimateLoadTime(scriptCount, imageCount, htmlSize);

  return {
    scriptCount,
    cssCount,
    imageCount,
    totalAssets: scriptCount + cssCount + imageCount,
    loadTimeSeconds
  };
};
