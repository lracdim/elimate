import React from 'react';
import ScoreCard from './ScoreCard';
import ScoreLegend from './ScoreLegend';
import BottleneckList from './BottleneckList';
import { RefreshCcw } from 'lucide-react';

const AnalyzerResult = ({ report, onReset }) => {
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
