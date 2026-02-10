import { useState, useRef } from 'react'
import { ArrowRight, Activity, Search, FileText, Layout, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0)
    const container = useRef(null)

    const steps = [
        {
            id: "01",
            title: "System Intake",
            subtitle: "Analyze Your Current Architecture",
            icon: Search,
            description: "You submit your website or system entry point. We don’t just “scan” it — we map how information, leads, and actions actually flow.",
            details: [
                "Entry points identified (forms, pages, triggers)",
                "Structural signals extracted (UI, content weight, logic)",
                "Initial risk markers detected",
                "Establishes the system baseline"
            ]
        },
        {
            id: "02",
            title: "Friction Detection",
            subtitle: "Expose Hidden Failure Points",
            icon: AlertTriangle,
            description: "Most companies lose momentum between intent and action. We surface where that happens.",
            details: [
                "Manual handoffs & Ownership gaps",
                "Disconnected tools & Data without visibility",
                "Automation without structure",
                "Identifying where growth silently leaks"
            ]
        },
        {
            id: "03",
            title: "System Diagnosis",
            subtitle: "Translate Signals Into Insight",
            icon: Activity,
            description: "We don’t give you vanity scores. We give you operational meaning.",
            details: [
                "UI / UX structure evaluation",
                "Content & load weight analysis",
                "Workflow logic & Feedback loops",
                "Automation readiness assessment"
            ]
        },
        {
            id: "04",
            title: "Blueprint & Next Actions",
            subtitle: "From Diagnosis to Design",
            icon: Layout,
            description: "Once failure points are clear, we define what to build — and what not to.",
            details: [
                "Entry architecture (web → system)",
                "Internal dashboards & pipelines",
                "Workflow automation layers",
                "Only what removes friction and restores velocity"
            ]
        }
    ]

    useGSAP(() => {
        gsap.from(".hiw-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%"
            }
        })
    }, { scope: container })

    return (
        <section ref={container} className="py-24 bg-graphite text-platinum relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 hiw-header">How It Works</h2>
                    <p className="text-xl text-steel max-w-2xl hiw-header">
                        Elimate doesn’t start with design. We start with <span className="text-white font-bold">system truth</span>.
                        <br />
                        Our process exposes the invisible friction inside your operation — then engineers it out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Navigation */}
                    <div className="space-y-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveStep(i)}
                                className={cn(
                                    "group cursor-pointer p-6 rounded-lg transition-all duration-300 border border-transparent",
                                    activeStep === i
                                        ? "bg-white/10 border-white/20"
                                        : "hover:bg-white/5 hover:border-white/10"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={cn(
                                        "font-mono text-sm uppercase tracking-wider transition-colors",
                                        activeStep === i ? "text-amber-500 font-bold" : "text-steel"
                                    )}>
                                        STEP {step.id}
                                    </span>
                                    {activeStep === i && (
                                        <div className="h-px flex-1 bg-amber-500/50" />
                                    )}
                                </div>
                                <h3 className={cn(
                                    "text-2xl font-bold mt-2 transition-colors",
                                    activeStep === i ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                                )}>
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Right: Content Display */}
                    <div className="relative min-h-[500px]">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "absolute inset-0 transition-all duration-500",
                                    activeStep === i
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 translate-x-8 pointer-events-none"
                                )}
                            >
                                <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-sm">
                                    <div className="w-16 h-16 bg-amber-500/20 rounded-lg flex items-center justify-center mb-8 text-amber-500">
                                        <step.icon size={32} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2">{step.subtitle}</h3>
                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="space-y-4">
                                        {step.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                                <span className="text-platinum/80">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcome Section */}
                <div className="mt-24 border-t border-white/10 pt-16">
                    <div className="bg-white text-graphite rounded-xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">The Outcome</h3>
                                <p className="text-xl text-graphite/80 leading-relaxed mb-8">
                                    You don’t leave with a report. You leave with clarity.
                                </p>
                                <button
                                    className="bg-graphite text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-graphite/90 transition-all flex items-center gap-3"
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                                >
                                    Start The Process
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="bg-platinum/50 rounded-lg p-8 border border-graphite/10 space-y-4">
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="text-green-600" />
                                    <span className="font-bold text-graphite">Clarify What’s Broken</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="text-green-600" />
                                    <span className="font-bold text-graphite">Understand Why It’s Broken</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="text-green-600" />
                                    <span className="font-bold text-graphite">Know What Actually Needs Engineering</span>
                                </div>
                                <div className="h-px bg-graphite/10 my-4" />
                                <p className="text-sm font-mono text-steel uppercase tracking-wider text-center pt-2">
                                    That’s how systems scale companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
