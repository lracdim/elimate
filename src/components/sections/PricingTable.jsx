import { useRef } from 'react'
import { Check, ArrowRight, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export function PricingTable() {
    const container = useRef(null)
    const navigate = useNavigate()

    return (
        <section ref={container} className="py-32 bg-platinum border-t border-silver">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-graphite mb-6">System Investment</h2>
                    <p className="text-xl text-steel max-w-3xl mx-auto mb-8 leading-relaxed">
                        This is not for companies looking for "a website".<br />
                        This is for operators who want systems that replace memory.
                    </p>
                    <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                        Clear, flat-rate pricing. No hourly billing surprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start mb-20">

                    {/* Architecture - Entry */}
                    <div
                        className="pricing-card-home bg-white border border-silver p-8 rounded-lg hover:border-graphite transition-all cursor-pointer group"
                        onClick={() => navigate('/architecture')}
                    >
                        <div className="mb-8">
                            <span className="bg-platinum text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-silver group-hover:bg-graphite group-hover:text-white transition-colors">Web Architecture</span>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-graphite">$99</span>
                                <span className="text-steel text-sm">/mo + setup</span>
                            </div>
                            <p className="text-sm text-steel mt-4">One-page operational website. Foundation only.</p>
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
                        className="pricing-card-home bg-graphite text-white p-8 rounded-lg shadow-2xl relative transform md:-translate-y-4 cursor-pointer hover:scale-[1.02] transition-transform"
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
                        className="pricing-card-home bg-white border border-silver p-8 rounded-lg hover:border-graphite transition-all cursor-pointer group"
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
            </div>
        </section>
    )
}
