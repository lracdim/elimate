export const calculateSeoScore = (doc) => {
    if (!doc) return 0;

    let score = 0;
    const maxScore = 100;

    // Title
    const title = doc.title;
    if (title) {
        score += 20;
        if (title.length >= 10 && title.length <= 60) score += 10;
    }

    // Meta Description
    const metaDesc = doc.querySelector('meta[name="description"]');
    if (metaDesc && metaDesc.content) {
        score += 20;
        if (metaDesc.content.length > 50 && metaDesc.content.length < 160) score += 10;
    }

    // H1
    const h1s = doc.getElementsByTagName('h1');
    if (h1s.length === 1) score += 20;
    else if (h1s.length > 1) score += 10; // Better than 0, but ideally 1

    // Alt tags
    const images = doc.getElementsByTagName('img');
    let altScore = 20;
    if (images.length > 0) {
        let missing = 0;
        for (let img of images) {
            if (!img.getAttribute('alt')) missing++;
        }
        if (missing > 0) altScore = Math.floor(20 * ((images.length - missing) / images.length));
    }
    score += altScore;

    return Math.max(0, Math.min(100, score));
};
