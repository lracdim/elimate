import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Web Architecture', path: '/architecture' },
        { name: 'System', path: '/systems' },
        { name: 'Automation', path: '/automation' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About Us', path: '/about' },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-platinum/80 backdrop-blur-md border-silver h-16"
                    : "bg-transparent border-transparent h-20"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img
                        src="/logo.png"
                        alt="Elimate Systems"
                        className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-graphite uppercase tracking-wide",
                                location.pathname === link.path ? "text-graphite" : "text-steel"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <button
                        className="hidden md:flex bg-graphite text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-graphite/90 transition-all items-center gap-2"
                        onClick={() => window.dispatchEvent(new CustomEvent('open-login-modal'))}
                    >
                        Client Login
                    </button>

                    <button
                        className="md:hidden text-graphite p-2"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-platinum border-b border-silver p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-graphite text-lg font-medium py-2 border-b border-gray-100"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        className="w-full bg-graphite text-white py-4 rounded-sm font-bold uppercase tracking-wider mt-4"
                        onClick={() => {
                            setIsMobileOpen(false)
                            window.dispatchEvent(new CustomEvent('open-analysis-modal'))
                        }}
                    >
                        Initialize Analysis
                    </button>
                </div>
            )}
        </nav>
    )
}
