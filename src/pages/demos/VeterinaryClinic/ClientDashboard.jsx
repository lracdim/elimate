import { useDemo } from './DemoContext'
import { Calendar, Plus, Clock, FileText, Settings, Heart, PawPrint, ChevronRight, X, User, AlertTriangle, Syringe, Activity, Filter, Download, Briefcase } from 'lucide-react'
import { useState } from 'react'

export default function ClientDashboard() {
    const { user, pets, appointments, addAppointment, addPet, notifications } = useDemo()
    const [isBookModalOpen, setIsBookModalOpen] = useState(false)
    const [isPetModalOpen, setIsPetModalOpen] = useState(false)
    const [selectedPet, setSelectedPet] = useState(null) // For Profile View

    // Form States
    const [bookForm, setBookForm] = useState({ pet: '', type: 'General Checkup', date: '', time: '', notes: '' })
    const [petForm, setPetForm] = useState({ name: '', breed: '', age: '', weight: '', sex: 'Male' })

    const handleBookSubmit = (e) => {
        e.preventDefault()
        if (!bookForm.pet || !bookForm.date) return alert("Please fill in required fields")
        addAppointment(bookForm)
        setIsBookModalOpen(false)
        setBookForm({ pet: '', type: 'General Checkup', date: '', time: '', notes: '' })
    }

    const handlePetSubmit = (e) => {
        e.preventDefault()
        if (!petForm.name) return
        addPet({ ...petForm, image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=150' })
        setIsPetModalOpen(false)
        setPetForm({ name: '', breed: '', age: '', weight: '', sex: 'Male' })
    }

    // Safety: Ensure arrays
    const safeAppointments = Array.isArray(appointments) ? appointments : []
    const upcoming = safeAppointments.filter(a => a.status !== 'Completed' && a.status !== 'Cancelled')
    const safePets = Array.isArray(pets) ? pets : []

    // Prevent crash if user is not loaded yet (though layout usually handles this)
    // We render a skeleton or generic view if user is null to avoid white screen
    const userName = user?.name ? user.name.split(' ')[0] : 'Guest'

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            {/* Context Notification Toast */}
            {notifications.length > 0 && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
                    {notifications.map(n => (
                        <div key={n.id} className="bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-right duration-300 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            {n.msg}
                        </div>
                    ))}
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Welcome, {userName} 👋</h1>
                        <p className="text-slate-500">Here's what's happening with your furry family.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsPetModalOpen(true)}
                            className="bg-white text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Plus size={16} /> Add New Pet
                        </button>
                        <button
                            onClick={() => setIsBookModalOpen(true)}
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                        >
                            <Calendar size={16} /> Book Appointment
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Pets & Upcoming */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Pets Row */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {safePets.map(pet => (
                                <div
                                    key={pet.id}
                                    onClick={() => setSelectedPet(pet)}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg">
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <img src={pet.image} alt={pet.name} className="w-20 h-20 rounded-xl object-cover shadow-sm bg-slate-100" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-lg text-slate-900">{pet.name}</h3>
                                            </div>
                                            <p className="text-slate-500 text-sm">{pet.breed} • {pet.age}</p>
                                            <div className="mt-3 flex gap-2">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-bold">
                                                    Healthy
                                                </span>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-bold">
                                                    {pet.weight}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Empty Add Slot */}
                            <button
                                onClick={() => setIsPetModalOpen(true)}
                                className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                    <Plus size={24} />
                                </div>
                                <span className="font-bold text-sm">Register Another Pet</span>
                            </button>
                        </div>

                        {/* Appointments Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    <Clock size={18} className="text-blue-600" /> Upcoming Appointments
                                </h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {upcoming.length === 0 ? (
                                    <div className="p-8 text-center text-slate-500">No upcoming appointments.</div>
                                ) : (
                                    upcoming.map(appt => (
                                        <div key={appt.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex flex-col items-center justify-center font-bold border border-blue-100">
                                                    <span className="text-xs uppercase leading-none">{new Date(appt.date).toLocaleString('default', { month: 'short' })}</span>
                                                    <span className="text-xl leading-none mt-1">{new Date(appt.date + 'T00:00:00').getDate()}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">{appt.type}</h4>
                                                    <p className="text-sm text-slate-500">for <span className="font-semibold text-slate-700">{appt.pet}</span> at {appt.time}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${appt.status === 'Confirmed' ? 'bg-green-50 text-green-700 border-green-100' :
                                                    appt.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                        'bg-slate-100 text-slate-600 border-slate-200'
                                                    }`}>
                                                    {appt.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Health Tips / Feed */}
                    <div className="space-y-6">
                        <div className="bg-blue-600 rounded-2xl shadow-xl shadow-blue-600/20 p-6 text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Seasonal Alert</h3>
                                <p className="text-blue-100 text-sm mb-4 leading-relaxed">Tick season is starting early this year. Ensure your pets are protected with their monthly preventatives.</p>
                                <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-white/20">
                                    View Products
                                </button>
                            </div>
                            {/* Decor */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <FileText size={18} className="text-slate-400" /> Recent Records
                            </h3>
                            <ul className="space-y-3">
                                {[1, 2].map(i => (
                                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                            <FileText size={14} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-700">Vaccination Certificate</p>
                                            <p className="text-xs text-slate-400">Oct 24, 2023</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-slate-400">
                    <p>© 2023 ApexCare Veterinary Clinic. All rights reserved.</p>
                </div>
            </div>

            {/* Book Modal */}
            {isBookModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Book Form UI - Simplified for brevity in this step, same as before */}
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-lg text-slate-900">Book Appointment</h3>
                            <button onClick={() => setIsBookModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleBookSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Select Pet</label>
                                <select
                                    className="w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                                    value={bookForm.pet}
                                    onChange={e => setBookForm({ ...bookForm, pet: e.target.value })}
                                >
                                    <option value="">Choose a pet...</option>
                                    {pets.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        className="w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                                        value={bookForm.date}
                                        onChange={e => setBookForm({ ...bookForm, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Time</label>
                                    <select
                                        className="w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                                        value={bookForm.time}
                                        onChange={e => setBookForm({ ...bookForm, time: e.target.value })}
                                    >
                                        <option value="">Select time...</option>
                                        <option>09:00 AM</option>
                                        <option>10:30 AM</option>
                                        <option>02:00 PM</option>
                                        <option>04:30 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                    Confirm Booking Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Pet Modal */}
            {isPetModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-lg text-slate-900">Register New Pet</h3>
                            <button onClick={() => setIsPetModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handlePetSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Pet Name</label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. Max"
                                    value={petForm.name}
                                    onChange={e => setPetForm({ ...petForm, name: e.target.value })}
                                />
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                    Add Pet to Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {/* HIGH-FIDELITY PET PROFILE MODAL */}
            {selectedPet && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-slate-50 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col md:flex-row relative">
                        {/* Close button absolute */}
                        <button
                            onClick={() => setSelectedPet(null)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white hover:bg-slate-100 shadow-md rounded-full flex items-center justify-center text-slate-500 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* LEFT SIDEBAR / COLUMN */}
                        <div className="w-full md:w-80 bg-white border-r border-slate-200 flex-shrink-0 overflow-y-auto">
                            <div className="p-6 text-center border-b border-slate-100">
                                <div className="w-32 h-32 mx-auto rounded-2xl p-1 bg-white shadow-xl mb-4 relative">
                                    <img src={selectedPet?.image} alt={selectedPet?.name} className="w-full h-full rounded-xl object-cover" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{selectedPet?.name}</h2>
                                <p className="text-slate-500 text-sm mb-3">{selectedPet?.breed}</p>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                                    Active Patient
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Key Stats List */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs font-bold text-slate-400 uppercase">Weight</span>
                                        <span className="font-bold text-slate-700">{selectedPet?.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs font-bold text-slate-400 uppercase">Age</span>
                                        <span className="font-bold text-slate-700">{selectedPet?.age}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs font-bold text-slate-400 uppercase">DOB</span>
                                        <span className="font-bold text-slate-700">{selectedPet?.dob || 'Unknown'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs font-bold text-slate-400 uppercase">Sex</span>
                                        <span className="font-bold text-slate-700">{selectedPet?.sex}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs font-bold text-slate-400 uppercase">Microchip</span>
                                        <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{selectedPet?.chipId || '—'}</span>
                                    </div>
                                </div>

                                {/* Alerts */}
                                {selectedPet?.criticalAlert && (
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                                        <h4 className="flex items-center gap-2 text-red-700 font-bold text-sm mb-2">
                                            <AlertTriangle size={16} /> Critical Alert
                                        </h4>
                                        <p className="text-xs text-red-600 leading-relaxed">
                                            {selectedPet.criticalAlert.msg}
                                        </p>
                                    </div>
                                )}

                                {/* Vet Info */}
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-3">Primary Veterinarian</div>
                                    <div className="flex items-center gap-3">
                                        <img src={selectedPet?.vet?.image} alt="Vet" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                                        <div>
                                            <p className="font-bold text-sm text-slate-900">{selectedPet?.vet?.name}</p>
                                            <p className="text-xs text-slate-500">{selectedPet?.vet?.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT MAIN CONTENT */}
                        <div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">
                            {/* Header */}
                            <div className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center">
                                <div>
                                    <h1 className="text-xl font-bold text-slate-900">Medical Overview</h1>
                                    <p className="text-sm text-slate-500">Patient ID: #{selectedPet?.id?.toUpperCase()}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
                                        <Settings size={16} /> Edit Profile
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8">
                                {/* Vitals Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Weight</span>
                                            {selectedPet?.lastWeight?.trend && (
                                                <span className={`text-xs font-bold ${selectedPet.lastWeight.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                                    {selectedPet.lastWeight.trend}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-slate-900">{selectedPet?.lastWeight?.value || '--'}</span>
                                            <span className="text-sm text-slate-500">{selectedPet?.lastWeight?.unit}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                                            <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Temperature</span>
                                            <span className="text-xs font-bold text-slate-500">
                                                {selectedPet?.temp?.status}
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-slate-900">{selectedPet?.temp?.value || '--'}</span>
                                            <span className="text-sm text-slate-500">{selectedPet?.temp?.unit}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                                            <div className="bg-green-500 h-full rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vaccine Status</span>
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">
                                                {selectedPet?.vaccineStatus?.status || 'Unknown'}
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-slate-900">{selectedPet?.vaccineStatus?.percentage || 0}%</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">Next: {selectedPet?.vaccineStatus?.nextDue}</p>
                                    </div>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="border-b border-slate-200 flex gap-6 mb-8">
                                    <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-bold text-sm">Medical History</button>
                                    <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Lab Results</button>
                                    <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Prescriptions</button>
                                    <div className="flex-1 flex justify-end pb-2">
                                        <button className="text-xs font-bold text-slate-500 flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50">
                                            <Filter size={14} /> Filter
                                        </button>
                                    </div>
                                </div>

                                {/* Records List */}
                                <div className="space-y-4">
                                    {selectedPet?.records && selectedPet.records.length > 0 ? (
                                        selectedPet.records.map(record => (
                                            <div key={record.id} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex-shrink-0">
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${record.type === 'Exam' ? 'bg-blue-100 text-blue-600' :
                                                            record.type === 'Vaccine' ? 'bg-purple-100 text-purple-600' :
                                                                'bg-orange-100 text-orange-600'
                                                        }`}>
                                                        {record.type === 'Exam' ? <Briefcase size={20} /> :
                                                            record.type === 'Vaccine' ? <Syringe size={20} /> :
                                                                <Activity size={20} />}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-lg font-bold text-slate-900">{record.title}</h3>
                                                        <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${record.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                                                            }`}>{record.status}</span>
                                                    </div>
                                                    <p className="text-xs text-slate-500 mb-3">{record.vet} • {record.date}</p>
                                                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 leading-relaxed mb-4">
                                                        {record.desc}
                                                    </div>

                                                    {/* Tags / Sub-items */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {record.tags && record.tags.map((tag, i) => (
                                                            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {record.items && record.items.map((item, i) => (
                                                            <span key={i} className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-md">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                                {item.name}
                                                                <span className="text-slate-400 font-normal">{item.exp}</span>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="md:text-right flex md:flex-col justify-between items-end">
                                                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                                        View Report <ChevronRight size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12 text-slate-400">
                                            <p>No records found for this patient.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
