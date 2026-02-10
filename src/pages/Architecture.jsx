import { useRef } from 'react'
import { Database, ArrowRight, CheckCircle2, Server, Globe, Cpu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Architecture() {
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
                        <Database size={14} />
                        <span>Infrastructure Layer</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-graphite mb-6 fade-in">
                        Web Architecture
                    </h1>
                    <p className="text-xl text-steel max-w-2xl leading-relaxed fade-in">
                        We don't build "brochure websites." We build digital infrastructure designed to capture data,
                        integrate with your CRM, and load instantly globally.
                    </p>
                </div>
            </div>

            {/* What Breaks Without It */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-graphite mb-8 fade-in">What Breaks Without Infrastructure</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="p-8 bg-white border border-silver shadow-sm rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">!</div>
                            <h3 className="font-bold text-graphite mb-2">Marketing Disconnect</h3>
                            <p className="text-steel text-sm leading-relaxed">Ad spend leads to a generic contact form that doesn't route data anywhere. ROI becomes unmeasurable.</p>
                        </div>
                        <div className="p-8 bg-white border border-silver shadow-sm rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">!</div>
                            <h3 className="font-bold text-graphite mb-2">Slow Performance</h3>
                            <p className="text-steel text-sm leading-relaxed">Bloated themes and plugins kill conversion rates on mobile. Google penalizes slow Full Content Paint.</p>
                        </div>
                        <div className="p-8 bg-white border border-silver shadow-sm rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">!</div>
                            <h3 className="font-bold text-graphite mb-2">Security Risks</h3>
                            <p className="text-steel text-sm leading-relaxed">Unmanaged plugins leave immediate backdoors for attacks. Client data is constantly exposed.</p>
                        </div>
                    </div>

                    {/* The Blueprint */}
                    <div className="bg-graphite text-white rounded-lg p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        {/* Grid Background */}
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
                                <div>
                                    <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">System Specification</div>
                                    <h2 className="text-3xl font-bold">Architecture Blueprint</h2>
                                </div>
                                <div className="text-right hidden md:block">
                                    <div className="text-xs font-mono text-gray-400">STATUS: ACTIVE</div>
                                    <div className="text-xs font-mono text-gray-400">VERSION: 2.4.0</div>
                                </div>
                            </div>

                            {/* Flow Diagram */}
                            <div className="grid md:grid-cols-4 gap-4 relative">
                                {/* Connector Line (Desktop) */}
                                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                                {/* Step 1 */}
                                <div className="relative z-10 bg-graphite border border-white/20 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                                    <div className="text-xs font-mono text-gray-400 mb-4 group-hover:text-amber-500">01. ENTRY POINT</div>
                                    <div className="mb-4 text-white"><Globe size={24} /></div>
                                    <h4 className="font-bold mb-2">Traffic Source</h4>
                                    <p className="text-xs text-gray-400">Global Edge CDN routing with <br />sub-100ms latency.</p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative z-10 bg-graphite border border-white/20 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                                    <div className="text-xs font-mono text-gray-400 mb-4 group-hover:text-amber-500">02. CAPTURE</div>
                                    <div className="mb-4 text-white"><Cpu size={24} /></div>
                                    <h4 className="font-bold mb-2">Conversion Logic</h4>
                                    <p className="text-xs text-gray-400">Dynamic forms with client-side <br />validation & enrichment.</p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative z-10 bg-graphite border border-white/20 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                                    <div className="text-xs font-mono text-gray-400 mb-4 group-hover:text-amber-500">03. PROCESSING</div>
                                    <div className="mb-4 text-white"><Server size={24} /></div>
                                    <h4 className="font-bold mb-2">Data Sanitization</h4>
                                    <p className="text-xs text-gray-400">Server-side filtering to remove <br />spam & normalize formats.</p>
                                </div>

                                {/* Step 4 */}
                                <div className="relative z-10 bg-graphite border border-white/20 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                                    <div className="text-xs font-mono text-gray-400 mb-4 group-hover:text-amber-500">04. SYNC</div>
                                    <div className="mb-4 text-white"><Database size={24} /></div>
                                    <h4 className="font-bold mb-2">CRM Integration</h4>
                                    <p className="text-xs text-gray-400">Direct injection into pipeline <br />& auto-notification.</p>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                                <p className="text-xs font-mono text-gray-400 max-w-lg">
                                    // This architecture ensures 0% data loss and 100% attribution accuracy.
                                </p>
                                <button className="bg-amber-500 text-graphite px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                                    View Technical Specs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPTION 1: WORDPRESS */}
            <section className="py-20 bg-platinum border-t border-silver">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-2 block">Managed Infrastructure</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-graphite">WordPress Architecture</h2>
                        <p className="text-steel mt-4 max-w-2xl mx-auto font-mono text-xs uppercase tracking-wide">
                            Rapid Deployment | Content Management | Enterprise Security
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-silver bg-white divide-y md:divide-y-0 md:divide-x divide-silver shadow-lg">
                        {/* WP Basic */}
                        <div className="p-8 hover:bg-platinum/50 transition-colors group">
                            <h3 className="font-bold text-lg text-graphite mb-2">Essential</h3>
                            <div className="text-4xl font-bold text-graphite mb-8 font-mono">$99<span className="text-sm font-sans font-normal text-steel">/mo</span></div>

                            <ul className="space-y-4 text-sm text-graphite mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Single Page Site</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Technical SEO Setup</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Daily Cloud Backups</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>WAF Firewall</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 border border-graphite text-graphite font-bold text-xs uppercase tracking-widest hover:bg-graphite hover:text-white transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'WP Essential ($99)' } }))}
                            >
                                Deploy Essential
                            </button>
                        </div>

                        {/* WP Pro */}
                        <div className="p-8 bg-platinum hover:bg-platinum/50 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-graphite text-white text-[10px] uppercase font-bold px-3 py-1 font-mono">Most Popular</div>
                            <h3 className="font-bold text-lg text-graphite mb-2">Growth</h3>
                            <div className="text-4xl font-bold text-graphite mb-8 font-mono">$249<span className="text-sm font-sans font-normal text-steel">/mo</span></div>

                            <ul className="space-y-4 text-sm text-graphite mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    <span>Up to 10 Pages</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    <span>Speed Optimization (CDN)</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    <span>Schema & Rich Snippets</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    <span>Monthly Analytics Report</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 bg-graphite text-white border border-graphite font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-graphite transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'WP Growth ($249)' } }))}
                            >
                                Deploy Growth
                            </button>
                        </div>

                        {/* WP Elite */}
                        <div className="p-8 hover:bg-platinum/50 transition-colors group">
                            <h3 className="font-bold text-lg text-graphite mb-2">Scale</h3>
                            <div className="text-4xl font-bold text-graphite mb-8 font-mono">$499<span className="text-sm font-sans font-normal text-steel">/mo</span></div>

                            <ul className="space-y-4 text-sm text-graphite mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                                    <span>Unlimited Architecture</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                                    <span>Advanced Custom Fields</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                                    <span>CRM Integration</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                                    <span>Priority Support SLA</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 border border-graphite text-graphite font-bold text-xs uppercase tracking-widest hover:bg-graphite hover:text-white transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'WP Scale ($499)' } }))}
                            >
                                Deploy Scale
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPTION 2: JS FRONTEND */}
            <section className="py-20 bg-graphite text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest mb-2 block">Modern Application Stack</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">React / Next.js Build</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-mono text-xs uppercase tracking-wide">
                            Zero Latency | Global Edge Network | Static Security
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-white/20 bg-white/5 divide-y md:divide-y-0 md:divide-x divide-white/20">
                        {/* JS Basic */}
                        <div className="p-8 hover:bg-white/10 transition-colors group">
                            <h3 className="font-bold text-lg text-white mb-2">Static</h3>
                            <div className="text-4xl font-bold text-white mb-8 font-mono">$199<span className="text-sm font-sans font-normal text-gray-500">/mo</span></div>

                            <ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>React/Vite Architecture</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Global Edge CDN</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Immutable Security</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>100/100 Core Vitals</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 border border-white/40 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-graphite transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'JS Static ($199)' } }))}
                            >
                                Build Static
                            </button>
                        </div>

                        {/* JS Pro */}
                        <div className="p-8 bg-white/10 hover:bg-white/15 transition-colors group relative">
                            <div className="absolute top-0 right-0 bg-green-500 text-graphite text-[10px] uppercase font-bold px-3 py-1 font-mono">High Performance</div>
                            <h3 className="font-bold text-lg text-white mb-2">Dynamic</h3>
                            <div className="text-4xl font-bold text-white mb-8 font-mono">$599<span className="text-sm font-sans font-normal text-gray-500">/mo</span></div>

                            <ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Next.js Application</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Headless CMS (Sanity)</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Client Portals</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Dynamic Filtering</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 bg-white text-graphite border border-white font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'JS Dynamic ($599)' } }))}
                            >
                                Build Dynamic
                            </button>
                        </div>

                        {/* JS Elite */}
                        <div className="p-8 hover:bg-white/10 transition-colors group">
                            <h3 className="font-bold text-lg text-white mb-2">Platform</h3>
                            <div className="text-4xl font-bold text-white mb-8 font-mono">$1,299<span className="text-sm font-sans font-normal text-gray-500">/mo</span></div>

                            <ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono">
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Full-Stack Engineering</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>User Authentication</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Database Architecture</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span>Custom API Endpoints</span>
                                </li>
                            </ul>
                            <button
                                className="w-full py-4 border border-white/40 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-graphite transition-all"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'JS Platform ($1299)' } }))}
                            >
                                Build Platform
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white border-t border-silver">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-graphite mb-12 fade-in">Built Modules</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Veterinary Clinic System",
                                desc: "Complete practice management including patient portals, medical records, and appointment scheduling.",
                                link: "/demos/veterinary-clinic"
                            }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="group p-8 border border-silver rounded-lg hover:border-graphite transition-all fade-in cursor-pointer block">
                                <h3 className="font-bold text-lg text-graphite mb-2 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                                <p className="text-sm text-steel mb-4">{item.desc}</p>
                                <span className="text-xs font-bold text-graphite uppercase tracking-wider flex items-center gap-2">
                                    View Demo <ArrowRight size={12} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
