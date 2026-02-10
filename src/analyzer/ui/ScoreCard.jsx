import React from 'react';
import { CheckCircle, AlertTriangle, AlertOctagon, Info } from 'lucide-react';

const ScoreCard = ({ title, score, type = "neutral" }) => {
    let colorClass = "text-steel";
    let bgClass = "bg-platinum";
    let icon = <Info size={20} />;

    if (score >= 80) {
        colorClass = "text-emerald-600";
        bgClass = "bg-emerald-50";
        icon = <CheckCircle size={20} className="text-emerald-500" />;
    } else if (score >= 50) {
        colorClass = "text-amber-600";
        bgClass = "bg-amber-50";
        icon = <AlertTriangle size={20} className="text-amber-500" />;
    } else {
        colorClass = "text-rose-600";
        bgClass = "bg-rose-50";
        icon = <AlertOctagon size={20} className="text-rose-500" />;
    }

    return (
        <div className="p-6 border border-silver rounded bg-white flex flex-col justify-between h-full hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-steel">{title}</span>
                {icon}
            </div>
            <div>
                <div className={`text-5xl font-bold mb-2 ${colorClass}`}>
                    {score}
                </div>
                <div className="h-1 w-full bg-platinum rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ${colorClass.replace('text', 'bg').replace('-600', '-500')}`}
                        style={{ width: `${score}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScoreCard;
