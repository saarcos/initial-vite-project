import DoctorCard from "@/components/DoctorCard";
import MedicineCard from "@/components/MedicineCard";
import Prescription from "@/components/Prescription";
import StatsComponent from "@/components/StatsComponent"
import Navbar from "@/components/ui/Navbar"
import { ArrowUpRight, Brain, FileText, Plus, Stethoscope } from "lucide-react"
type Doctor = {
    nombre: string,
    especialidad: string,
    visitTime: string,
    image: string
}
type Medicine = {
    nombre: string,
    metodo: string,
    className: string,
    image: string
}
export default function Home() {
    const stats = [
        {
            title: "Blood Status",
            value: 120,
            className: "bg-yellow-200",
            severity: 'Normal',
        },
        {
            title: "Hemoglobin",
            value: 17.2,
            className: "bg-blue-200",
            severity: 'Normal',
        },
    ];
    const prescriptions = [
        {
            title: "Prescription 1",
            doctor: 'Dr. Jacob Jones'
        },
        {
            title: "Prescription 1",
            doctor: 'Dr. Jacob Jones'
        },
        {
            title: "Prescription 1",
            doctor: 'Dr. Jacob Jones'
        },
        {
            title: "Prescription 1",
            doctor: 'Dr. Jacob Jones'
        },
    ];
    const doctors: Doctor[] = [
        {
            nombre: 'Jacob Jones',
            especialidad: 'MD, Physiotherapist',
            visitTime: '10:20am | 24 july 2024',
            image: '/doctor.png'
        },
        {
            nombre: 'Ronald Hawks',
            especialidad: 'MD, Physiotherapist',
            visitTime: '10:20am | 24 july 2024',
            image: '/doctor.png'
        },
    ];
    const medicinas: Medicine[] = [
        {
            nombre: 'Vitamin B',
            metodo: 'Injection - 5ml',
            className: 'bg-yellow-200',
            image: '/medicine.png'
        },
        {
            nombre: 'Vitamin B',
            metodo: 'Capsule - 10mg',
            className: 'bg-blue-100',
            image: '/medicine.png'
        },
        {
            nombre: 'Vitamin B',
            metodo: 'Injection - 5ml',
            className: 'bg-yellow-200',
            image: '/medicine.png'
        },
    ]
    return (
        <div className="">
            <Navbar />
            <div className="grid grid-cols-[1fr_2fr_1fr] w-full p-4">
                <div className="flex flex-col gap-5 px-4">
                    <div className="flex items-center gap-5 w-full">
                        {stats.map((stat, index) => (
                            <StatsComponent key={index} title={stat.title} severity={stat.severity} value={stat.value} className={stat.className} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 p-2 bg-slate-50 rounded-lg">
                        <div className="flex items-center w-full justify-between">
                            <h3 className="text-[14px]">HeartRate Activity</h3>
                            <button className="bg-yellow-200 rounded-full p-1">
                                <Plus className="w-5 h-5 text-black" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-xl font-semibold">Men's average heartrate</h2>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                            <div className="flex items-end justify-between w-full">
                                <p className="text-black text-4xl italic">120<span className="text-gray-300 text-base">/bpm</span></p>
                                <Stethoscope className="w-20 h-20 text-black" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 flex flex-col gap-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between">
                            <p className="text-[14px] font-semibold">Lab Test & Prescriptions</p>
                            <div className="flex items-center gap-1">
                                <button className="bg-transparent border border-gray-200 py-1 px-2 rounded-full text-xs">View all</button>
                                <button className="rounded-full bg-transparent border border-gray-200 p-1"><ArrowUpRight className="w-4 h-4 text-black" /></button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            {prescriptions.map((prescription, index) => (
                                <Prescription key={index} title={prescription.title} doctor={prescription.doctor} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative h-screen bg-[url(/anatomy.webp)]">
                    <div className="absolute bottom-2 left-40 p-2 bg-white rounded-lg w-sm">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="font-semibold text-[14px]">Body mass index</h1>
                            <div className="flex items-center gap-0.5">
                                <button className="bg-black text-white px-2 py-1 text-xs rounded-full">Weight</button>
                                <button className="bg-gray-200 px-2 py-1 text-black text-xs rounded-full">Height</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 px-4 w-full">
                    <div className="flex flex-col gap-2 bg-slate-50 rounded-lg p-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[14px] font-semibold">Upcoming appointments</h3>
                            <div className="flex items-center gap-1">
                                <button className="bg-transparent border border-gray-200 py-1 px-2 rounded-full text-xs">View all</button>
                                <button className="rounded-full bg-transparent border border-gray-200 p-1"><ArrowUpRight className="w-4 h-4 text-black" /></button>
                            </div>
                        </div>
                        {doctors.map((doctor, index) => (
                            <DoctorCard key={index} doctor={doctor} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 bg-slate-50 rounded-lg p-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[14px] font-semibold">Medicines</h3>
                            <div className="flex items-center gap-1">
                                <button className="bg-transparent border border-gray-200 py-1 px-2 rounded-full text-xs">View all</button>
                                <button className="rounded-full bg-transparent border border-gray-200 p-1"><ArrowUpRight className="w-4 h-4 text-black" /></button>
                            </div>
                        </div>
                        <div className="overflow-x-auto snap-x snap-mandatory">
                            <div className="flex gap-2 w-max">
                                {medicinas.map((medicina, index) => (
                                    <MedicineCard key={index} medicine={medicina} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-black/80 h-50 rounded-lg">
                        <div className="absolute top-3 px-4 w-full">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center gap-1 bg-gray-500/60 rounded-full p-1 uppercase text-white">
                                    <Brain className="w-5 h-5" />
                                    <span className="text-[14px]">
                                        AI Analytics
                                    </span>
                                </div>
                                <button className="rounded-full bg-gray-500/60 p-2"><FileText className="w-6 h-6 text-white" /></button>
                            </div>
                        </div>
                        <div className="absolute bottom-3 px-4">
                            <div className="flex flex-col gap-1 text-white">
                                <h1 className="text-xl font-semibold">Vertebral features</h1>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs">The AI reports are generated based on the images of your diseases</p>
                                    <button className="rounded-full p-2 bg-yellow-200"><ArrowUpRight className="w-5 h-6 text-black" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
