export function calculatePerformanceScore(netMetrics, loadTimeSeconds = 0) {
  const { scriptCount = 0, cssCount = 0, imageCount = 0 } = netMetrics;

  let score = 100;

  // Script penalty
  if (scriptCount > 30) score -= 40;
  else if (scriptCount > 22) score -= 30;
  else if (scriptCount > 15) score -= 20;
  else if (scriptCount > 8) score -= 10;

  // Load time penalty
  if (loadTimeSeconds > 3.0) score -= 30;
  else if (loadTimeSeconds > 2.0) score -= 20;
  else if (loadTimeSeconds > 1.0) score -= 10;

  // Image penalty (minor)
  if (imageCount > 40) score -= 10;
  else if (imageCount > 25) score -= 5;

  // Floor: never below 25 for a live site
  return Math.max(25, Math.round(score));
}
