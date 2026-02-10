import { useRef, useEffect } from 'react'
import { ArrowRight, Terminal, Database, Cpu, AlertTriangle, CheckCircle2, MessageSquare, Briefcase, Activity, MousePointer2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cn } from '../lib/utils'
import { PricingTable } from '../components/sections/PricingTable'
import { HowItWorks } from '../components/sections/HowItWorks'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <ServicesPillars />
            <SystemDiagnosticSection />
            <SystemShowcase />
            <HowItWorks />
            <TestimonialCarousel />
            <AuthoritySection />
            <PricingTable />
            <FinalCTA />
        </div>
    )
}

function SystemDiagnosticSection() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        })

        tl.from('.diag-header', { opacity: 0, y: 20, duration: 0.6 })
            .from('.diag-step', {
                opacity: 0,
                x: -20,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.2")
            .from('.diag-connector', {
                scaleY: 0,
                transformOrigin: "top",
                stagger: 0.2,
                duration: 0.4
            }, "<")

    }, { scope: container })

    const steps = [
        {
            title: "Lead Enters",
            desc: "Website form • No ownership • No SLA",
            status: "INPUT"
        },
        {
            title: "Manual Follow-Up",
            desc: "Response time varies • Leads decay silently",
            status: "FAIL"
        },
        {
            title: "No Qualification",
            desc: "Sales wastes time • No prioritization",
            status: "FAIL"
        },
        {
            title: "No Feedback Loop",
            desc: "Management guesses • Decisions lag reality",
            status: "FAIL"
        },
        {
            title: "Founder System",
            desc: "Growth stalls • Burnout begins",
            status: "CRITICAL"
        }
    ]

    return (
        <section ref={container} className="py-32 bg-graphite text-platinum relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left: The Logic Flow */}
                    <div>
                        <div className="mb-16">
                            <div className="flex items-center gap-3 text-amber-500 mb-6 font-mono text-xs uppercase tracking-widest diag-header">
                                <AlertTriangle size={14} />
                                <span>System Intelligence</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 diag-header">
                                What We See When We Look at Your Business
                            </h2>
                            <p className="text-lg text-gray-400 diag-header">
                                Most teams see tools. We see failure points.
                            </p>
                        </div>

                        <div className="relative border-l-2 border-white/10 pl-12 space-y-12">
                            {steps.map((step, i) => (
                                <div key={i} className="diag-step relative">
                                    {/* Connector Nodes */}
                                    <div className="absolute -left-[54px] top-2 w-4 h-4 rounded-full border-2 border-graphite bg-white/20 z-10 box-content">
                                        <div className={`w-2 h-2 m-[2px] rounded-full ${step.status === 'INPUT' ? 'bg-blue-400' : 'bg-red-500'}`} />
                                    </div>

                                    <div className="flex items-start justify-between group">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-mono text-xs text-gray-500">0{i + 1}</span>
                                                <h3 className={`font-bold text-xl ${step.status === 'CRITICAL' ? 'text-red-400' : 'text-white'}`}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="font-mono text-xs text-gray-400 uppercase tracking-wide">
                                                {step.desc}
                                            </p>
                                        </div>
                                        <div className={`px-2 py-1 rounded text-[10px] font-bold font-mono ${step.status === 'INPUT' ? 'text-blue-400 bg-blue-400/10' :
                                            step.status === 'CRITICAL' ? 'text-red-400 bg-red-400/10 animate-pulse' :
                                                'text-amber-500 bg-amber-500/10'
                                            }`}>
                                            {step.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Diagnosis / Result */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-white/5 border border-white/10 p-10 rounded-lg backdrop-blur-sm diag-header">
                            <h3 className="text-2xl font-bold text-white mb-6">The Diagnosis</h3>
                            <div className="space-y-6 mb-8 text-gray-300">
                                <p>
                                    You have a leak. It's not visible on Google Analytics.
                                    It happens in the handoff between "Lead" and "Action".
                                </p>
                                <p>
                                    Every time a human has to "remember" to do something,
                                    you lose velocity.
                                </p>
                                <p className="text-white font-bold border-l-4 border-amber-500 pl-4 py-2 bg-white/5">
                                    This is not a traffic problem.<br />
                                    This is an engineering problem.
                                </p>
                            </div>

                            <button
                                className="w-full bg-white text-graphite py-5 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                            >
                                Reveal My System Failure Points
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



function SystemFailurePatterns() {
    const patterns = [
        {
            title: "Leads Enter, Ownership Doesn't",
            desc: "Forms collect data, but no system assigns responsibility. Revenue decays silently as leads wait for 'someone' to notice."
        },
        {
            title: "Work Exists Outside Any System",
            desc: "Tasks live in heads, not databases. There is no audit trail, and management loses the signal."
        },
        {
            title: "Data Is Present but Unusable",
            desc: "Tools exist, but there is no aggregation layer. Decisions lag reality by weeks."
        },
        {
            title: "Automation Exists Without Structure",
            desc: "Scripts fire randomly with no error handling. Teams stop trusting systems because they break silently."
        },
        {
            title: "The Founder Becomes the Router",
            desc: "Every decision flows through one person. Growth stalls, and burnout begins."
        }
    ]

    return (
        <section className="py-24 bg-white border-y border-silver/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-4">Recurring System Failures</h2>
                    <p className="text-steel font-mono text-xs uppercase tracking-widest">We See Across Growing Companies</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {patterns.map((p, i) => (
                        <div key={i} className="p-8 border border-silver/50 hover:border-graphite/30 bg-platinum/20 transition-all rounded-sm group relative">
                            <span className="absolute top-4 right-4 text-xs font-mono text-silver group-hover:text-graphite transition-colors">ERR_0{i + 1}</span>
                            <div className="mb-4 text-amber-600">
                                <Activity size={24} />
                            </div>
                            <h3 className="font-bold text-graphite mb-3 leading-snug">{p.title}</h3>
                            <p className="text-sm text-steel leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                    <div className="p-8 bg-graphite text-white flex flex-col justify-center items-center text-center rounded-sm">
                        <div className="mb-4">
                            <AlertTriangle size={32} className="text-amber-500" />
                        </div>
                        <p className="font-bold text-lg mb-2">The Verdict</p>
                        <p className="text-sm text-gray-400">These are not people problems.<br />These are system design failures.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HeroSection() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('.hero-line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out"
        })

        tl.from('.hero-desc', {
            opacity: 0,
            y: 20,
            duration: 1
        }, "-=0.5")

        tl.from('.hero-cta', {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.5")

    }, { scope: container })

    return (
        <section ref={container} className="relative min-h-[90vh] flex items-center pt-20">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#C1C4C8_1px,transparent_1px),linear-gradient(to_bottom,#C1C4C8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-graphite mb-8 leading-[1.1]">
                        <div className="overflow-hidden"><div className="hero-line">Websites Don't</div></div>
                        <div className="overflow-hidden"><div className="hero-line">Scale Companies.</div></div>
                        <div className="overflow-hidden"><div className="hero-line text-transparent bg-clip-text bg-gradient-to-r from-graphite to-steel">Systems Do.</div></div>
                    </h1>

                    <p className="hero-desc text-xl md:text-2xl text-steel max-w-3xl mb-10 leading-relaxed">
                        We engineer the internal systems that remove missed follow-ups,
                        hidden delays, and founder dependency —
                        so growth doesn’t rely on memory.
                    </p>

                    <p className="hero-desc font-mono text-sm text-amber-600 mb-10 border-l-2 border-amber-600 pl-4 py-1 bg-amber-50 inline-block">
                        If a human has to remember what happens next,
                        your system is already leaking.
                    </p>

                    <div className="hero-cta flex flex-wrap gap-4 items-start">
                        <div className="flex flex-col gap-2">
                            <button
                                className="bg-graphite text-white px-8 py-5 rounded-sm font-bold uppercase tracking-wide flex items-center gap-3 hover:bg-graphite/90 transition-all border border-graphite shadow-xl"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                            >
                                Analyze My Website
                                <Terminal size={18} />
                            </button>
                            <span className="text-xs text-steel max-w-xs leading-tight">
                                Receive a high-level operational diagnosis within 48 hours.
                                No sales call required.
                            </span>
                        </div>

                        <Link
                            to="/architecture" // Mapped to How It Works
                            className="bg-white text-graphite px-8 py-5 rounded-sm font-bold uppercase tracking-wide border-2 border-slate-200 hover:border-graphite transition-all flex items-center gap-3"
                        >
                            See How It Works
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServicesPillars() {
    const pillars = [
        {
            icon: Database,
            title: "Web Architecture",
            tag: "Infrastructure",
            desc: "Not distinct pages. Digital entry points connected directly to your CRM.",
            blueprint: "Blueprint includes system scope, data flow, and conversion logic.",
            link: "/architecture",
            image: "/build-web.png"
        },
        {
            icon: Cpu,
            title: "Business Systems",
            tag: "Internal Tools",
            desc: "Custom dashboards, client portals, and inventory trackers.",
            blueprint: "Blueprint maps roles, processes, and internal visibility layers.",
            link: "/systems",
            image: "/scale-platform.png"
        },
        {
            icon: CheckCircle2,
            title: "Workflow Automation",
            tag: "Efficiency",
            desc: "Event-driven processes that handle follow-ups and invoicing.",
            blueprint: "Blueprint identifies triggers, handoffs, and failure points.",
            link: "/automation",
            image: "/automate-workflow.jpg"
        }
    ]

    return (
        <section className="py-24 bg-white border-y border-silver/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-lg md:text-xl text-graphite font-medium max-w-2xl mx-auto">
                        These are not pages. They are entry points into a single operating system.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="group border border-silver/50 hover:border-graphite/30 bg-platinum/30 rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg flex flex-col">
                            {/* Card Image */}
                            <div className="h-48 w-full overflow-hidden border-b border-silver/50 relative shrink-0">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur border border-silver rounded-sm text-graphite shadow-sm">
                                    <pillar.icon size={20} />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-mono uppercase tracking-wider text-steel border border-silver/50 px-2 py-1 rounded-sm bg-white/50">
                                        {pillar.tag}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-graphite mb-4 group-hover:translate-x-1 transition-transform">
                                    {pillar.title}
                                </h3>
                                <p className="text-steel mb-8 leading-relaxed text-sm">
                                    {pillar.desc}
                                </p>

                                <div className="mt-auto pt-6 border-t border-silver/50">
                                    <p className="text-xs text-graphite/80 font-mono mb-6 leading-relaxed">
                                        <span className="text-amber-600 font-bold mr-2">{'//'}</span>
                                        {pillar.blueprint}
                                    </p>
                                    <Link to={pillar.link} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-graphite hover:gap-4 transition-all hover:text-graphite/70">
                                        View Blueprint <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function PainPointsSection() {
    return (
        <section className="py-32 bg-graphite text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500 mb-6 font-mono text-sm uppercase tracking-widest">
                            <AlertTriangle size={16} />
                            Operational Failure Points
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Why Most Companies <span className="text-amber-500">Stall at Scale.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-md">
                            You don't have a traffic problem. You have a friction problem.
                        </p>
                        <button
                            className="border border-white/20 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-graphite transition-all"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                        >
                            Diagnose Your Friction
                        </button>
                    </div>
                    <div className="grid gap-6">
                        {[
                            { title: "Manual Follow-up", desc: "Leads go cold because humans forget." },
                            { title: "Disconnected Data", desc: "Re-entering data between 3 different tools." },
                            { title: "Founder Dependency", desc: "Nothing moves unless you approve it." },
                            { title: "Zero Visibility", desc: "You don't know your profit until end of month." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                                <span className="font-mono text-amber-500/50 text-xl">0{i + 1}</span>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function SystemShowcase() {
    const container = useRef(null)
    const slider = useRef(null)

    useGSAP(() => {
        const totalWidth = slider.current.scrollWidth
        const viewWidth = container.current.offsetWidth

        gsap.to(slider.current, {
            x: -(totalWidth - viewWidth - 100),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                end: "+=2000"
            }
        })
    }, { scope: container })

    const systems = [
        {
            title: "Client Management System",
            desc: "Centralizes clients, contracts, status, and communication — eliminating manual follow-ups and status confusion.",
            id: "01"
        },
        {
            title: "Internal Operations Dashboard",
            desc: "Provides real-time visibility into workload, bottlenecks, and execution health.",
            id: "02"
        },
        {
            title: "Sales Pipeline Engine",
            desc: "Tracks lead ownership, stage movement, and conversion signals automatically.",
            id: "03"
        },
        {
            title: "Support & Ticket System",
            desc: "Routes, prioritizes, and audits customer issues without manual oversight.",
            id: "04"
        }
    ]

    return (
        <section ref={container} className="py-20 bg-platinum overflow-hidden h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 w-full mb-12">
                <p className="font-mono text-steel uppercase tracking-widest text-sm mb-4">The Build Registry</p>
                <h2 className="text-4xl md:text-5xl font-bold text-graphite">What We Actually Build</h2>
            </div>

            <div ref={slider} className="flex gap-8 px-4 pl-[max(1rem,calc((100vw-80rem)/2))] w-fit">
                {systems.map((sys, i) => (
                    <div key={i} className="flex-shrink-0 w-[600px] h-[400px] bg-white border border-silver p-12 flex flex-col justify-between group hover:border-graphite transition-colors hover:shadow-xl">
                        <div className="flex justify-between">
                            <span className="font-mono text-6xl text-silver group-hover:text-graphite transition-colors opacity-50">{sys.id}</span>
                            <div className="w-16 h-16 bg-platinum rounded-full flex items-center justify-center">
                                <ArrowRight className="-rotate-45" size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-graphite mb-6">{sys.title}</h3>
                            <p className="text-xl text-steel leading-relaxed">{sys.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function TestimonialCarousel() {
    const row1 = [
        { name: "NovaLedger", industry: "FinTech", size: "18 employees", quote: "We didn’t realize how much work was leaking between tools until the system exposed it." },
        { name: "BrightForm", industry: "Professional Services", size: "12 employees", quote: "Once visibility improved, decision-making became obvious." },
        { name: "Atlas Ridge", industry: "Logistics", size: "42 employees", quote: "The system replaced daily check-ins. That alone changed everything." },
        { name: "Coreline Mfg", industry: "Manufacturing", size: "67 employees", quote: "Automation only worked after structure was fixed." }
    ]

    const row2 = [
        { name: "Strata Health", industry: "Healthcare Operations", size: "35 employees", quote: "We finally had a single source of truth for operations." },
        { name: "Verity Commerce", industry: "E-commerce", size: "22 employees", quote: "Sales stopped guessing. The pipeline told us where to focus." },
        { name: "Northpeak Logistics", industry: "Logistics", size: "90 employees", quote: "We scaled without adding management overhead." },
        { name: "Lumen Advisory", industry: "Consulting", size: "14 employees", quote: "The system showed problems we couldn’t articulate before." }
    ]

    const row3 = [
        { name: "Axiom Digital", industry: "Digital Agency", size: "25 employees", quote: "This wasn’t web work. It was operational engineering." },
        { name: "Clearpath Edu", industry: "Education Services", size: "40 employees", quote: "Internal clarity improved before revenue did — right order." },
        { name: "Ironclad Services", industry: "Field Services", size: "55 employees", quote: "Our workflows finally made sense to new hires." },
        { name: "Blue Harbor", industry: "Real Estate Operations", size: "30 employees", quote: "The ROI came from visibility, not features." }
    ]

    return (
        <section className="py-24 bg-white overflow-hidden border-y border-silver/30">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl font-bold text-graphite mb-2">What Operators Say After Deployment</h2>
                <p className="text-steel font-mono text-xs uppercase tracking-widest">Outcomes reflect operational clarity — not marketing metrics.</p>
            </div>

            <div className="space-y-8">
                <MarqueeRow items={row1} direction="left" speed={40} />
                <MarqueeRow items={row2} direction="right" speed={50} />
                <MarqueeRow items={row3} direction="left" speed={45} />
            </div>
        </section>
    )
}

function MarqueeRow({ items, direction, speed }) {
    const container = useRef(null)
    const inner = useRef(null)

    useGSAP(() => {
        const xDist = direction === 'left' ? '-50%' : '50%'

        gsap.to(inner.current, {
            x: xDist,
            duration: speed,
            ease: "none",
            repeat: -1
        })
    }, { scope: container })

    return (
        <div ref={container} className="relative w-full overflow-hidden group">
            <div ref={inner} className={`flex w-max ${direction === 'right' ? '-translate-x-1/2' : ''} group-hover:[animation-play-state:paused]`}>
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="w-[450px] mx-4 bg-platinum p-8 rounded border border-silver hover:border-graphite transition-colors flex flex-col justify-between">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-graphite">{item.name}</span>
                                <span className="font-mono text-xs text-steel border border-silver px-2 py-1 rounded-sm bg-white">{item.size}</span>
                            </div>
                            <span className="text-xs text-amber-600 font-mono uppercase tracking-wider">{item.industry}</span>
                        </div>
                        <p className="text-graphite text-sm leading-relaxed font-medium">"{item.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function AuthoritySection() {
    return (
        <section className="py-32 bg-graphite text-platinum text-center">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-white">The Growth Ceiling</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4 p-8 border border-white/5 rounded bg-white/5">
                        <div className="text-6xl font-black text-gray-600">10</div>
                        <p className="font-bold text-white uppercase tracking-wide">Employees</p>
                        <p className="text-sm text-gray-400">Processes break quietly. Work relies on memory.</p>
                    </div>
                    <div className="space-y-4 p-8 border border-white/10 rounded bg-white/10 transform md:-translate-y-4 shadow-xl">
                        <div className="text-6xl font-black text-white">50</div>
                        <p className="font-bold text-white uppercase tracking-wide">Employees</p>
                        <p className="text-sm text-gray-300">Visibility disappears. Decisions lag reality.</p>
                    </div>
                    <div className="space-y-4 p-8 border border-white/5 rounded bg-white/5">
                        <div className="text-6xl font-black text-gray-600">100</div>
                        <p className="font-bold text-white uppercase tracking-wide">Employees</p>
                        <p className="text-sm text-gray-400">Complexity compounds. Systems must replace intuition.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FinalCTA() {
    return (
        <section className="py-40 bg-white text-graphite text-center border-t border-silver">
            {/* Architectural Grid Background (Light) */}
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
                    Stop Guessing.<br />Start Engineering.
                </h2>
                <button
                    className="bg-graphite text-white px-10 py-6 text-lg rounded-sm font-bold uppercase tracking-widest hover:bg-graphite/90 transition-colors shadow-xl"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-analysis-modal'))}
                >
                    Expose My System Bottlenecks
                </button>
            </div>
        </section>
    )
}
