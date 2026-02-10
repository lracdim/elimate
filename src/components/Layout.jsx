import { Outlet, Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navRef = useRef(null)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location])

    useGSAP(() => {
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                if (self.scroll() > 50) {
                    gsap.to(navRef.current, {
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                        duration: 0.3
                    })
                } else {
                    gsap.to(navRef.current, {
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        backdropFilter: "blur(0px)",
                        boxShadow: "none",
                        duration: 0.3
                    })
                }
            }
        })
    })

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/#why' },
        { name: 'Contact', href: '/#contact' },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <header
                ref={navRef}
                className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
            >
                <div className="container-custom flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">E</span>
                        </div>
                        <span className="font-heading font-bold text-xl text-slate-900">
                            Elimate
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/pricing"
                            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-900" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg md:hidden">
                        <nav className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-slate-600 hover:text-slate-900 font-medium py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/pricing"
                                className="bg-slate-900 text-white px-5 py-3 rounded-lg font-medium text-center"
                            >
                                Get Started
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">E</span>
                                </div>
                                <span className="font-heading font-bold text-xl">Elimate</span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                Engineering business systems that scale.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
                                <li><Link to="/services/business-systems" className="hover:text-white transition-colors">Business Systems</Link></li>
                                <li><Link to="/services/automation" className="hover:text-white transition-colors">Automation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link to="/#why" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Get Started</h4>
                            <p className="text-slate-400 text-sm mb-4">
                                Ready to build your system?
                            </p>
                            <Link
                                to="/pricing"
                                className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
                            >
                                View Pricing
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
                        © {new Date().getFullYear()} Elimate. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
