import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const MenuConceptos = () => {
    return (
        // <nav>
        //     <a href="/">Menu</a>
        //     <a href="/contacto">Contacto</a>
        //     <a href="/acerca">Acerca</a>
        // </nav> Genere un renderizado de la aplicación
        <>
            {/* <Link to="/">Menu</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/acerca">Acerca</Link> */}
            <ul>
                <li>
                    <NavLink to="/" className={nav => nav.isActive ? "active" : ""}>Menu</NavLink>
                    <NavLink to="/acerca">Acerca</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <span>Parametros</span>
                    <NavLink to="/usuario/EdwinGoaly/19">Edwin</NavLink>
                    <NavLink to="/usuario/DavidCastellanos/19">David</NavLink>
                </li>
                <li>
                    <span>Parametros de consulta</span>
                    <NavLink to="/productos">Productos</NavLink>
                </li>
                <br />
                <li>
                    <span>Redirecciones</span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Anidadas</span>
                    <Link to="/react">React</Link>
                </li>
                <li>
                    <span>Rutas Privadas</span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </>
    )
}
