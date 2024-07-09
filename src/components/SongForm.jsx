/* eslint-disable react/prop-types */
import { useState } from "react"
import { useForm } from "../hooks/useForm"
const initialForm = {
    artista: "",
    cancion: ""
}
export const SongForm = ({ handleSearch, handleSaveSong }) => {
    const { form, handleChange, handleReset } = useForm(initialForm)
    const [isDisabled, setIsDisabled] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.artista || !form.cancion) {
            alert("Datos requeridos")
            setIsDisabled(true)
            return
        }
        setIsDisabled(false)
        handleSearch(form)
        handleReset(initialForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artista" value={form.artista} placeholder="Nombre del artista..." onChange={handleChange} />
                <input type="text" name="cancion" value={form.cancion} placeholder="Nombre de la canción..." onChange={handleChange} />
                <input type="submit" value="Enviar" />
                <input disabled={isDisabled && "disabled"} type="button" value="Guardar Canción" onClick={() => handleSaveSong(setIsDisabled)} />
            </form>
        </div>
    )
}
