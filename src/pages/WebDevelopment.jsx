import { Link } from 'react-router-dom'
import { ArrowRight, Check, Zap, Clock, Search, Smartphone, Mail } from 'lucide-react'

export default function WebDevelopment() {
    const features = [
        { icon: Smartphone, title: 'Mobile Responsive', description: 'Looks perfect on every device' },
        { icon: Zap, title: 'Fast Loading', description: 'Optimized for speed and performance' },
        { icon: Mail, title: 'Lead Capture', description: 'Contact form that converts visitors' },
        { icon: Search, title: 'SEO Ready', description: 'Basic structure for search visibility' },
    ]

    const included = [
        'Single-page responsive design',
        'Mobile-first development',
        'Performance optimization',
        'Contact form integration',
        'Basic SEO structure',
        'SSL certificate setup',
        'Delivered in 5 business days',
        'One round of revisions'
    ]

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <p className="text-indigo-600 font-semibold mb-4">Web Development</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            A Conversion-Focused Website for $99
                        </h1>
                        <p className="text-xl text-slate-600 mb-8">
                            Get a fast, mobile-responsive website that captures leads and positions
                            your business professionally — without the agency price tag.
                        </p>
                        <Link
                            to="/#contact"
                            className="bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                        >
                            Get Started for $99
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-heading">
                        Built for Speed & Clarity
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-slate-700" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                                <p className="text-slate-500 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                                What's Included
                            </h2>
                            <p className="text-slate-600 mb-8">
                                Everything you need to launch a professional web presence that converts
                                visitors into leads.
                            </p>
                            <ul className="space-y-3">
                                {included.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <div className="text-center">
                                <p className="text-slate-500 mb-2">One-time payment</p>
                                <p className="text-5xl font-bold text-slate-900 mb-4">$99</p>
                                <p className="text-slate-600 text-sm mb-6">
                                    No monthly fees. No hidden costs.
                                </p>
                                <Link
                                    to="/#contact"
                                    className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                        Ready to Launch Your Website?
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        Get a professional, conversion-focused website delivered in 5 business days.
                    </p>
                    <Link
                        to="/#contact"
                        className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
                    >
                        Get Started for $99
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
