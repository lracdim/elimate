import { useState, useEffect } from 'react'
import { X, ArrowRight, Lock } from 'lucide-react'
import { cn } from '../../lib/utils'
import gsap from 'gsap'

export function LoginModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
        window.addEventListener('open-login-modal', handleOpen)
        return () => window.removeEventListener('open-login-modal', handleOpen)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            // Animate in
            gsap.fromTo("#login-modal-panel",
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
            )
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate login
        setTimeout(() => {
            setIsLoading(false)
            alert("This is a demo. No actual backend connected.")
        }, 1500)
    }

    const handleClose = () => {
        gsap.to("#login-modal-panel", {
            y: 20, opacity: 0, duration: 0.3, onComplete: () => {
                setIsOpen(false)
                setPassword('')
            }
        })
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-graphite/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Panel */}
            <div
                id="login-modal-panel"
                className="relative bg-white w-full max-w-md rounded-sm shadow-2xl border border-silver overflow-hidden"
            >
                {/* Header */}
                <div className="bg-platinum px-8 py-6 border-b border-silver flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Lock size={16} className="text-steel" />
                        <span className="font-mono text-sm font-bold tracking-widest text-graphite uppercase">
                            Client Portal Access
                        </span>
                    </div>
                    <button onClick={handleClose} className="text-steel hover:text-graphite transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2 text-center mb-8">
                            <h3 className="text-2xl font-bold text-graphite">Welcome Back</h3>
                            <p className="text-steel text-sm">
                                Enter your credentials to access your system dashboard.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-platinum border border-silver rounded-sm px-4 py-3 text-base text-graphite focus:outline-none focus:ring-2 focus:ring-steel/20 transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-platinum border border-silver rounded-sm px-4 py-3 text-base text-graphite focus:outline-none focus:ring-2 focus:ring-steel/20 transition-all font-mono tracking-widest"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-graphite text-white font-bold text-sm py-4 rounded-sm hover:bg-graphite/90 transition-all flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Authenticating...' : 'Access System'}
                            {!isLoading && <ArrowRight size={16} />}
                        </button>

                        <div className="text-center">
                            <a href="#" className="text-xs text-steel hover:text-graphite underline font-mono">
                                Forgot system credentials?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
