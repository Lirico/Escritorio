import { TYPES } from "@/actions/actions"
import { initialState } from "./initialState"


const {INCREMENTAR, DECREMENTAR, RESETEAR, MOSTRAR, OCULTAR} = TYPES;

export const reducer = (state, action) => {
    switch (action.type) { 
      case INCREMENTAR:{
        return {
          ...state,
          contador: state.contador + action.payload
        }
      }
      case RESETEAR: {
        return initialState
      }
      case DECREMENTAR: {
        return {
          ...state,
          contador: state.contador - action.payload
        }
      }
      case MOSTRAR: {
        return {
          ...state,
          visible: true
        }
      }
      case OCULTAR: {
        return {
          ...state,
          visible: false
        }
      }
      default:
        return state;
    }
  }