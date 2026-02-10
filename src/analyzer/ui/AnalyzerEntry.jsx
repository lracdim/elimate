import React, { useState } from 'react';
import AnalyzerForm from './AnalyzerForm';
import AnalyzerLoading from './AnalyzerLoading';
import AnalyzerResult from './AnalyzerResult';
import { runAnalysis } from '../services/analyzerApi';

const AnalyzerEntry = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, complete, error
    const [report, setReport] = useState(null);

    const handleAnalyze = async (url) => {
        setStatus('loading');
        try {
            const result = await runAnalysis(url);
            setReport(result);
            setStatus('complete');
        } catch (e) {
            console.error(e);
            setStatus('error');
        }
    };

    const handleReset = () => {
        setStatus('idle');
        setReport(null);
    };

    return (
        <section className="py-20 bg-white" id="system-analyzer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-2 block">
                        Engine v1.0.4 Online
                    </span>
                    <h2 className="text-3xl font-bold text-graphite mb-4">Run a System Diagnostic</h2>
                    <p className="text-steel max-w-2xl mx-auto">
                        See how your current platform performs against modern engineering standards.
                        No marketing fluff, just raw metrics.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-xl border border-silver p-8 md:p-12 min-h-[400px]">
                    {status === 'idle' && <AnalyzerForm onAnalyze={handleAnalyze} />}
                    {status === 'loading' && <AnalyzerLoading />}
                    {status === 'complete' && <AnalyzerResult report={report} onReset={handleReset} />}
                    {status === 'error' && (
                        <div className="text-center py-10">
                            <p className="text-rose-500 mb-4">Analysis Failed. The system could not reach the target.</p>
                            <button onClick={handleReset} className="underline text-graphite">Try Again</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AnalyzerEntry;
