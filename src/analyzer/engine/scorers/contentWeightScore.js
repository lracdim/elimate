export function calculateContentWeight(doc) {
  if (!doc) return { score: null, label: 'Unable to scan', wordCount: 0, ratio: 0, note: 'Site may be protected.' };

  const bodyEl = doc.body || doc.querySelector('body');
  const allText = (bodyEl?.textContent || '').replace(/\s+/g, ' ').trim();
  const wordCount = allText.split(' ').filter(w => w.length > 2).length;

  const headings = doc.querySelectorAll('h1, h2, h3')?.length || 0;
  const paragraphs = doc.querySelectorAll('p')?.length || 0;
  const images = doc.querySelectorAll('img')?.length || 0;
  const links = doc.querySelectorAll('a[href]')?.length || 0;

  if (wordCount < 10 && headings === 0) {
    return { score: null, label: 'Unable to scan', wordCount: 0, ratio: 0, note: 'Site may be protected. Showing estimated score.' };
  }

  let wordScore = 0;
  if (wordCount >= 800) wordScore = 40;
  else if (wordCount >= 400) wordScore = 30;
  else if (wordCount >= 200) wordScore = 20;
  else if (wordCount >= 100) wordScore = 10;
  else wordScore = 5;

  let structureScore = 0;
  if (headings >= 4) structureScore += 15;
  else if (headings >= 2) structureScore += 10;
  else if (headings >= 1) structureScore += 5;
  if (paragraphs >= 5) structureScore += 15;
  else if (paragraphs >= 3) structureScore += 10;
  else if (paragraphs >= 1) structureScore += 5;

  let mediaScore = 0;
  if (images >= 10) mediaScore = 20;
  else if (images >= 5) mediaScore = 15;
  else if (images >= 2) mediaScore = 10;
  else if (images >= 1) mediaScore = 5;

  let navScore = 0;
  if (links >= 10) navScore = 10;
  else if (links >= 5) navScore = 7;
  else if (links >= 2) navScore = 4;

  const totalScore = wordScore + structureScore + mediaScore + navScore;
  let label = 'Minimal';
  if (totalScore >= 80) label = 'Content Rich';
  else if (totalScore >= 60) label = 'Professional';
  else if (totalScore >= 40) label = 'Developing';
  else if (totalScore >= 20) label = 'Basic';

  return { score: Math.min(100, totalScore), label, wordCount, ratio: 0 };
}
