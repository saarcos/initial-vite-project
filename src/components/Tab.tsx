export default function Tab({ tabTitle }: {tabTitle: string }) {
    const isActive = tabTitle ==="Health Reports";
    return (
        <div className={`rounded-full px-3 py-2 ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {tabTitle}
        </div>
    )
}
