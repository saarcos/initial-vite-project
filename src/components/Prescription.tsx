import { ClipboardList, Download } from "lucide-react"

type Props = {
    title: string,
    doctor: string,
}
export default function Prescription({ title, doctor }: Props) {
    return (
        <div className="bg-gray-200/50 flex items-center justify-between w-full p-2 rounded-lg">
            <div className="flex items-center gap-2">
                <div className="bg-white p-1 rounded-full">
                    <ClipboardList className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                    <p className="text-base font-semibold">{title}</p>
                    <span className="text-xs text-black">{doctor}</span>
                </div>
            </div>
            <button className="bg-white rounded-full p-2">
                <Download className="w-5 h-5 text-black" />
            </button>
        </div>
    )
}
