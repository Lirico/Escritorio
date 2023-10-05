import { useState } from "react"



const initialState = "Morocho"

const Prueba = () => {

    const [cabello, setCabello] = useState(initialState)

  return (
    <>
        <h2>{cabello}</h2>

        <button onClick={() => setCabello("Rubio")}>Actualizar Cabello</button>
        <button onClick={() => setCabello(initialState)}>Resetear</button>
    </>
  )
}

export default Prueba