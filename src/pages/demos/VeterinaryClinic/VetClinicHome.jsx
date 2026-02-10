import { Link } from 'react-router-dom'
import {
    Activity, Cloud, Shield, Sparkles, ArrowRight, Stethoscope,
    Microscope, Scissors, Heart, MapPin, Clock, Phone, Mail, Award, CheckCircle
} from 'lucide-react'

export default function VetClinicHome() {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50 -z-10"></div>
                {/* Abstract Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse duration-[10000ms]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 animate-pulse duration-[12000ms]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 animate-in slide-in-from-bottom-5 duration-700 delay-100">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            Accepting New Patients • 24/7 Emergency Care
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in slide-in-from-bottom-5 duration-700 delay-200">
                            Advanced Medicine.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Uncompromising Care.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 duration-700 delay-300">
                            ApexCare combines board-certified specialists with state-of-the-art diagnostic technology. We don't just treat symptoms; we engineer health outcomes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in slide-in-from-bottom-5 duration-700 delay-400">
                            <Link to="/demos/veterinary-clinic/auth?role=client" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1">
                                Schedule Consultation
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link to="/demos/veterinary-clinic/auth?role=client" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-lg shadow-slate-200/50 hover:shadow-slate-200/80 hover:-translate-y-1">
                                Patient Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Clinical Excellence</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Medical Services</h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our facility is designed to handle everything from routine wellness to complex surgical interventions with ICU-level monitoring.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Stethoscope,
                                title: "Internal Medicine",
                                desc: "Advanced diagnostics including digital radiography, color-flow Doppler ultrasound, and in-house laboratory for rapid results."
                            },
                            {
                                icon: Scissors,
                                title: "Surgical Center",
                                desc: "State-of-the-art sterile surgical suites equipped for soft tissue, orthopedic, and minimally invasive laparoscopic procedures."
                            },
                            {
                                icon: Heart,
                                title: "Cardiology",
                                desc: "Complete cardiac evaluations including echocardiography, ECG monitoring, and hypertension management by board-certified cardiologists."
                            },
                            {
                                icon: Microscope,
                                title: "Oncology",
                                desc: "Comprehensive cancer care strategies focusing on quality of life, including staging, chemotherapy, and palliative support."
                            },
                            {
                                icon: Activity,
                                title: "Critical Care",
                                desc: "24/7 ICU monitoring with multiparametric oversight of vitals, oxygen therapy, and advanced pain management protocols."
                            },
                            {
                                icon: Sparkles,
                                title: "Dental Suite",
                                desc: "Digital dental radiography and high-speed scaling units for complete oral health assessments and surgical extractions."
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPECIALISTS SECTION */}
            <section id="specialists" className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Our Team</h2>
                            <h3 className="text-4xl font-bold text-white mb-6">World-Class Specialists</h3>
                            <p className="text-lg text-slate-400">
                                Your pet is in expert hands. Our team includes specialists board-certified by the American College of Veterinary Surgeons and Internal Medicine.
                            </p>
                        </div>
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold transition-all">
                            View All Staff
                        </button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Dr. Sarah Jenkins",
                                role: "Medical Director",
                                education: "DVM, Cornell University",
                                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
                            },
                            {
                                name: "Dr. Michael Chen",
                                role: "Lead Surgeon",
                                education: "DVM, UC Davis",
                                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
                            },
                            {
                                name: "Dr. Emily Rodriguez",
                                role: "Internal Medicine",
                                education: "VMD, Univ. of Pennsylvania",
                                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
                            },
                            {
                                name: "Dr. David Kim",
                                role: "Emergency & Critical Care",
                                education: "DVM, Colorado State",
                                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                                <img src={doc.image} alt={doc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent pt-20">
                                    <h4 className="text-xl font-bold text-white">{doc.name}</h4>
                                    <p className="text-blue-300 font-medium mb-1">{doc.role}</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wide">{doc.education}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATIONS SECTION */}
            <section id="locations" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Visit Us</h2>
                                <h3 className="text-4xl font-bold text-slate-900 mb-6">Conveniently Located</h3>
                                <p className="text-lg text-slate-600">
                                    Our flagship facility in New York includes a 24-hour pharmacy, dedicated isolation wards, and comfort rooms for visitation.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">New York (HQ)</h4>
                                        <p className="text-slate-600">1234 Park Avenue, Suite 100<br />New York, NY 10029</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Hours of Operation</h4>
                                        <p className="text-slate-600">Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Contact</h4>
                                        <p className="text-slate-600">Main: (212) 555-0123<br />Fax: (212) 555-0124</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-[500px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1500"
                                className="w-full h-full object-cover opacity-80"
                                alt="Map Location"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-xl font-bold text-slate-900 flex items-center gap-2">
                                    <MapPin className="text-red-500" /> ApexCare HQ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EMERGENCY SECTION */}
            <section id="emergency" className="py-24 bg-red-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-red-700/50 rounded-full px-4 py-1 text-sm font-bold mb-6 border border-red-400/30">
                        <Activity className="animate-pulse" size={16} /> 24/7 Trauma Center
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">In an Emergency?</h2>
                    <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                        Do not wait. We have a dedicated trauma team on standby 24 hours a day, 365 days a year. No appointment necessary for critical cases.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-3">
                            <Phone size={24} /> (212) 555-9111
                        </button>
                        <button className="bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-red-800 transition-colors shadow-xl border border-red-500">
                            Get Directions
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to elevate your pet's care?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join the thousands of satisfied clients who have made ApexCare their primary provider.
                    </p>
                    <Link to="/demos/veterinary-clinic/auth?role=client" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/20">
                        Create Patient Account
                    </Link>
                </div>
            </section>
        </div>
    )
}
