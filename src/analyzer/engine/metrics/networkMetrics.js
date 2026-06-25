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

export const analyzeNetwork = (doc) => {
  if (!doc) return { scriptCount: 0, cssCount: 0, imageCount: 0, totalAssets: 0 };

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
    const src = s.getAttribute('src') || '';
    const base = src.split('?')[0].split('/').pop();
    if (seen.has(base)) return false;
    seen.add(base);
    return true;
  });

  const scriptCount = dedupedScripts.length;
  const links = doc.getElementsByTagName('link'); // CSS often here
  const images = doc.getElementsByTagName('img');

  // Count external CSS
  let cssCount = 0;
  for (let l of links) {
    if (l.rel === 'stylesheet') cssCount++;
  }

  return {
    scriptCount,
    cssCount,
    imageCount: images.length,
    totalAssets: dedupedScripts.length + cssCount + images.length
  };
};
