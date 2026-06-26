export function calculateUiUxScore(domMetrics) {
  const { domDepth = 0, linkCount = 0, buttonCount = 0, elementCount = 0 } = domMetrics;

  let score = 100;

  // DOM depth penalty — Elementor sites run 15-25 deep
  // This is expected, don't over-penalize
  if (domDepth > 30) score -= 25;
  else if (domDepth > 25) score -= 15;
  else if (domDepth > 20) score -= 10;
  else if (domDepth > 15) score -= 5;
  // 15 or under = no penalty (good structure)

  // Navigation check
  if (linkCount === 0) score -= 20;
  else if (linkCount < 3) score -= 10;
  // 3+ links = no penalty

  // CTA check
  if (buttonCount === 0) score -= 10;
  // Has buttons = no penalty

  // Element count sanity check
  if (elementCount > 800) score -= 15;
  else if (elementCount > 500) score -= 8;
  else if (elementCount < 10) score -= 20;

  const notes = [];
  if (domDepth > 20) {
    notes.push(`DOM depth of ${domDepth} adds layout complexity`);
  }

  return { score: Math.max(0, score), notes };
}
