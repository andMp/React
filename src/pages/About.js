import { useLocation, useNavigate } from "react-router-dom"



export default function About()
{
    const location = useLocation();

    return(
        <div className="card">
            <h2>О проекте</h2>
            <p>текущий путь <code>{location.pathname}{location.search}</code></p>
            
        </div>
    )
}