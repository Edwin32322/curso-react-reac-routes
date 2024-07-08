import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Acerca } from "../pages/Acerca"
import { Contacto } from "../pages/Contacto"
import { Error404 } from "../pages/Error404"
import { MenuConceptos } from "./MenuConceptos"
import { Usuario } from "../pages/Usuario"
import { Productos } from "../pages/Productos"
import { ReactTopics } from "../pages/ReactTopics"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { PrivateRoute } from "./PrivateRoute"

export const ConceptosBasicos = () => {
    return (
        <>
            <div>Conceptos Basicos</div>
            <Router>
                <MenuConceptos></MenuConceptos>
                <Routes>
                    <Route exact path="/acerca" element={<Acerca></Acerca>}>Acerca</Route>
                    <Route exact path="/contacto" element={<Contacto></Contacto>}>Contacto</Route>
                    <Route exact path="/" element={<><h1>Home</h1></>}>Homes</Route>
                    <Route path="/usuario/:username/:age" element={<Usuario />}>Usuario</Route>
                    <Route path="/productos" element={<Productos />}>Usuario</Route>
                    <Route path="/about" element={<Navigate to="/acerca" replace />}></Route>
                    <Route path="/contact" element={<Navigate to="/contacto" replace />}>Contact</Route>
                    <Route path="/react/*" element={<ReactTopics></ReactTopics>}>React</Route>
                    <Route path="/login" element={<Login></Login>}>Login</Route>
                    <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </Router >
        </>
    )
}
