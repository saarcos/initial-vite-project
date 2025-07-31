type Props = {
    title: string,
    value: number,
    className?: string,
    severity: string,
}
export default function StatsComponent({ title, value, className, severity }: Props) {
    return (
        <div className={`rounded-xl flex flex-col gap-2 p-3 ${className} w-full`}>
            <h3 className="text-xl font-sans text-black">{title}</h3>
            <div className="flex items-center gap-5">
                <p className="text-black text-3xl italic">{value}<span className="text-slate-400 text-base">/gdl</span></p>
                <div className="p-1 text-xs bg-white rounded-xl">
                    {severity}
                </div>
            </div>
            <div className="w-full h-25 bg-gray-200 rounded-xl"></div>
        </div>
    )
}
