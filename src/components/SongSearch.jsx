import { useEffect, useState } from "react"
import { SongForm } from "./SongForm"
import { SongDetails } from "./SongDetails"
import { Loader } from "./Loader"
import { helpHttp } from "../helpers/helpHttp"
import { HashRouter, Link, Route, Routes } from "react-router-dom"
import { Error404 } from "../pages/Error404"
import { SongTable } from "./SongTable"
import { SongPage } from "../pages/SongPage"
let misCancionesInit = JSON.parse(localStorage.getItem("misCanciones")) || []
export const SongSearch = () => {
    const [busqueda, setBusqueda] = useState()
    const [biografia, setBiografia] = useState()
    const [cancionLetra, setCancionLetra] = useState()
    const [loading, setLoading] = useState()
    const [misCanciones, setMisCanciones] = useState(misCancionesInit)
    const handleSearch = (data) => {
        setBusqueda(data)
    }
    const handleSaveSong = (setIsDisabled) => {
        alert("Guardando canción")
        let currentSong = {
            busqueda,
            cancionLetra,
            biografia
        }
        setMisCanciones([...misCanciones, currentSong])
        localStorage.setItem("misCanciones", JSON.stringify([...misCanciones, currentSong]))
        setBusqueda(null)
        setIsDisabled(true)
    }
    const handleDeleteSong = (id) => {
        const isDelete = confirm("¿Desea eliminar esta canción")
        if (isDelete) {
            let songs = misCanciones.filter((cancion, index) => index !== id)
            setMisCanciones(songs)
            localStorage.setItem("misCanciones", JSON.stringify(songs))
        }
    }

    useEffect(() => {
        if (!busqueda) return
        const getData = async () => {
            const { artista, cancion } = busqueda
            let urlArtista = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista.toLowerCase()}`
            let urlCancion = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            setLoading(true)
            const [resArtista, resCancion] = await Promise.all(
                [
                    helpHttp().get(urlArtista),
                    helpHttp().get(urlCancion)
                ]
            )
            setBiografia(resArtista)
            setCancionLetra(resCancion)
            setLoading(false)
        }
        getData()
        localStorage.setItem("misCanciones", JSON.stringify(misCanciones))
    }, [busqueda, misCanciones])
    return (
        <div>
            <HashRouter >
                <header>
                    <h2>Buscador de canciones</h2>
                    <nav>
                        <Link to="/canciones/">Home</Link>
                    </nav>
                </header>
                {loading && <Loader></Loader>}
                <article className="grid-1-2">
                    <Routes>
                        <Route path="/canciones/" element={<>
                            <SongForm handleSaveSong={handleSaveSong} handleSearch={handleSearch}></SongForm>
                            {busqueda && !loading && (<SongDetails busqueda={busqueda} cancionLetra={cancionLetra} biografia={biografia}></SongDetails>)}
                            <SongTable handleDeleteSong={handleDeleteSong} canciones={misCanciones}></SongTable>
                        </>}>Home
                        </Route>
                        <Route path="/canciones/:id" element={<SongPage misCanciones={misCanciones}></SongPage>}></Route>
                        <Route path="*" element={<Error404></Error404>}></Route>
                    </Routes>
                </article>
            </HashRouter>
        </div >
    )
}