import { useState } from 'react'



const initialState = "Morocho"

const Prueba = () => {

    const [cabello, setCabello] = useState(initialState)

  return (
    <>
        <h2>{cabello}</h2>

        <button onClick={() => setCabello("Rubio")}>Cambiar Estado</button>
        <button onClick={() => setCabello(initialState)}>Reset</button>
    </>
  )
}

export default Prueba