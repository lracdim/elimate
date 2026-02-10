export const analyzeDOM = (doc) => {
    if (!doc) return { domDepth: 0, buttonSpacing: 0, fontCounts: {} };

    // DOM Depth (Simulated max depth traversal)
    let maxDepth = 0;
    const traverse = (node, depth) => {
        if (depth > maxDepth) maxDepth = depth;
        Array.from(node.children).forEach(child => traverse(child, depth + 1));
    };
    traverse(doc.body, 0);

    // Font Consistency
    const fonts = new Set();
    const elements = doc.body.getElementsByTagName('*');
    for (let el of elements) {
         // This is a naive check as we can't easily get computed styles in a fetched doc without a window
         // So we look for inline styles or class names that might suggest fonts if possible, 
         // but for a text-fetch based parser, we might have to rely on style tags.
         // fallback: return a "complexity" metric based on class diversity
    }

    // Interactive Element Spacing (Heuristic: Count of <a> and <button> in close proximity?)
    // Hard to do without layout. We will estimate based on HTML density.
    const linkCount = doc.getElementsByTagName('a').length;
    const buttonCount = doc.getElementsByTagName('button').length;
    
    return {
        domDepth: maxDepth,
        linkCount,
        buttonCount,
        elementCount: elements.length,
    };
};
