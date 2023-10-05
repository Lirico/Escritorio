import { TYPES } from "@/actions/actions";
import { initialState } from "./initialState";

  
export const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.INCREMENTAR:
        return {
          ...state,
          contador: state.contador + 1,
        };
      case TYPES.RESTEAR:
        return initialState;
      case TYPES.DECREMENTAR:
        return {
          ...state,
          contador: state.contador - 1,
        };
      default:
        return state
    }
  };