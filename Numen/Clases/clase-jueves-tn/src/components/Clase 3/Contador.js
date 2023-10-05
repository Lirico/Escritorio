import { useReducer } from "react"
import { TYPES } from "../../actions/actions";
import { reducer } from "../../reducer/reducer";
import { initialState } from "../../reducer/initialState";

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({type: TYPES.INCREMENTAR})
    
    const resetear = () => dispatch({type: TYPES.RESETEAR})

    const restar = () =>dispatch({type: TYPES.DECREMENTAR})

  return (
    <>
        <div style={{
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