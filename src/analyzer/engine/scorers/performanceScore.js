export function calculatePerformanceScore(netMetrics, loadTimeSeconds = 1.5) {
  const { scriptCount = 0, cssCount = 0, imageCount = 0 } = netMetrics;

  let score = 100;

  // Script penalty
  if (scriptCount > 40) score -= 35;
  else if (scriptCount > 30) score -= 25;
  else if (scriptCount > 20) score -= 18;
  else if (scriptCount > 12) score -= 10;
  else if (scriptCount > 6) score -= 5;

  // Load time penalty
  if (loadTimeSeconds > 5.0) score -= 25;
  else if (loadTimeSeconds > 3.5) score -= 20;
  else if (loadTimeSeconds > 2.0) score -= 12;
  else if (loadTimeSeconds > 1.0) score -= 5;

  // Image penalty
  if (imageCount > 50) score -= 10;
  else if (imageCount > 30) score -= 5;

  // Floor: 20 minimum for a live site
  return Math.max(20, Math.round(score));
}
