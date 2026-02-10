import React from 'react';

const ScoreLegend = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-steel mt-8 pt-8 border-t border-silver">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span>80-100: Optimized</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>50-79: Needs Work</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <span>0-49: Critical</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-graphite font-bold">EST</span>
                <span>= Estimated Value</span>
            </div>
        </div>
    );
};

export default ScoreLegend;
