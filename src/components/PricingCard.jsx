import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

export default function PricingCard({
    title,
    price,
    priceLabel = '',
    description,
    features,
    ctaText,
    ctaLink,
    highlighted = false
}) {
    return (
        <div
            className={`rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] ${highlighted
                    ? 'bg-slate-900 text-white shadow-xl'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
        >
            <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-slate-900'}`}>
                {title}
            </h3>
            <p className={`text-sm mb-6 ${highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                {description}
            </p>

            <div className="mb-6">
                <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-slate-900'}`}>
                    ${price}
                </span>
                {priceLabel && (
                    <span className={`text-sm ml-1 ${highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                        {priceLabel}
                    </span>
                )}
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span className={`text-sm ${highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Link
                to={ctaLink}
                className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center gap-2 ${highlighted
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
            >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    )
}
