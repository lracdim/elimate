import { createContext, useContext, useState, useEffect } from 'react'

const DemoContext = createContext()

// Initial Mock Data
const initialAppointments = [
    { id: 101, client: "Sarah Jenkins", pet: "Bella", type: "Annual Checkup", date: "2023-11-15", time: "09:00 AM", status: "Confirmed", notes: "Regular checkup." },
    { id: 102, client: "Michael Chen", pet: "Max", type: "Vaccination", date: "2023-11-15", time: "10:30 AM", status: "Pending", notes: "Rabies booster needed." },
    { id: 103, client: "Emma Rodriguez", pet: "Luna", type: "Dental Cleaning", date: "2023-11-16", time: "01:00 PM", status: "Confirmed", notes: "Pre-anesthetic bloodwork done." },
]

const initialPets = [
    {
        id: 'p1',
        name: "Bella",
        breed: "Golden Retriever",
        age: "3 yrs",
        dob: "Aug 14, 2020",
        weight: "65 lbs",
        lastWeight: { value: "32.5", unit: "kg", trend: "+0.5kg" },
        temp: { value: "101.5", unit: "°F", status: "Normal" },
        vaccineStatus: { percentage: 100, status: "Up to date", nextDue: "Rabies (Aug 2025)" },
        sex: "Female (Spayed)",
        chipId: "985-142-551",
        color: "Golden / Cream",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=150",
        vet: {
            name: "Dr. Emily Rodriguez",
            role: "Internal Medicine",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150"
        },
        criticalAlert: null,
        conditions: ["Mild Hip Dysplasia (Managed)"],
        medications: ["Dasuquin Advanced - Daily"],
        records: [
            {
                id: 'r1',
                title: "Annual Wellness Exam",
                date: "Oct 12, 2023",
                type: "Exam",
                status: "Completed",
                vet: "Dr. Emily Chen",
                desc: "Patient presents for annual wellness exam. Vitals are within normal limits. Heart and lungs sound clear. Abdomen soft, non-painful. Dental exam shows grade 1 tartar.",
                tags: ["DHPP Booster", "Heartworm Test (Negative)"]
            },
            {
                id: 'r2',
                title: "Urgent Care Visit",
                date: "Aug 04, 2023",
                type: "Visit",
                status: "Archived",
                vet: "Dr. Mark Sloan",
                desc: "Minor laceration on left front paw pad. Cleaned and debrided. 2 sutures applied. Sent home with E-collar and pain medication.",
                tags: ["Rx: Carprofen 75mg"]
            },
            {
                id: 'r3',
                title: "Vaccination Update",
                date: "Jan 15, 2023",
                type: "Vaccine",
                status: "Completed",
                vet: "Vet Tech Sarah",
                desc: "Routine vaccination update according to schedule.",
                items: [
                    { name: "Rabies (3-Year)", exp: "Exp: 2026" },
                    { name: "Bordetella", exp: "Exp: 2024" }
                ]
            }
        ]
    },
    {
        id: 'p2',
        name: "Max",
        breed: "Siamese Cat",
        age: "5 yrs",
        dob: "Feb 02, 2019",
        weight: "12 lbs",
        lastWeight: { value: "5.4", unit: "kg", trend: "-0.1kg" },
        temp: { value: "100.2", unit: "°F", status: "Normal" },
        vaccineStatus: { percentage: 80, status: "Due Soon", nextDue: "FVRCP (Dec 2024)" },
        sex: "Male (Neutered)",
        chipId: "982-111-442",
        color: "Cream / Brown Point",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=150",
        vet: {
            name: "Dr. Michael Chen",
            role: "Lead Surgeon",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150"
        },
        criticalAlert: {
            title: "Critical Alert",
            msg: "Severe allergy to Penicillin. Administer alternative antibiotics only."
        },
        conditions: [],
        medications: [],
        records: [
            {
                id: 'r1',
                title: "Dental Cleaning",
                date: "Aug 10, 2023",
                type: "Dental",
                status: "Completed",
                vet: "Dr. Michael Chen",
                desc: "Grade 1 Periodontal Disease noted. Cleaning performed under anesthesia. Recovered well.",
                tags: ["Cleaning", "Polishing"]
            }
        ]
    }
]

