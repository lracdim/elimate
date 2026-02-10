import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { AnalysisModal } from './AnalysisModal'
import { ServiceApplicationModal } from './ServiceApplicationModal'
import { LoginModal } from './LoginModal'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function Layout({ children }) {
    const location = useLocation()
    const isVetDemo = location.pathname.startsWith('/demos/veterinary-clinic')

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    if (isVetDemo) {
        return (
            <div className="bg-slate-50 min-h-screen">
                {children}
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-platinum font-sans text-graphite">
            <Navbar />

            <main className="flex-grow pt-20">
                {children}
            </main>

            <Footer />
            <AnalysisModal />
            <ServiceApplicationModal />
            <LoginModal />
        </div>
    )
}
