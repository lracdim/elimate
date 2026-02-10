export const calculateUiUxScore = (metrics) => {
    let score = 100;
    const notes = [];

    // DOM Depth
    if (metrics.domDepth > 30) {
        score -= 20;
        notes.push("Excessive DOM Depth detected");
    } else if (metrics.domDepth > 15) {
        score -= 10;
    }

    // Element Spacing / Density (Proxy: Elements per Link/Button)
    const interactiveTotal = metrics.linkCount + metrics.buttonCount;
    if (interactiveTotal > 0) {
        const ratio = metrics.elementCount / interactiveTotal;
        if (ratio < 2) {
            // Too crowded? Or just a link farm?
            score -= 5;
        } else if (ratio > 50) {
            // Sparse interactives, hard to navigate?
            score -= 5;
        }
    }

    return {
        score: Math.max(0, Math.min(100, score)),
        notes
    };
};
