/* eslint-disable react/prop-types */
import { useParams } from "react-router"
import { SongDetails } from "../components/SongDetails"

export const SongPage = ({ misCanciones }) => {
    let { id } = useParams()
    let { busqueda, cancionLetra, biografia } = misCanciones[id]
    return (
        <SongDetails busqueda={busqueda} cancionLetra={cancionLetra} biografia={biografia}></SongDetails>
    )
}
