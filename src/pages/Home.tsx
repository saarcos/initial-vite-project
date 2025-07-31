import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <Button onClick={()=>navigate('/page2')}>Navegar</Button>
        </div>
    )
}
