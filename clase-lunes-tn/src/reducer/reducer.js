import { TYPES } from "@/actions/actions"
import { initialState } from "./initialState"




export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.INCREMENTAR: {
            return {
                ...state,
                contador: state.contador + action.payload
           }
        }
        case TYPES.RESETEAR: {
            return initialState
        }
        case TYPES.DECREMENTAR: {
            return {
                ...state,
                contador: state.contador - action.payload
           }
        }
        default:
            return state;
    }
}