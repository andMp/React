import { NavLink, Outlet, useSearchParams } from "react-router-dom"


const PRODUCTS = [
    {id: "1", name: "Laptop"},
    {id: "2", name: "Headphones"},
    {id: "3", name: "Keyboard"},
    {id: "4", name: "Mouse"},
]


export default function Products(){

const[searchParams, setSerchParams] = useSearchParams();
const filter = searchParams.get("q") ?? "";
const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(filter.toLocaleLowerCase()));


return(
    <div className="grid">
        <aside>
            <input type="text" placeholder="Поиск" value={filter} onChange={e => setSerchParams(e.target.value ? {q: e.target.value} : {})}/>
            <ul>
                {list.map(p => (
                    <li key={p.id}>
                        <NavLink to={p.id} className={({isActive}) => (isActive ? "active" : undefined)}>
                            {p.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
        <section>
            <Outlet/>
        </section>
    </div>
)

}