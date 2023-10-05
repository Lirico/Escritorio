import { useState } from "react"


const initialState = "Jorge"

const Estado = () => {

    const [cabello, setCabello] = useState(initialState)

  return (
    <div>
        <h3>{cabello}</h3>
        <button onClick={() => setCabello("Rubio")}>Tranformarse en Super Saiyajin</button>
        <button onClick={() => setCabello(initialState)}>Volver a la normalidad</button>
    </div>
  )
}

export default Estado