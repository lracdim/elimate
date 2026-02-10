export const calculatePerformanceScore = (metrics, loadTimeSeconds) => {
    let score = 100;

    // Load Time Penalties
    if (loadTimeSeconds > 3.0) score -= 40;
    else if (loadTimeSeconds > 2.0) score -= 20;
    else if (loadTimeSeconds > 1.0) score -= 10;

    // Asset Count Penalties
    if (metrics.scriptCount > 20) score -= 20;
    else if (metrics.scriptCount > 10) score -= 10;

    if (metrics.cssCount > 5) score -= 10;

    if (metrics.imageCount > 30) score -= 15;

    return Math.max(0, Math.min(100, score));
};
