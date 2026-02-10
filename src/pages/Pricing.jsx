import { useRef } from 'react'
import { Check, ArrowRight, X } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Header
import { useNavigate } from 'react-router-dom'

export default function Pricing() {
    const container = useRef(null)
    const navigate = useNavigate()

    useGSAP(() => {
        gsap.fromTo('.pricing-card',
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        )
    }, { scope: container })

    return (
        <div ref={container} className="min-h-screen bg-platinum pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-graphite mb-6">System Investment</h1>
                    <p className="text-xl text-steel max-w-2xl mx-auto">
                        We price based on system complexity and operational leverage, not hours worked.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-start">

                    {/* Architecture - Entry */}
                    <div
                        className="pricing-card bg-white border border-silver p-8 rounded-lg hover:border-graphite transition-all cursor-pointer group"
                        onClick={() => navigate('/architecture')}
                    >
                        <div className="mb-8">
                            <span className="bg-platinum text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-silver group-hover:bg-graphite group-hover:text-white transition-colors">Web Architecture</span>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-graphite">$99</span>
                                <span className="text-steel text-sm">/mo + setup</span>
                            </div>
                            <p className="text-sm text-steel mt-4">One-page operational website. Foundation only.</p>

                            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded text-xs text-blue-800 leading-relaxed italic">
                                This is an entry architecture used to qualify system scope. It is not a complete solution.
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex gap-3 text-graphite">
                                <Check size={16} className="text-green-600 flex-shrink-0" />
                                <span>One-page operational website</span>
                            </li>
                            <li className="flex gap-3 text-graphite">
                                <Check size={16} className="text-green-600 flex-shrink-0" />
                                <span>Conversion-focused</span>
                            </li>
                            <li className="flex gap-3 text-graphite">
                                <Check size={16} className="text-green-600 flex-shrink-0" />
                                <span>Foundation only</span>
                            </li>
                        </ul>
                        <button
                            className="w-full bg-white border border-graphite text-graphite font-bold py-4 rounded-sm hover:bg-graphite hover:text-white transition-all uppercase text-xs tracking-wider relative z-10"
                            onClick={(e) => {
                                e.stopPropagation()
                                window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Web Architecture' } }))
                            }}
                        >
                            Deploy Entry Architecture
                        </button>
                    </div>

                    {/* Systems - Core */}
                    <div
                        className="pricing-card bg-graphite text-white p-8 rounded-lg shadow-2xl relative transform md:-translate-y-4 cursor-pointer hover:scale-[1.02] transition-transform"
                        onClick={() => navigate('/systems')}
                    >
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-amber-500 text-graphite text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                            Most Scalable
                        </div>
                        <div className="mb-8">
                            <span className="bg-white/10 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-white/20">Business Systems</span>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-white">$499</span>
                                <span className="text-gray-400 text-sm">/mo starting</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">Internal system build & scalable foundation.</p>

                            <div className="mt-4 p-3 bg-white/10 border border-white/20 rounded text-xs text-amber-400 leading-relaxed italic">
                                All serious engagements begin here.
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex gap-3">
                                <Check size={16} className="text-green-400 flex-shrink-0" />
                                <span className="font-bold">Free entry website</span>
                            </li>
                            <li className="flex gap-3">
                                <Check size={16} className="text-green-400 flex-shrink-0" />
                                <span>Internal system build</span>
                            </li>
                            <li className="flex gap-3">
                                <Check size={16} className="text-green-400 flex-shrink-0" />
                                <span>Admin dashboard</span>
                            </li>
                            <li className="flex gap-3">
                                <Check size={16} className="text-green-400 flex-shrink-0" />
                                <span>Scalable foundation</span>
                            </li>
                        </ul>
                        <button
                            className="w-full bg-white text-graphite font-bold py-4 rounded-sm hover:bg-gray-100 transition-all uppercase text-xs tracking-wider flex items-center justify-center gap-2 relative z-10"
                            onClick={(e) => {
                                e.stopPropagation()
                                window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Business Systems' } }))
                            }}
                        >
                            Design My System <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Automation - Addon */}
                    <div
                        className="pricing-card bg-white border border-silver p-8 rounded-lg hover:border-graphite transition-all cursor-pointer group"
                        onClick={() => navigate('/automation')}
                    >
                        <div className="mb-8">
                            <span className="bg-blue-50 text-blue-800 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">Workflow Automation</span>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-graphite">$299</span>
                                <span className="text-steel text-sm">/mo starting</span>
                            </div>
                            <p className="text-sm text-steel mt-4">Automated operations (Add-on).</p>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex gap-3 text-steel">
                                <X size={16} className="text-red-400 flex-shrink-0" />
                                <span className="italic">Requires existing system</span>
                            </li>
                            <li className="flex gap-3 text-steel">
                                <X size={16} className="text-red-400 flex-shrink-0" />
                                <span className="italic">Not sold standalone</span>
                            </li>
                            <li className="flex gap-3 text-graphite">
                                <Check size={16} className="text-green-600 flex-shrink-0" />
                                <span>Zero-latency triggers</span>
                            </li>
                        </ul>
                        <button
                            className="w-full bg-platinum border border-silver text-steel font-bold py-4 rounded-sm hover:bg-graphite hover:text-white transition-all uppercase text-xs tracking-wider relative z-10"
                            onClick={(e) => {
                                e.stopPropagation()
                                window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Automation Layer' } }))
                            }}
                        >
                            Automate My Operations
                        </button>
                    </div>

                </div>

                <div className="mt-20 text-center border-t border-silver pt-12">
                    <p className="text-steel mb-6 text-sm">Not sure what you need? Run the diagnostic.</p>
                    <button
                        className="text-graphite font-bold uppercase tracking-wider text-sm hover:underline"
                        onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                    >
                        Analyze My Business Logic →
                    </button>
                </div>
            </div>

            {/* Service Deep Dives + Tables */}
            <div className="bg-white py-20 border-t border-silver">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <span className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-2 block">Service Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-12">System Components</h2>

                        <div className="space-y-32">
                            {/* 1. Architecture Section */}
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-graphite mb-4">1. Web Architecture</h3>
                                        <p className="text-steel mb-4">
                                            The foundation of your digital presence. We don't build "brochure websites"; we engineer high-performance operational platforms.
                                            Whether you choose our WordPress Standard or our Advanced JS Stack, every deployment includes enterprise-grade security,
                                            SEO-first structure, and data-capture capabilities.
                                        </p>
                                    </div>
                                    <div className="bg-platinum p-8 rounded border border-silver">
                                        <div className="font-mono text-xs text-amber-600 mb-2">TARGET OUTCOME</div>
                                        <div className="text-xl font-bold text-graphite">"I need a professional, high-converting face for my business that captures leads automatically."</div>
                                    </div>
                                </div>

                                {/* Architecture Table */}
                                <div className="overflow-x-auto border border-silver rounded-lg">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-platinum text-graphite font-bold uppercase text-xs tracking-wider">
                                            <tr>
                                                <th className="p-4 border-b border-silver">Architecture Spec</th>
                                                <th className="p-4 border-b border-silver">WordPress (Essential)</th>
                                                <th className="p-4 border-b border-silver text-green-600">Custom JS (High-Perf)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-silver text-graphite">
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Underlying Tech</td>
                                                <td className="p-4">PHP / MySQL</td>
                                                <td className="p-4 font-mono text-xs">React / Next.js / Vercel</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Load Speed</td>
                                                <td className="p-4">Standard (~1.5s)</td>
                                                <td className="p-4 font-bold">Instant (~0.2s)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Security</td>
                                                <td className="p-4">WAF + Daily Backups</td>
                                                <td className="p-4">Immutable (Hack-Proof)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Maintenance</td>
                                                <td className="p-4">Monthly Updates Req.</td>
                                                <td className="p-4">Zero Maintenance</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Ideal For</td>
                                                <td className="p-4">Marketing Sites / Blogs</td>
                                                <td className="p-4">Web Apps / SaaS / Complex</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 2. Systems Section */}
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                                    <div className="order-2 md:order-1 bg-graphite text-white p-8 rounded shadow-xl">
                                        <div className="font-mono text-xs text-green-400 mb-2">TARGET OUTCOME</div>
                                        <div className="text-xl font-bold">"I need to stop manually managing data and start seeing my business operations on a dashboard."</div>
                                    </div>
                                    <div className="order-1 md:order-2">
                                        <h3 className="text-2xl font-bold text-graphite mb-4">2. Business Systems</h3>
                                        <p className="text-steel mb-4">
                                            The core engine of your company. We map your offline processes and digitize them into a centralized scalable system.
                                            This includes CRM setup, inventory management, staff portals, and custom data databases.
                                        </p>
                                    </div>
                                </div>

                                {/* Systems Table */}
                                <div className="overflow-x-auto border border-silver rounded-lg">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-graphite text-white font-bold uppercase text-xs tracking-wider">
                                            <tr>
                                                <th className="p-4 border-b border-gray-700">System Capability</th>
                                                <th className="p-4 border-b border-gray-700">Standard Build ($499)</th>
                                                <th className="p-4 border-b border-gray-700 text-amber-500">Enterprise Build (Custom)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-silver text-graphite">
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Data Structure</td>
                                                <td className="p-4">Standard Databases</td>
                                                <td className="p-4">Complex Relational Data</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">User Roles</td>
                                                <td className="p-4">Admin + Editor</td>
                                                <td className="p-4">Custom Permissions / Roles</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Client Portals</td>
                                                <td className="p-4"><X size={16} className="text-red-300 inline" /></td>
                                                <td className="p-4"><Check size={16} className="text-green-600 inline" /> Included</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">API Access</td>
                                                <td className="p-4">Read-Only</td>
                                                <td className="p-4">Full REST / GraphQL API</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Training</td>
                                                <td className="p-4">Video Library</td>
                                                <td className="p-4">Live Workshop + Manuals</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 3. Automation Section */}
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-graphite mb-4">3. Workflow Automation</h3>
                                        <p className="text-steel mb-4">
                                            The force multiplier. Once your system is built, we add automation layers to remove human input from repetitive tasks.
                                            From automated invoicing to instant lead follow-ups and inventory alerts, we make your system "alive."
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-8 rounded border border-blue-100">
                                        <div className="font-mono text-xs text-blue-600 mb-2">TARGET OUTCOME</div>
                                        <div className="text-xl font-bold text-blue-900">"I want my business to run itself while I focus on growth and strategy."</div>
                                    </div>
                                </div>

                                {/* Automation Table */}
                                <div className="overflow-x-auto border border-blue-100 rounded-lg">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-blue-50 text-blue-900 font-bold uppercase text-xs tracking-wider">
                                            <tr>
                                                <th className="p-4 border-b border-blue-200">Automation Logic</th>
                                                <th className="p-4 border-b border-blue-200">Linear ($299)</th>
                                                <th className="p-4 border-b border-blue-200 text-blue-600">AI Agents ($599+)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-blue-100 text-graphite">
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Trigger Type</td>
                                                <td className="p-4">If X, Then Y (Standard)</td>
                                                <td className="p-4">Multi-Condition / AI Decision</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Platform</td>
                                                <td className="p-4">Zapier / Make High-Level</td>
                                                <td className="p-4">Custom Code / Webhooks</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Complexity</td>
                                                <td className="p-4">Single Path Workflows</td>
                                                <td className="p-4">Branching Logic Paths</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-steel">Human in Loop</td>
                                                <td className="p-4">Required for Errors</td>
                                                <td className="p-4">Self-Healing / Auto-Retry</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
