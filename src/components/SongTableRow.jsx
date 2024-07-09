/* eslint-disable react/prop-types */
import { useNavigate } from "react-router"

export const SongTableRow = ({ handleDeleteSong, cancion, id }) => {
    const navigate = useNavigate()
    let avatarStyle = {
        widht: "auto",
        height: "40px"
    }
    let { biografia, busqueda } = cancion
    let avatar = biografia.artists[0].strArtistThumb
    return (
        <tr>
            <td>
                <img style={avatarStyle} src={avatar} alt={busqueda.artista} />
            </td>
            <td>
                {busqueda.artista}
            </td>
            <td>
                {busqueda.cancionLetra}
            </td>
            <td>
                <button onClick={() => { navigate(`/canciones/${id}`) }}>Ver</button>
                <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
            </td>
        </tr>
    )
}
