import { NavLink, Outlet } from "react-router-dom";


export default function Layout(){

    const getClass = ({isActive}) => (isActive ? "active" : "underfined");


    return(
        <>
        <header className="container">
            <h1>React Router</h1>
            <nav className="nav">
                <NavLink to="/" end className={getClass}>Home</NavLink>
                <NavLink to="/about" end className={getClass}>About</NavLink>
                <NavLink to="/products" end className={getClass}>Products</NavLink>
            </nav>
        </header>
        <main className="container">
            <Outlet/>
        </main>
        </>
    )
    
}