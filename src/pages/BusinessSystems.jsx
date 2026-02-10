import { Link } from 'react-router-dom'
import { ArrowRight, Check, LayoutDashboard, Users, ClipboardList, BarChart3 } from 'lucide-react'

export default function BusinessSystems() {
    const systemTypes = [
        {
            icon: LayoutDashboard,
            title: 'Operations Dashboards',
            description: 'Real-time visibility into your business metrics, KPIs, and team performance.'
        },
        {
            icon: Users,
            title: 'Client Management',
            description: 'Custom portals for managing client relationships, projects, and communication.'
        },
        {
            icon: ClipboardList,
            title: 'Workflow Systems',
            description: 'Task management, approval processes, and operational workflows.'
        },
        {
            icon: BarChart3,
            title: 'Lead Tracking',
            description: 'Track leads from first contact to conversion with custom CRM integrations.'
        }
    ]

    const benefits = [
        'Built around your specific operations',
        'No software licensing fees',
        'Integrates with your existing tools',
        'Scales as your team grows',
        'Ongoing support and updates available'
    ]

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <p className="text-indigo-600 font-semibold mb-4">Business Systems</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Custom Systems Built for Your Operations
                        </h1>
                        <p className="text-xl text-slate-600 mb-8">
                            Stop forcing your business into off-the-shelf software. We build dashboards,
                            portals, and management tools designed around how you actually work.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Link
                                to="/#contact"
                                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                            >
                                Build My System
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <p className="text-slate-500">Starting at $299</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Types */}
            <section className="py-24">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center font-heading">
                        What We Build
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Every system is custom-built for your specific needs. Here are common examples:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {systemTypes.map((system, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <system.icon className="w-6 h-6 text-slate-700" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">{system.title}</h3>
                                <p className="text-slate-600 text-sm">{system.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Custom */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 font-heading">
                                Why Build Custom?
                            </h2>
                            <p className="text-slate-300 mb-8">
                                Off-the-shelf tools force you to adapt your processes to their limitations.
                                Custom systems adapt to you — and grow with your business.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                            <h3 className="font-semibold text-white mb-4 text-xl">Ready to start?</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Tell us about your operations and we'll scope out what a custom system
                                could look like for your business.
                            </p>
                            <Link
                                to="/#contact"
                                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get a Quote
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
