export const calculateContentWeight = (doc) => {
    if (!doc) return { score: 0, label: "Unknown" };

    const bodyText = doc.body.textContent || "";
    const htmlLength = doc.documentElement.innerHTML.length;
    const textLength = bodyText.replace(/\s+/g, ' ').length;

    const wordCount = bodyText.split(/\s+/).length;

    // Text to HTML ratio
    const ratio = htmlLength > 0 ? textLength / htmlLength : 0;

    let score = 50; // Start middle

    // Adjust based on word count
    if (wordCount < 300) score -= 30; // Too thin
    else if (wordCount > 2000) score += 10; // Comprehensive? Or bloated? 
    else score += 20; // Sweet spot

    // Adjust based on ratio
    if (ratio < 0.1) score -= 20; // Code heavy, text light including scripts
    if (ratio > 0.5) score += 10; // Text rich

    score = Math.max(0, Math.min(100, score));

    let label = "Beginner";
    if (score <= 20) label = "Amateur";
    else if (score <= 40) label = "Beginner";
    else if (score <= 60) label = "Business";
    else if (score <= 80) label = "Professional";
    else label = "Optimized";

    return { score, label, wordCount, ratio };
};
