export function calculateContentWeight(doc) {
  if (!doc) return { score: null, label: 'Unable to scan', wordCount: 0, ratio: 0, note: 'Site may be protected.' };

  const bodyEl = doc.body || doc.querySelector('body');
  const allText = (bodyEl?.textContent || '').replace(/\s+/g, ' ').trim();
  const wordCount = allText.split(' ').filter(w => w.length > 2).length;

  const headings = doc.querySelectorAll('h1, h2, h3')?.length || 0;
  const paragraphs = doc.querySelectorAll('p')?.length || 0;
  const images = doc.querySelectorAll('img')?.length || 0;
  const links = doc.querySelectorAll('a[href]')?.length || 0;
  const sections = doc.querySelectorAll('section, article, .elementor-section, [class*="section"]')?.length || 0;

  // If word count seems low for the number of structural elements,
  // boost proportionally (handles proxy-truncated text nodes)
  const structureSignals = headings + paragraphs + sections;
  const adjustedWordCount = wordCount < 100 && structureSignals > 5
    ? structureSignals * 40  // estimate ~40 words per section
    : wordCount;

  // Score based on adjusted word count
  let wordScore = 0;
  if (adjustedWordCount >= 800) wordScore = 40;
  else if (adjustedWordCount >= 400) wordScore = 30;
  else if (adjustedWordCount >= 200) wordScore = 20;
  else if (adjustedWordCount >= 100) wordScore = 10;
  else wordScore = 5;

  // Structure scoring (0-30 points)
  let structureScore = 0;
  if (headings >= 4) structureScore += 15;
  else if (headings >= 2) structureScore += 10;
  else if (headings >= 1) structureScore += 5;
  if (paragraphs >= 5) structureScore += 15;
  else if (paragraphs >= 3) structureScore += 10;
  else if (paragraphs >= 1) structureScore += 5;

  // Media richness (0-20 points)
  let mediaScore = 0;
  if (images >= 10) mediaScore = 20;
  else if (images >= 5) mediaScore = 15;
  else if (images >= 2) mediaScore = 10;
  else if (images >= 1) mediaScore = 5;

  // Navigation (0-10 points)
  let navScore = 0;
  if (links >= 10) navScore = 10;
  else if (links >= 5) navScore = 7;
  else if (links >= 2) navScore = 4;

  const total = wordScore + structureScore + mediaScore + navScore;

  let label = 'Minimal';
  if (total >= 80) label = 'Content Rich';
  else if (total >= 60) label = 'Professional';
  else if (total >= 40) label = 'Developing';
  else if (total >= 20) label = 'Basic';

  return {
    score: Math.min(100, total),
    label,
    wordCount: adjustedWordCount,
    ratio: 0,
  };
}
