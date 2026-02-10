import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const BottleneckList = ({ bottlenecks }) => {
    if (!bottlenecks || bottlenecks.length === 0) return null;

    return (
        <div className="mt-12">
            <h3 className="text-lg font-bold text-graphite mb-6 flex items-center gap-2">
                <AlertCircle className="text-rose-500" size={20} />
                Detected Bottlenecks
            </h3>
            <div className="space-y-4">
                {bottlenecks.map((item) => (
                    <div key={item.id} className="border border-silver rounded p-6 bg-white hover:border-graphite transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${item.severity === 'High' ? 'bg-rose-100 text-rose-700' :
                                    item.severity === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                {item.severity} Impact
                            </span>
                        </div>
                        <h4 className="font-bold text-graphite mb-1">{item.title}</h4>
                        <p className="text-sm text-steel mb-4">{item.explanation}</p>

                        <div className="bg-platinum/50 p-4 rounded text-sm text-graphite font-mono">
                            <span className="text-steel mr-2 content-none">Fix &gt;</span>
                            {item.fix}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottleneckList;
