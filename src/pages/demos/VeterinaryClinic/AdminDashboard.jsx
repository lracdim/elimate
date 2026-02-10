import { useDemo } from './DemoContext'
import { MoreHorizontal, Calendar, Check, X as XIcon, Users, DollarSign, Activity, Bell } from 'lucide-react'

export default function AdminDashboard() {
    const { user, stats, appointments, updateStatus } = useDemo()

    // Sort: Pending first, then Confirmed
    const sortedAppointments = [...appointments].sort((a, b) => {
        if (a.status === 'Pending' && b.status !== 'Pending') return -1
        if (a.status !== 'Pending' && b.status === 'Pending') return 1
        return 0
    })

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Clinic Overview</h1>
                        <p className="text-slate-500 text-sm">System Status: Operational • {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-200"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-sm font-bold text-slate-900">Dr. Sarah Jenkins</div>
                                <div className="text-xs text-slate-500">Medical Director</div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" className="w-10 h-10 rounded-full border border-slate-200" alt="Admin" />
                        </div>
                    </div>
                </div>

                {/* KPI Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        label="Daily Visits"
                        value={stats.dailyVisits}
                        subtext="+12% from yesterday"
                        icon={Users}
                        color="blue"
                    />
                    <StatCard
                        label="Pending Requests"
                        value={stats.pendingApprovals}
                        subtext="Requires immediate attention"
                        icon={Calendar}
                        color="amber"
                    />
                    <StatCard
                        label="Active Patients"
                        value={stats.activePatients}
                        subtext="Total registered database"
                        icon={Activity}
                        color="emerald"
                    />
                    <StatCard
                        label="Daily Revenue"
                        value={`$${stats.revenue}`}
                        subtext="Est. based on bookings"
                        icon={DollarSign}
                        color="purple"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Dashboard Panel */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                            <h2 className="font-bold text-lg text-slate-900">Appointment Management</h2>
                            <div className="flex gap-2">
                                <select className="text-sm border-slate-200 rounded-lg py-1.5 pl-3 pr-8 bg-white focus:ring-blue-500 focus:border-blue-500">
                                    <option>All Veterinarians</option>
                                    <option>Dr. Jenkins</option>
                                    <option>Dr. Smith</option>
                                </select>
                                <select className="text-sm border-slate-200 rounded-lg py-1.5 pl-3 pr-8 bg-white focus:ring-blue-500 focus:border-blue-500">
                                    <option>Today</option>
                                    <option>This Week</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-8 py-4">Status</th>
                                        <th className="px-8 py-4">Time</th>
                                        <th className="px-8 py-4">Client / Patient</th>
                                        <th className="px-8 py-4">Service Type</th>
                                        <th className="px-8 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {sortedAppointments.map((appt) => (
                                        <tr key={appt.id} className="hover:bg-slate-50/80 transition-colors group">
                                            <td className="px-8 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold capitalize ${appt.status === 'Confirmed' ? 'bg-green-50 text-green-700 border border-green-100' :
                                                    appt.status === 'Pending' ? 'bg-amber-50 text-amber-700 border border-amber-100 animate-pulse' :
                                                        'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    {appt.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4 font-mono text-sm text-slate-600">
                                                {appt.time}
                                            </td>
                                            <td className="px-8 py-4">
                                                <div>
                                                    <div className="font-bold text-slate-900">{appt.client}</div>
                                                    <div className="text-xs text-slate-500">Pet: {appt.pet}</div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 text-sm text-slate-600 font-medium">{appt.type}</td>
                                            <td className="px-8 py-4">
                                                {appt.status === 'Pending' ? (
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateStatus(appt.id, 'Confirmed')}
                                                            className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:scale-105 transition-all"
                                                            title="Approve"
                                                        >
                                                            <Check size={16} strokeWidth={3} />
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(appt.id, 'Cancelled')}
                                                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:scale-105 transition-all"
                                                            title="Reject"
                                                        >
                                                            <XIcon size={16} strokeWidth={3} />
                                                        </button>
                                                    </div>
                                                ) : <span className="text-slate-300">-</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h2 className="font-bold text-slate-800 mb-4">Recent Activity</h2>
                            <ul className="space-y-4 text-sm relative border-l-2 border-slate-100 ml-2 pl-6">
                                <li className="relative">
                                    <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-blue-100 border-2 border-white"></div>
                                    <p className="text-slate-800 font-medium">Invoice #4322 Generated</p>
                                    <p className="text-slate-500 text-xs">2 mins ago • $150.00</p>
                                </li>
                                <li className="relative">
                                    <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-green-100 border-2 border-white"></div>
                                    <p className="text-slate-800 font-medium">New Patient Registered</p>
                                    <p className="text-slate-500 text-xs">15 mins ago • Buddy (Golden Retriever)</p>
                                </li>
                                <li className="relative">
                                    <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-amber-100 border-2 border-white"></div>
                                    <p className="text-slate-800 font-medium">Inventory Alert: Vaccines</p>
                                    <p className="text-slate-500 text-xs">1 hour ago • Low Stock</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white text-center">
                            <div className="text-sm font-medium opacity-90 mb-2">ApexCare Admin Clinic</div>
                            <div className="text-xs opacity-75">1234 Park Ave Suites, NY</div>
                            <button className="mt-4 bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 px-4 rounded transition-colors w-full">
                                System Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatCard({ icon: Icon, label, value, subtext, color }) {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        amber: "bg-amber-50 text-amber-600",
        emerald: "bg-emerald-50 text-emerald-600",
        purple: "bg-purple-50 text-purple-600",
        indigo: "bg-indigo-50 text-indigo-600",
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-slate-500 text-sm font-medium">{label}</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{value}</p>
                </div>
                <div className={`p-3 rounded-xl ${colors[color] || 'bg-slate-100'}`}>
                    <Icon size={20} className="opacity-80" />
                </div>
            </div>
            {subtext && <p className="text-xs text-slate-400 font-medium">{subtext}</p>}
        </div>
    )
}
