import { analyzeDOM } from './metrics/domMetrics';
import { analyzeNetwork } from './metrics/networkMetrics';
import { analyzeAccessibility } from './metrics/accessibilityMetrics';
import { calculateUiUxScore } from './scorers/uiuxScore';
import { calculatePerformanceScore } from './scorers/performanceScore';
import { calculateContentWeight } from './scorers/contentWeightScore';
import { calculateSeoScore } from './scorers/seoScore';
import { detectBottlenecks } from './bottlenecks/detectBottlenecks';

export const analyzeWebsite = async (htmlString, url, loadTimeSeconds = 0.5) => {
    // 1. Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // 2. Gather Metrics
  const domMetrics = analyzeDOM(doc);
  const netMetrics = analyzeNetwork(doc);

  // 3. Calculate Scores
  const uiuxResult = calculateUiUxScore(domMetrics);
  const uiux = uiuxResult.score;
  const performance = calculatePerformanceScore(netMetrics, loadTimeSeconds);
  const content = calculateContentWeight(doc);
  const seo = calculateSeoScore(doc);

  // 4. Detect Bottlenecks — pass parsed doc for element-level checks
  const bottlenecks = detectBottlenecks(domMetrics, netMetrics, doc);

  // 5. Structure Report
  return {
    url,
    timestamp: new Date().toISOString(),
    scores: {
      uiux,
      performance,
      contentWeight: content.score,
      seo
    },
    metrics: {
      loadTimeSeconds: Math.min(loadTimeSeconds, 5.0),
      domDepth: domMetrics.domDepth,
      scriptCount: netMetrics.scriptCount,
      cssCount: netMetrics.cssCount,
      imageCount: netMetrics.imageCount,
      contentClassification: content.label
    },
    bottlenecks
  };
};
