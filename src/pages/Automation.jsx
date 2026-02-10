import { useRef } from 'react'
import { Workflow, Zap, MessageSquare, Clock, Mail, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Automation() {
    const container = useRef(null)

    // useGSAP(() => {
    //     gsap.from('.fade-in', {
    //         y: 30,
    //         opacity: 0,
    //         duration: 0.8,
    //         stagger: 0.1,
    //         ease: "power2.out"
    //     })
    // }, { scope: container })

    return (
        <div ref={container} className="min-h-screen bg-platinum pb-20">
            {/* Header */}
            <div className="bg-white border-b border-silver pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-6 text-steel font-mono uppercase tracking-widest text-xs">
                        <Workflow size={14} />
                        <span>Automation Layer</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-graphite mb-6 fade-in">
                        Workflow Automation
                    </h1>
                    <p className="text-xl text-steel max-w-2xl leading-relaxed fade-in">
                        Human operators should make decisions, not move data. We connect your isolated software tools
                        with invisible, event-driven pipelines that run 24/7.
                    </p>
                </div>
            </div>

            {/* The Outcome */}
            <section className="py-20 bg-graphite text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 border border-white/10 rounded bg-white/5 fade-in">
                            <Clock className="mx-auto mb-4 text-amber-500" size={32} />
                            <h3 className="text-lg font-bold mb-2">Zero Latency</h3>
                            <p className="text-gray-400 text-sm">Leads contacted instantly, 24/7/365.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded bg-white/5 fade-in">
                            <CheckCircle className="mx-auto mb-4 text-green-500" size={32} />
                            <h3 className="text-lg font-bold mb-2">100% Accuracy</h3>
                            <p className="text-gray-400 text-sm">No copy-paste errors. No missed fields.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded bg-white/5 fade-in">
                            <Zap className="mx-auto mb-4 text-purple-500" size={32} />
                            <h3 className="text-lg font-bold mb-2">Scaling Velocity</h3>
                            <p className="text-gray-400 text-sm">Handle 10x volume with 1x staff.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automation Scenarios */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-graphite mb-12 fade-in">Active Automations</h2>

                    <div className="space-y-4 max-w-4xl">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Lead Speed-to-Lead",
                                trigger: "Form Submit",
                                action: "Wait 2min → Send WhatsApp → Notify Slack → Create CRM Deal",
                                impact: "+40% Conversion"
                            },
                            {
                                icon: Mail,
                                title: "Client Onboarding",
                                trigger: "Contract Signed",
                                action: "Create Drive Folder → Send Welcome Email → Generate Invoices",
                                impact: "Saved 4h/client"
                            },
                            {
                                icon: Clock,
                                title: "Payment Recovery",
                                trigger: "Invoice Overdue",
                                action: "Send Reminder 1 → Wait 3 days → Reminder 2 → Alert Finance",
                                impact: "Reduced AR DSOs"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-silver p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow fade-in">
                                <div className="p-4 bg-platinum rounded-full text-graphite">
                                    <item.icon size={24} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-bold text-graphite text-lg">{item.title}</h3>
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs font-mono mt-2 text-steel">
                                        <span className="bg-platinum px-2 py-1 rounded border border-silver">IF: {item.trigger}</span>
                                        <span className="hidden md:inline">→</span>
                                        <span className="bg-platinum px-2 py-1 rounded border border-silver">THEN: {item.action}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold uppercase tracking-wider text-green-600 border border-green-200 bg-green-50 px-3 py-1 rounded-full">
                                        {item.impact}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-graphite text-platinum p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 fade-in">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Automate Your Operations</h3>
                            <p className="text-gray-400">Available as an add-on to any System build or as a standalone optimization.</p>
                        </div>
                        <button
                            className="bg-white text-graphite px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-all flex-shrink-0"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { service: 'Automation Layer' } }))}
                        >
                            Start Automating
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
