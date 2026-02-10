import React, { useState } from 'react';
import { ArrowRight, Search, Globe } from 'lucide-react';

const AnalyzerForm = ({ onAnalyze }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!url) {
            setError('Please enter a URL');
            return;
        }

        let formattedUrl = url;
        if (!/^https?:\/\//i.test(url)) {
            formattedUrl = 'https://' + url;
        }

        try {
            new URL(formattedUrl); // Validate URL
            onAnalyze(formattedUrl);
        } catch (err) {
            setError('Invalid URL format. Please enter a valid website address.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center border-2 border-graphite rounded bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform focus-within:translate-y-[1px] focus-within:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Globe className="text-steel ml-3" size={20} />
                    <input
                        type="text"
                        placeholder="enter-your-site.com"
                        className="flex-1 px-4 py-3 bg-transparent outline-none font-mono text-graphite placeholder:text-silver"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-graphite text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-graphite/90 transition-colors"
                    >
                        Analyze
                        <ArrowRight size={16} />
                    </button>
                </div>
                {error && (
                    <div className="absolute top-full left-0 mt-2 text-rose-500 text-sm font-mono flex items-center gap-1">
                        <span>!</span> {error}
                    </div>
                )}
            </form>
            <p className="text-center text-steel mt-6 text-sm">
                Runs a 45-point diagnostic on UI, Performance, and Systems efficacy.
            </p>
        </div>
    );
};

export default AnalyzerForm;
