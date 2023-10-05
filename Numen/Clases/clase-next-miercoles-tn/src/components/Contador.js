import { TYPES } from "@/actions/actions"
import { reducer, initialState } from "@/reducer/reducer"
import {useReducer} from "react"

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({type: TYPES.INCREMENTAR, payload: 10})
    const restar = () => dispatch({type: TYPES.DECREMENTAR, payload: 10})

    return ( 
        <div style={{textAlign: "center"}}>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
     );
}
 
export default Contador;