const initialStats = {
    dailyVisits: 24,
    pendingApprovals: 1,
    activePatients: 842,
    revenue: 1250
}

export function DemoProvider({ children }) {
    // State
    const [user, setUser] = useState(null)
    const [appointments, setAppointments] = useState(initialAppointments)
    const [pets, setPets] = useState(initialPets)
    const [stats, setStats] = useState(initialStats)
    const [notifications, setNotifications] = useState([])

    // Load from Session Storage on Mount
    useEffect(() => {
        try {
            const storedUser = sessionStorage.getItem('demo_user')
            const storedAppts = sessionStorage.getItem('demo_appts')
            const storedPets = sessionStorage.getItem('demo_pets')
            const storedStats = sessionStorage.getItem('demo_stats')

            if (storedUser) setUser(JSON.parse(storedUser))
            if (storedAppts) {
                const parsedAppts = JSON.parse(storedAppts)
                if (Array.isArray(parsedAppts)) {
                    setAppointments(parsedAppts)
                    const pendingCount = parsedAppts.filter(a => a.status === 'Pending').length
                    setStats(prev => ({ ...prev, pendingApprovals: pendingCount }))
                }
            }
            if (storedPets) {
                const parsedPets = JSON.parse(storedPets)
                if (Array.isArray(parsedPets)) setPets(parsedPets)
            }
        } catch (e) {
            console.error("Failed to load demo data", e)
            sessionStorage.clear()
        }
    }, [])

    // Persistence
    useEffect(() => {
        if (user) sessionStorage.setItem('demo_user', JSON.stringify(user))
        else sessionStorage.removeItem('demo_user')
    }, [user])

    useEffect(() => {
        sessionStorage.setItem('demo_appts', JSON.stringify(appointments))
        const pendingCount = (appointments || []).filter(a => a.status === 'Pending').length
        setStats(prev => ({ ...prev, pendingApprovals: pendingCount }))
    }, [appointments])

    useEffect(() => {
        sessionStorage.setItem('demo_pets', JSON.stringify(pets))
    }, [pets])


    // Actions
    const login = (username, password) => {
        if (username === 'admin' && password === 'admi123') {
            const userData = { role: 'admin', name: 'Dr. Sarah Jenkins' }
            setUser(userData)
            return true
        } else if (username === 'user' && password === 'user123') {
            const userData = { role: 'client', name: 'Sarah Jenkins' }
            setUser(userData)
            return true
        } else {
            return false
        }
    }

    const logout = () => {
        setUser(null)
        sessionStorage.clear()
        setAppointments(initialAppointments)
        setPets(initialPets)
        setStats(initialStats)
    }

    const addAppointment = (appt) => {
        const newAppt = {
            ...appt,
            id: Date.now(),
            status: "Pending",
            client: "Sarah Jenkins"
        }
        setAppointments(prev => [newAppt, ...prev])
        addNotification("Appointment requested successfully!")
    }

    const updateStatus = (id, status) => {
        setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a))
        if (status === 'Confirmed') addNotification("Appointment confirmed!")
        if (status === 'Cancelled') addNotification("Appointment cancelled.")
    }

    const addPet = (pet) => {
        const newPet = {
            ...pet,
            id: `p${Date.now()}`,
            records: [],
            vet: {
                name: "Dr. Sarah Jenkins",
                role: "General Practice",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
            },
            // Defaults for new pets
            lastWeight: { value: "--", unit: "kg", trend: "-" },
            temp: { value: "--", unit: "°F", status: "-" },
            vaccineStatus: { percentage: 0, status: "Unknown", nextDue: "-" },
            criticalAlert: null
        }
        setPets(prev => [...prev, newPet])
        addNotification(`Added ${pet.name} to your profile.`)
    }

    const addNotification = (msg) => {
        const id = Date.now()
        setNotifications(prev => [...prev, { id, msg }])
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id))
        }, 3000)
    }

    return (
        <DemoContext.Provider value={{
            user, appointments, pets, stats, notifications,
            login, logout, addAppointment, updateStatus, addPet
        }}>
            {children}
        </DemoContext.Provider>
    )
}

export const useDemo = () => useContext(DemoContext)
