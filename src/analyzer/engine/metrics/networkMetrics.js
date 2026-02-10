export const analyzeNetwork = (doc) => {
    if (!doc) return { scriptCount: 0, cssCount: 0, imageCount: 0, totalAssets: 0 };

    const scripts = doc.getElementsByTagName('script');
    const links = doc.getElementsByTagName('link'); // CSS often here
    const images = doc.getElementsByTagName('img');

    // Count external CSS
    let cssCount = 0;
    for (let l of links) {
        if (l.rel === 'stylesheet') cssCount++;
    }

    return {
        scriptCount: scripts.length,
        cssCount: cssCount,
        imageCount: images.length,
        totalAssets: scripts.length + cssCount + images.length
    };
};
