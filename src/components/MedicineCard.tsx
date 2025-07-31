type Medicine = {
    nombre: string,
    metodo: string,
    className: string,
    image: string,
}
type Props = {
    medicine: Medicine
}
export default function MedicineCard({ medicine }: Props) {
    return (
        <div className={`rounded-lg flex flex-col gap-1 ${medicine.className} p-2`}>
            <h3 className="self-start text-[14px] font-semibold">{medicine.nombre}</h3>
            <p className="text-xs self-start text-gray-500">{medicine.metodo}</p>
            <img src={medicine.image} className="w-18 h-18 object-cover"/>
        </div>
    )
}
