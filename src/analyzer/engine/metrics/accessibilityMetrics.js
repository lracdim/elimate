export const analyzeAccessibility = (doc) => {
    if (!doc) return { missingAlt: 0, hasLang: false, semanticTags: 0 };

    const images = doc.getElementsByTagName('img');
    let missingAlt = 0;
    for (let img of images) {
        if (!img.getAttribute('alt')) missingAlt++;
    }

    const html = doc.getElementsByTagName('html')[0];
    const hasLang = html ? !!html.getAttribute('lang') : false;

    // Semantic tags check
    const semanticTags = ['header', 'nav', 'main', 'article', 'section', 'footer', 'aside'];
    let semanticCount = 0;
    semanticTags.forEach(tag => {
        if (doc.getElementsByTagName(tag).length > 0) semanticCount++;
    });

    return {
        missingAlt,
        hasLang,
        semanticCount
    };
};
