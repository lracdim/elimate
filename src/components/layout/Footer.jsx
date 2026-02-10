import { Terminal, Shield, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="bg-graphite text-white border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Terminal className="text-white" size={24} />
                            <span className="font-mono font-bold text-xl">Elimate_</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Engineering operational leverage for scaling companies. We build the systems that run your business.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            System Status: Operational
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-400">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link to="/architecture" className="text-gray-300 hover:text-white text-sm transition-colors">Web Architecture</Link></li>
                            <li><Link to="/systems" className="text-gray-300 hover:text-white text-sm transition-colors">Internal Systems</Link></li>
                            <li><Link to="/automation" className="text-gray-300 hover:text-white text-sm transition-colors">Workflow Automation</Link></li>
                            <li><Link to="/dashboards" className="text-gray-300 hover:text-white text-sm transition-colors">Operational Dashboards</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-400">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">Philosophy</Link></li>
                            <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm transition-colors">System Breakdowns</Link></li>
                            <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm transition-colors">Pricing</Link></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Client login</a></li>
                        </ul>
                    </div>

                    {/* Legal/Compliance */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-400">Compliance</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Shield size={14} />
                                Enterprise Security
                            </li>
                            <li className="text-gray-500 text-xs mt-4">
                                © 2026 Elimate Systems Inc.<br />
                                All rights reserved.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs font-mono lowercase">
                        init_sequence_complete // ready_to_scale
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
