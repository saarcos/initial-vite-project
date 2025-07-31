import { Bell, CircleUser, HeartHandshake, MessageCircleMore, Search } from "lucide-react"
import Tab from "../Tab"

export default function Navbar() {
    const tabs = ['Overview', 'Health Reports', 'Appointments', 'Prescriptions']
    return (
        <div className='h-20 bg-transparent flex items-center justify-evenly w-full'>

            <a className="flex items-center gap-1"><HeartHandshake className="w-5 h-5 text-black" />HealthCo </a>
            <div className="flex items-center gap-1">
                {tabs.map((tab, index) => (
                    <Tab key={index} tabTitle={tab} />
                ))}
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-white rounded-full p-2">
                    <Search className="w-5 h-5 text-black" />
                </button>
                <button className="bg-white rounded-full p-2">
                    <MessageCircleMore className="w-5 h-5 text-black" />
                </button>
                <button className="bg-white rounded-full p-2">
                    <Bell className="w-5 h-5 text-black" />
                </button>
                <button>
                    <CircleUser className="w-8 h-8 text-black"/>
                </button>
            </div>

        </div>
    )
}
