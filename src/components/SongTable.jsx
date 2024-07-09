/* eslint-disable react/prop-types */
import { SongTableRow } from "./SongTableRow"

export const SongTable = ({ canciones, handleDeleteSong }) => {
    return (
        <div>
            <h3>Mis canciones</h3>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Artista</th>
                        <th>Cancion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        canciones.length > 0
                            ? canciones.map((cancion, index) => <SongTableRow id={index} key={index} handleDeleteSong={handleDeleteSong} cancion={cancion}></SongTableRow>)
                            : <tr><td colSpan="4">Sin canciones</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
