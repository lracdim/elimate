import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Lenis from 'lenis'
import { useEffect } from 'react'

// Pages
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Architecture from './pages/Architecture'
import About from './pages/About'
import Systems from './pages/Systems'
import Automation from './pages/Automation'

// Demos
import { DemoProvider } from './pages/demos/VeterinaryClinic/DemoContext'
import VetClinicLayout from './pages/demos/VeterinaryClinic/VetClinicLayout'
import VetClinicHome from './pages/demos/VeterinaryClinic/VetClinicHome'
import Auth from './pages/demos/VeterinaryClinic/Auth'
import AdminDashboard from './pages/demos/VeterinaryClinic/AdminDashboard'
import ClientDashboard from './pages/demos/VeterinaryClinic/ClientDashboard'

function App() {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/systems" element={<Systems />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/about" element={<About />} />
                <Route path="/automation" element={<Automation />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Demos */}
                <Route path="/demos/veterinary-clinic" element={
                    <DemoProvider>
                        <VetClinicLayout />
                    </DemoProvider>
                }>
                    <Route index element={<VetClinicHome />} />
                    <Route path="auth" element={<Auth />} />
                    <Route path="dashboard/admin" element={<AdminDashboard />} />
                    <Route path="dashboard/client" element={<ClientDashboard />} />
                </Route>
            </Routes>
        </Layout>
    )
}

export default App
