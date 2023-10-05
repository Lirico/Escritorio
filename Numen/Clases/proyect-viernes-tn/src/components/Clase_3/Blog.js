import { useState } from "react"


const initialState = "Jorge"

const Blog = () => {

    const [estado, setEstado] = useState(initialState)

  return (
    <>
        <h2>{estado}</h2>

        <button onClick={() => setEstado("Estado modificado")}>Cambiar Estado</button>
        <button onClick={() => setEstado(initialState)}>Resetear Estado</button>
    </>
  )
}

export default Blog