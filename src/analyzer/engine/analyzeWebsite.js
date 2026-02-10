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
    const accessMetrics = analyzeAccessibility(doc);

    const combinedMetrics = { ...domMetrics, ...netMetrics, ...accessMetrics };

    // 3. Calculate Scores
    const uiux = calculateUiUxScore(combinedMetrics).score;
    const performance = calculatePerformanceScore(combinedMetrics, loadTimeSeconds);
    const content = calculateContentWeight(doc);
    const seo = calculateSeoScore(doc);

    // 4. Detect Bottlenecks
    const bottlenecks = detectBottlenecks(combinedMetrics, { uiux, performance, content, seo });

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
            loadTimeSeconds,
            domDepth: domMetrics.domDepth,
            scriptCount: netMetrics.scriptCount,
            cssCount: netMetrics.cssCount,
            imageCount: netMetrics.imageCount,
            contentClassification: content.label
        },
        bottlenecks
    };
};
