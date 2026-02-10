import { useRef } from 'react'
import { LayoutDashboard, ArrowRight, Table2, Users, FileText, BarChart3 } from 'lucide-react'
import { AnalyzerEntry } from '@/analyzer';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Systems() {
    const container = useRef(null)

    // useGSAP(() => {
    //     gsap.from('.fade-in', {
    //         y: 30,
    //         opacity: 0,
    //         duration: 0.8,
    //         stagger: 0.1,
    //         ease: "power2.out"
    //     })
    // }, { scope: container })

    return (
        <div ref={container} className="min-h-screen bg-platinum pb-20">
            {/* Header */}
            <div className="bg-white border-b border-silver pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-6 text-steel font-mono uppercase tracking-widest text-xs">
                        <LayoutDashboard size={14} />
                        <span>Operating System Layer</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-graphite mb-6 fade-in">
                        Business Systems
                    </h1>
                    <p className="text-xl text-steel max-w-2xl leading-relaxed fade-in">
                        Spreadsheets break at scale. We build custom internal tools, client portals, and administrative engines
                        that runs your operations automatically.
                    </p>
                </div>
            </div>

            {/* The Problem */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-graphite mb-12 fade-in">Operational Visibility</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 fade-in">
                            <p className="text-lg text-steel leading-relaxed">
                                Most companies run on "Shadow IT" — a mess of disconnected Google Sheets, email threads, and manual checklists.
                                When an employee leaves, the process breaks.
                            </p>
                            <p className="text-lg text-steel leading-relaxed">
                                We replace fragile manual processes with robust, database-backed applications that enforce standard operating procedures.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <div className="border border-l-4 border-l-graphite border-silver bg-white p-6 rounded w-full">
                                    <div className="text-4xl font-bold text-graphite mb-1">100%</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-steel">Data Integrity</div>
                                </div>
                                <div className="border border-l-4 border-l-graphite border-silver bg-white p-6 rounded w-full">
                                    <div className="text-4xl font-bold text-graphite mb-1">Zero</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-steel">Data Loss</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Representation of System */}
                        <div className="bg-graphite text-platinum font-mono text-xs p-6 rounded-lg shadow-2xl fade-in overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-white/10 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="mt-8 space-y-2 opacity-80">
                                <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
                                    <span>STATUS: LIVE</span>
                                    <span>v2.4.0</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="border border-white/20 p-2">
                                        <span className="block text-gray-500 mb-1">New Leads</span>
                                        <span className="text-xl font-bold">142</span>
                                    </div>
                                    <div className="border border-white/20 p-2">
                                        <span className="block text-gray-500 mb-1">Active</span>
                                        <span className="text-xl font-bold">89</span>
                                    </div>
                                    <div className="border border-white/20 p-2">
                                        <span className="block text-gray-500 mb-1">Revenue</span>
                                        <span className="text-xl font-bold">$42k</span>
                                    </div>
                                </div>
                                <div className="text-green-400 pt-4">
                                    {'>'} System health check passed.<br />
                                    {'>'} Database sync complete.<br />
                                    {'>'} Awaiting operator input...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Analyzer */}
            <AnalyzerEntry />

            {/* Systems Grid */}
            <section className="py-20 bg-white border-t border-silver">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-graphite mb-12 fade-in">System Modules</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Users, title: "Custom CRM", desc: "Track relationships your way, not Salesforce's way." },
                            { icon: FileText, title: "Client Portals", desc: "Secure dashboard for your clients to view status." },
                            { icon: Table2, title: "Inventory Engine", desc: "Real-time stock tracking across multiple locations." },
                            { icon: Users, title: "HRMS Lite", desc: "Onboarding, contracts, and leave management." },
                            { icon: BarChart3, title: "Finance Dashboard", desc: "Cash flow visibility without logging into QuickBooks." },
                            { icon: FileText, title: "Support Tickets", desc: "Internal ticketing system for operations teams." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-silver rounded-lg hover:shadow-lg hover:border-graphite transition-all fade-in bg-platinum/20">
                                <item.icon className="text-graphite mb-4" size={24} />
                                <h3 className="font-bold text-lg text-graphite mb-2">{item.title}</h3>
                                <p className="text-sm text-steel mb-6">{item.desc}</p>
                                <button className="text-xs font-bold text-graphite uppercase tracking-wider border border-silver px-4 py-2 rounded hover:bg-graphite hover:text-white transition-colors">
                                    View Logic
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            className="bg-graphite text-white px-8 py-5 rounded-sm font-bold uppercase tracking-wide flex items-center gap-3 hover:bg-graphite/90 transition-all border border-graphite mx-auto"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Business Systems' } }))}
                        >
                            Design My System
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
