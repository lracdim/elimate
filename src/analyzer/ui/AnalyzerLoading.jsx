import React, { useEffect, useState } from 'react';

const steps = [
    "Resolving DNS...",
    "Establishing Connection...",
    "Downloading HTML...",
    "Parsing DOM Structure...",
    "Analyzing Asset Waterfall...",
    "Computing Layout Shifts...",
    "Generating Report..."
];

const AnalyzerLoading = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep < steps.length - 1) {
            const timeout = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 600); // 600ms per step approx
            return () => clearTimeout(timeout);
        }
    }, [currentStep]);

    return (
        <div className="py-20 text-center">
            <div className="inline-block w-16 h-16 border-4 border-platinum border-t-graphite rounded-full animate-spin mb-8"></div>
            <div className="h-8 mb-2">
                <span className="text-lg font-mono text-graphite animate-pulse">
                    {steps[currentStep]}
                </span>
            </div>
            <div className="w-64 h-1 bg-platinum mx-auto rounded-full overflow-hidden mt-4">
                <div
                    className="h-full bg-graphite transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default AnalyzerLoading;
