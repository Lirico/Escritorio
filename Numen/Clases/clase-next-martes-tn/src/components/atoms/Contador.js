
import { useReducer } from "react"
import { TYPES } from "@/actions/actions"
import { reducer, initialState } from "@/reducer/reducer"


const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({type: TYPES.INCREMENTAR, payload: 1})

    const resetear = () => dispatch({type: TYPES.RESETEAR})

    const restar = () => dispatch({type: TYPES.DECREMENTAR, payload: 1})

  return (
    <>
        <div style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",   
            alignItems: "center"         
        }}>
            <div>
                <button onClick={sumar}>+</button>
                <button onClick={resetear}>0</button>
                <button onClick={restar}>-</button>
            </div>
            <h3>{state.contador}</h3>
        </div>
    </>
  )
}

export default Contador

