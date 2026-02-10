import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDemo } from './DemoContext'
import { Activity, Lock, ArrowRight, User, ShieldCheck, AlertCircle } from 'lucide-react'

export default function Auth() {
    const { login, user } = useDemo()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    // Default role just for visual context or background, usage is credential-based now
    const roleParam = searchParams.get('role') || 'client'
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        username: roleParam === 'admin' ? 'admin' : 'user', // Prefill for convenience in demo
        password: roleParam === 'admin' ? 'admi123' : 'user123'
    })

    useEffect(() => {
        if (user) {
            navigate(user.role === 'admin' ? '/demos/veterinary-clinic/dashboard/admin' : '/demos/veterinary-clinic/dashboard/client')
        }
    }, [user, navigate])

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // Simulate network delay
        setTimeout(() => {
            const success = login(formData.username, formData.password)
            if (success) {
                // Navigate handled by useEffect
            } else {
                setError('Invalid credentials. Please try again.')
                setIsLoading(false)
            }
        }, 800)
    }

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center relative bg-slate-100 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={roleParam === 'admin'
                        ? "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070"
                        : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=2071"}
                    alt="Clinic Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 w-full max-w-md px-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/40 animate-in zoom-in-95 duration-500">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <div className="mx-auto w-12 h-12 bg-blue-600 rounded-xl text-white flex items-center justify-center shadow-lg shadow-blue-600/30 mb-4">
                                <Activity size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
                            <p className="text-slate-500 text-sm mt-1">
                                {roleParam === 'admin' ? 'Secure Staff Portal Access' : 'Pet Parent Client Portal'}
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            {error && (
                                <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 text-red-600 text-xs font-bold animate-in slide-in-from-top-2">
                                    <AlertCircle size={16} />
                                    {error}
                                </div>
                            )}

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Username</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="password"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Authenticating...
                                        </>
                                    ) : (
                                        <>
                                            Sign In to System <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 pt-6 border-t border-slate-200/60 text-center">
                            <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                                <ShieldCheck size={12} className="text-emerald-500" />
                                Secure Connection Established
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 space-y-2">
                    <p className="text-xs text-white/60 font-medium">System secured by 256-bit encryption.</p>
                    <p className="text-xs text-white/40">Default Demo Credentials: admin/admi123 or user/user123</p>
                </div>
            </div>
        </div>
    )
}
