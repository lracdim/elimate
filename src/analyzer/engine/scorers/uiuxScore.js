export function calculateUiUxScore(domMetrics) {
  const { domDepth = 0, linkCount = 0, buttonCount = 0, elementCount = 0 } = domMetrics;

  let score = 100;

  if (domDepth > 25) score -= 30;
  else if (domDepth > 20) score -= 20;
  else if (domDepth > 15) score -= 10;
  else if (domDepth > 12) score -= 5;

  if (linkCount === 0) score -= 20;
  else if (linkCount < 3) score -= 10;

  if (buttonCount === 0) score -= 15;
  else if (buttonCount < 2) score -= 5;

  if (elementCount > 500) score -= 15;
  else if (elementCount > 300) score -= 8;
  else if (elementCount < 10) score -= 20;
  else if (elementCount < 20) score -= 10;

  const notes = [];
  if (domDepth > 20) notes.push(`DOM depth of ${domDepth} causes layout complexity`);
  if (buttonCount === 0) notes.push('No call-to-action buttons detected');
  if (linkCount < 3) notes.push('Insufficient navigation links');

  return { score: Math.max(0, score), notes };
}
