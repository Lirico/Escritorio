import { useState } from "react"


const initialState = "Morocho"

const Estado = () => {

    const [cabello, setCabello] = useState(initialState)

  return (
    <>
        <h3>{cabello}</h3>
        <button onClick={() => setCabello("Rubio")}>Transfomarse en SSJ 1</button>
        <button onClick={() => setCabello("Rubio son rayitos")}>Transfomarse en SSJ 2</button>
        <button onClick={() => setCabello("Rubio con pelo largo")}>Transfomarse en SSJ 3</button>
        <button onClick={() => setCabello("Colorado")}>Transfomarse en fase dios</button>
        <button onClick={() => setCabello("Turqueza")}>Transfomarse en SSJ fase dios</button>
        <button onClick={() => setCabello(initialState)}>Volver al estado inicial</button>
    </>
  )
}

export default Estado