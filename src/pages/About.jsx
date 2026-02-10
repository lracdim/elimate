import { useRef } from 'react'
import { Terminal, Database, Cpu, ShieldCheck, ArrowRight, Target, Users, Zap } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function About() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.from('.hero-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })

        tl.from('.stat-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.5")

    }, { scope: container })

    return (
        <div ref={container} className="min-h-screen bg-platinum pb-20">
            {/* Hero Section */}
            <div className="bg-graphite text-white pt-32 pb-24 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-8 text-amber-500 font-mono uppercase tracking-widest text-xs hero-text">
                        <Terminal size={14} />
                        <span>The Elimate Doctrine</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight hero-text">
                        We Don't Build Websites.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">We Engineer Companies.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed hero-text">
                        Most agencies sell you traffic. We sell you <span className="text-white font-bold">velocity</span>.
                        <br />
                        We believe that a business is not a collection of pages, but a single operating system that must be engineered for scale.
                    </p>
                </div>
            </div>

            {/* The Philosophy */}
            <section className="py-24 bg-white border-b border-silver/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-graphite mb-8">The Friction Problem</h2>
                            <div className="space-y-6 text-lg text-steel leading-relaxed">
                                <p>
                                    Growing companies don't die from lack of ideas. They die from <span className="font-bold text-graphite">operational friction</span>.
                                </p>
                                <p>
                                    Leads get lost in email threads. Data lives in disconnected spreadsheets. Founders become the routers for every decision.
                                    You hire more people to fix the chaos, but they just add more complexity.
                                </p>
                                <p className="border-l-4 border-amber-500 pl-6 py-2 italic text-graphite font-medium">
                                    "We realized that building a pretty website for a broken system is like painting a car with no engine."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Data Integrity", val: "100%", icon: Database },
                                { label: "Manual Data Entry", val: "0%", icon: Zap },
                                { label: "System Uptime", val: "99.9%", icon: ServerCard },
                                { label: "Logic Errors", val: "0", icon: ShieldCheck }
                            ].map((stat, i) => (
                                <div key={i} className="stat-card p-8 bg-platinum rounded-lg border border-silver hover:border-graphite transition-colors">
                                    <div className="text-amber-600 mb-4">
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="text-3xl font-bold text-graphite mb-1">{stat.val}</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-steel">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Methodology */}
            <section className="py-24 bg-platinum">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-steel font-mono uppercase tracking-widest text-xs">Our Methodology</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-graphite mt-4">Surgical Precision</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-graphite">
                            <div className="mb-6 bg-platinum w-12 h-12 flex items-center justify-center rounded-full text-graphite">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-4">1. Diagnosis</h3>
                            <p className="text-steel leading-relaxed text-sm">
                                We don't guess. We map your improved data flow, identify bottleneck nodes, and audit your current tech stack before writing a single line of code.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-amber-500">
                            <div className="mb-6 bg-platinum w-12 h-12 flex items-center justify-center rounded-full text-amber-600">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-4">2. Architecture</h3>
                            <p className="text-steel leading-relaxed text-sm">
                                We build systems, not pages. Every element is a functional component designed to capture, route, or process data automatically.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-graphite">
                            <div className="mb-6 bg-platinum w-12 h-12 flex items-center justify-center rounded-full text-graphite">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-4">3. Handover</h3>
                            <p className="text-steel leading-relaxed text-sm">
                                We don't just launch and leave. We train your team, document the operating procedures, and ensure you own the code.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-graphite text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Ready to Stop Guessing?</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        Let's verify if your current system is scalable.
                    </p>
                    <button
                        className="bg-white text-graphite px-10 py-5 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3 mx-auto"
                        onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                    >
                        Run System Analysis
                        <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    )
}

function ServerCard({ size }) {
    return <Database size={size} />
}
