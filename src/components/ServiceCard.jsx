import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, link }) {
    return (
        <Link
            to={link}
            className="block bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <Icon className="w-7 h-7 text-slate-700 group-hover:text-indigo-600 transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
            <span className="text-indigo-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    )
}
