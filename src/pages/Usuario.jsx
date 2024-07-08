import { useParams } from "react-router-dom"

export const Usuario = () => {

    let { username } = useParams()
    return (
        <div>
            <h3>Perfil del Usuario</h3>
            <b><p>{username}</p></b>
        </div>
    )
}
