import { Calendar, MessageCircleMore } from "lucide-react"

type Doctor = {
    nombre: string,
    especialidad: string,
    visitTime: string,
    image: string,
}
type Props = {
    doctor: Doctor
}
export default function DoctorCard({ doctor }: Props) {
    return (
        <div className='flex flex-col gap-2 p-2 border-2 border-gray-200 rounded-lg border-l-blue-200 shadow-xs'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <img src={doctor.image} className="w-9 h-9 rounded-full object-cover" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] font-semibold">Dr. {doctor.nombre}</p>
                        <p className="text-xs">{doctor.especialidad}</p>
                    </div>
                </div>
                <button className="bg-yellow-200 rounded-full p-1"><MessageCircleMore className="w-5 h-5" /></button>
            </div>
            <hr className="w-full px-3 bg-gray-200"/>
            <div className="flex items-center gap-1 bg-blue-100/60 rounded-lg p-2">
                <Calendar className="w-5 h-5 text-black"/>
                <p className="text-xs">Visit time: {doctor.visitTime}</p>
            </div>
        </div>
    )
}
