import { useState, useEffect } from 'react'
import { X, ArrowRight, Briefcase, FileText, CheckCircle2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import gsap from 'gsap'

export function ServiceApplicationModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState('details') // details, submitted
    const [serviceType, setServiceType] = useState('Unsure')

    useEffect(() => {
        const handleOpen = (e) => {
            if (e.detail?.service) setServiceType(e.detail.service)
            setIsOpen(true)
        }
        window.addEventListener('open-service-modal', handleOpen)
        return () => window.removeEventListener('open-service-modal', handleOpen)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            gsap.fromTo("#service-modal-panel",
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
            )
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleClose = () => {
        gsap.to("#service-modal-panel", {
            y: 20, opacity: 0, duration: 0.3, onComplete: () => {
                setIsOpen(false)
                setStep('details')
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep('submitted')
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-graphite/40 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            <div
                id="service-modal-panel"
                className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-silver overflow-hidden"
            >
                {/* Header */}
                <div className="bg-platinum px-8 py-4 border-b border-silver flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-graphite" />
                        <span className="font-mono text-sm font-semibold tracking-wide text-graphite uppercase">
                            Project Application
                        </span>
                    </div>
                    <button onClick={handleClose} className="text-steel hover:text-graphite transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 md:p-12">
                    {step === 'details' ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2 mb-8">
                                <h3 className="text-2xl font-bold text-graphite font-display">Start Your Build</h3>
                                <p className="text-steel text-base">
                                    Tell us what you're building. We engineer systems for scale.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                        Company Name
                                    </label>
                                    <input type="text" required className="w-full bg-platinum border border-silver rounded px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors" placeholder="Acme Inc." />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                        Work Email
                                    </label>
                                    <input type="email" required className="w-full bg-platinum border border-silver rounded px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors" placeholder="name@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                    Service Interest
                                </label>
                                <select
                                    className="w-full bg-platinum border border-silver rounded px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors"
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                >
                                    <option value="Web Architecture">Web Architecture ($99/mo)</option>
                                    <option value="Business Systems">Business Systems (Custom Build)</option>
                                    <option value="Automation Layer">Workflow Automation</option>
                                    <option value="Full Audit">Existing System Audit</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">
                                    Brief Project Detail
                                </label>
                                <textarea
                                    className="w-full bg-platinum border border-silver rounded px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors min-h-[100px]"
                                    placeholder="We are scaling from 10 to 50 employees and our manual spreadhseets are breaking..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-graphite text-white font-bold text-base py-4 rounded-lg hover:bg-graphite/90 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
                            >
                                Submit Application
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-graphite mb-4">Application Received</h3>
                            <p className="text-steel max-w-md mx-auto mb-8">
                                Our engineering team is reviewing your profile. If you're a good fit, you'll receive a scheduling link within 24 hours.
                            </p>
                            <button
                                onClick={handleClose}
                                className="bg-platinum text-graphite px-8 py-3 rounded font-bold uppercase tracking-wider text-xs hover:bg-silver transition-colors"
                            >
                                Return to Site
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
