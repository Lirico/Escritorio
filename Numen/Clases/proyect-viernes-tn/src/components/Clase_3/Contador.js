import { useReducer } from "react";
import { TYPES } from "@/actions/actions";
import { reducer } from "@/reducer/reducer";
import { initialState } from "@/reducer/initialState";


const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({type: TYPES.INCREMENTAR, payload: 1})

    const restear = () => dispatch({type: TYPES.RESETEAR})

    const restar = () => dispatch({type: TYPES.DECREMENTAR, payload: 1})

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <button onClick={sumar}>+</button>
          <button onClick={restear}>0</button>
          <button onClick={restar}>-</button>
        </div>
        <h3>{state.contador}</h3>
      </div>
    </>
  );
};

export default Contador;
