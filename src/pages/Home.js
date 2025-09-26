import { useNavigate } from "react-router-dom"



export default function Home()
{
    const navigate = useNavigate();

    return(
        <div className="card">
            <h2>Главная</h2>
            <p>Демо роутинг</p>
            <button onClick={()=> navigate("/products")}>Перейти в каталог</button>
        </div>
    )
}