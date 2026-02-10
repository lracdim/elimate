export const detectBottlenecks = (metrics, scores) => {
    const bottles = [];
    let idCounter = 1;

    const add = (severity, title, explanation, fix) => {
        bottles.push({
            id: `b-${idCounter++}`,
            severity,
            title,
            explanation,
            fix
        });
    };

    // Performance Bottlenecks
    if (metrics.scriptCount > 15) {
        add('High', 'Excessive JavaScript Execution',
            `Recovered ${metrics.scriptCount} script tags. This blocks the main thread.`,
            'Defer non-essential scripts and code-split bundles.');
    }

    if (metrics.imageCount > 20) {
        add('Medium', 'High Asset Request Count',
            `Found ${metrics.imageCount} images on landing. Increases RTT latency.`,
            'Lazy load below-fold images and use WebP formats.');
    }

    // SEO Bottlenecks
    if (metrics.missingAlt > 0) {
        add('Medium', 'Missing Image Descriptions',
            `${metrics.missingAlt} images lack ALT attributes, hurting accessibility and SEO.`,
            'Add descriptive alt text to all informational images.');
    }

    if (!metrics.hasLang) {
        add('Low', 'Missing HTML Lang Attribute',
            'Document declaration lacks language specifier.',
            'Add lang="en" (or appropriate code) to the <html> tag.');
    }

    // UI/UX Bottlenecks
    if (metrics.domDepth > 20) {
        add('Medium', 'Excessive DOM Depth',
            `DOM tree depth is ${metrics.domDepth}, causing layout thrashing.`,
            'Flatten HTML structure and reduce wrapper divs.');
    }

    return bottles.sort((a, b) => {
        const map = { High: 3, Medium: 2, Low: 1 };
        return map[b.severity] - map[a.severity];
    });
};
