import React from 'react';
import ScoreCard from './ScoreCard';
import ScoreLegend from './ScoreLegend';
import BottleneckList from './BottleneckList';
import { RefreshCcw } from 'lucide-react';

const AnalyzerResult = ({ report, onReset, aiReport }) => {
    if (!report) return null;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-silver pb-6">
                <div>
                    <h2 className="text-2xl font-bold text-graphite mb-1">Diagnostic Report</h2>
                    <p className="text-steel font-mono text-sm">{report.url} • {new Date(report.timestamp).toLocaleDateString()}</p>
                </div>
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 text-steel hover:text-graphite transition-colors text-sm font-bold uppercase tracking-wider"
                >
                    <RefreshCcw size={14} />
                    New Scan
                </button>
            </div>

            {/* Scores Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <ScoreCard title="System Structure" score={report.scores.uiux} />
                <ScoreCard title="Load Velocity" score={report.scores.performance} />
                <ScoreCard title="Content Density" score={report.scores.contentWeight} />
                <ScoreCard title="Optimization" score={report.scores.seo} />
            </div>

            {/* Metrics Detail Bar */}
            <div className="bg-platinum/30 rounded p-6 mb-12 flex flex-wrap gap-8 justify-center border border-silver">
                <div className="text-center">
                    <span className="block text-xs font-mono text-steel uppercase mb-1">Load Time</span>
                    <span className="text-xl font-bold text-graphite">{report.metrics.loadTimeSeconds.toFixed(2)}s</span>
                </div>
                <div className="text-center">
                    <span className="block text-xs font-mono text-steel uppercase mb-1">DOM Depth</span>
                    <span className="text-xl font-bold text-graphite">{report.metrics.domDepth}</span>
                </div>
                <div className="text-center">
                    <span className="block text-xs font-mono text-steel uppercase mb-1">Scripts</span>
                    <span className="text-xl font-bold text-graphite">{report.metrics.scriptCount}</span>
                </div>
                <div className="text-center">
                    <span className="block text-xs font-mono text-steel uppercase mb-1">Assets</span>
                    <span className="text-xl font-bold text-graphite">{report.metrics.imageCount + report.metrics.cssCount}</span>
                </div>
                <div className="text-center">
                    <span className="block text-xs font-mono text-steel uppercase mb-1">Mode</span>
                    <span className="text-xl font-bold text-graphite">{report.metrics.contentClassification}</span>
                </div>
            </div>

{aiReport && (
  <div className="mt-6 border-t border-silver pt-6">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-2 h-2 rounded-full bg-graphite animate-pulse" />
      <h3 className="text-xs font-bold uppercase tracking-wider text-graphite">
        AI Operational Intelligence
      </h3>
    </div>
    <div className="prose prose-sm max-w-none text-steel leading-relaxed [&_h2]:text-sm [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wider [&_h2]:text-graphite [&_h2]:mt-4 [&_h2]:mb-2 [&_ul]:space-y-1 [&_li]:text-sm [&_ol]:space-y-1 [&_strong]:text-graphite">
      {aiReport.split('\n').map((line, i) => {
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-sm font-bold uppercase tracking-wider text-graphite mt-4 mb-2">
              {line.replace('## ', '')}
            </h2>
          );
        }
        if (line.startsWith('- ') || line.startsWith('• ')) {
          return (
            <p key={i} className="text-sm text-steel flex gap-2 items-start">
              <span className="text-graphite mt-1 flex-shrink-0">—</span>
              {line.replace(/^[-•]\s/, '')}
            </p>
          );
        }
        if (/^\d+\./.test(line)) {
          return (
            <p key={i} className="text-sm text-steel flex gap-2 items-start">
              <span className="font-bold text-graphite flex-shrink-0">
                {line.match(/^\d+/)?.[0]}.
              </span>
              {line.replace(/^\d+\.\s/, '')}
            </p>
          );
        }
        if (line.trim() === '') return <br key={i} />;
        return (
          <p key={i} className="text-sm text-steel">
            {line}
          </p>
        );
      })}
    </div>
  </div>
)}

{/* Bottlenecks */}
<BottleneckList bottlenecks={report.bottlenecks} />

<ScoreLegend />

            <div className="mt-12 pt-8 border-t border-silver text-center">
                <p className="text-steel mb-4 text-sm font-mono uppercase tracking-widest">Ready to optimize?</p>
                <button
                    className="w-full md:w-auto bg-graphite text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-graphite/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Systems Engineering Audit' } }))}
                >
                    Book Systems Engineering Audit
                </button>
            </div>
        </div>
    );
};

export default AnalyzerResult;
