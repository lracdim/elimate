import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Conversion-focused websites built for speed and clarity. Starting at $99.',
            link: '/services/web-development'
        },
        {
            icon: Layers,
            title: 'Business Systems',
            description: 'Custom dashboards, portals, and management tools for your operations.',
            link: '/services/business-systems'
        },
        {
            icon: Zap,
            title: 'Automation',
            description: 'Connect your systems with automated workflows, notifications, and triggers.',
            link: '/services/automation'
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                        What We Build
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We engineer complete business systems — not just websites.
                        Everything we build is designed to integrate and scale.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container-custom max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-6 font-heading">
                        Systems Thinking, Not Page Thinking
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Most agencies build pages. We build systems. Your website is just the entry point
                        to a larger operational infrastructure — one that captures leads, manages clients,
                        and automates the work that slows you down.
                    </p>
                    <Link
                        to="/pricing"
                        className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
                    >
                        View Pricing
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
