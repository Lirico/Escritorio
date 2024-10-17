import { useReducer } from "react";
import { TYPES } from "@/actions/actions";
import { reducer } from "@/reducer/reducer";
import { initialState } from "@/reducer/initialState";

const {INCREMENTAR, DECREMENTAR, RESETEAR, MOSTRAR, OCULTAR} = TYPES;

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const incrementar = () => dispatch({type: INCREMENTAR, payload: 1})
    const resetear = () => dispatch({type: RESETEAR})
    const decrementar = () => dispatch({type: DECREMENTAR, payload: 1})
    const mostrar = () => dispatch({type: MOSTRAR})
    const ocultar = () => dispatch({type: OCULTAR})

  return (
    <>
      {
        state.visible && (  <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div>
            <button onClick={decrementar}>-</button>
            <button onClick={resetear}>0</button>
            <button onClick={incrementar}>+</button>
          </div>
          <div>
            <h3>{state.contador}</h3>
          </div>
        </div>)
      }
      <button onClick={state.visible ? ocultar : mostrar}>{state.visible ? 'Ocultar' : 'Mostrar'}</button>
    </>
  );
};

export default Contador;
