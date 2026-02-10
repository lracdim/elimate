import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useDemo } from './DemoContext'
import { Activity, Menu, X, User, LogOut, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function VetClinicLayout() {
    const { user, logout } = useDemo()
    const navigate = useNavigate()
    const location = useLocation()
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    // Check if we are in a dashboard view OR auth view
    const isDashboard = location.pathname.includes('/dashboard')
    const isAuth = location.pathname.includes('/auth')

    const handleLogout = () => {
        logout()
        navigate('/demos/veterinary-clinic/auth?role=client')
    }

    const scrollToSection = (id) => {
        if (location.pathname !== '/demos/veterinary-clinic') {
            navigate('/demos/veterinary-clinic')
            setTimeout(() => {
                const element = document.getElementById(id)
                if (element) element.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            const element = document.getElementById(id)
            if (element) element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileOpen(false)
    }

    return (
        <div className="font-sans antialiased text-slate-800 bg-slate-50/50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/demos/veterinary-clinic" className="flex items-center gap-3 group">
                            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                                <Activity className="text-white" size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">ApexCare</span>
                                <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase opacity-80">Veterinary Group</span>
                            </div>
                        </Link>

                        {/* Desktop Menu - Hidden on Dashboard AND Auth */}
                        {!isDashboard && !isAuth && (
                            <nav className="hidden md:flex items-center space-x-10">
                                {[
                                    { label: 'Services', id: 'services' },
                                    { label: 'Specialists', id: 'specialists' },
                                    { label: 'Locations', id: 'locations' },
                                    { label: 'Emergency', id: 'emergency' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-sm font-medium text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        )}

                        {/* Actions */}
                        <div className="hidden md:flex items-center space-x-6">
                            {user ? (
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-end">
                                        <div className="text-sm font-bold text-slate-900">{user.name}</div>
                                        <div className="text-xs text-slate-500 font-medium">{user.role === 'admin' ? 'Veterinary Director' : 'Pet Parent'}</div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="h-10 w-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-all border border-slate-200 text-slate-500 hover:text-red-500"
                                        title="Sign Out"
                                    >
                                        <LogOut size={18} />
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    {!isAuth && (
                                        <Link
                                            to="/demos/veterinary-clinic/auth?role=client"
                                            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                                        >
                                            Client Login
                                        </Link>
                                    )}
                                    <Link
                                        to="/demos/veterinary-clinic/auth?role=client"
                                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-slate-600"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                        >
                            {isMobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            {/* Premium Footer */}
            {!isDashboard && (
                <footer className="bg-slate-900 text-white pt-20 pb-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-12 mb-16">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-2 rounded-lg">
                                        <Activity className="text-white" size={20} />
                                    </div>
                                    <span className="font-bold text-xl">ApexCare</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Setting the gold standard in veterinary medicine through advanced technology and compassionate care.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg mb-6">Medical Services</h4>
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors">Surgery & Anesthesia</li>
                                    <li onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors">Internal Medicine</li>
                                    <li onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors">Dental Care</li>
                                    <li onClick={() => scrollToSection('emergency')} className="hover:text-white cursor-pointer transition-colors">Emergency (24/7)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg mb-6">Locations</h4>
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li onClick={() => scrollToSection('locations')} className="hover:text-white cursor-pointer transition-colors">New York (HQ)</li>
                                    <li onClick={() => scrollToSection('locations')} className="hover:text-white cursor-pointer transition-colors">Los Angeles</li>
                                    <li onClick={() => scrollToSection('locations')} className="hover:text-white cursor-pointer transition-colors">Chicago</li>
                                    <li onClick={() => scrollToSection('locations')} className="hover:text-white cursor-pointer transition-colors">Miami</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg mb-6">Staff Access</h4>
                                <p className="text-sm text-slate-400 mb-4">Authorized personnel only.</p>
                                <Link
                                    to="/demos/veterinary-clinic/auth?role=admin"
                                    className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-white transition-colors"
                                >
                                    Admin Portal <ChevronRight size={14} className="ml-1" />
                                </Link>
                            </div>
                        </div>

                        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-xs text-slate-500">
                                © 2024 ApexCare Veterinary Group. All rights reserved.
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                                Powered by <span className="text-slate-400">Elimate Systems</span>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    )
}
