import { TYPES } from "@/actions/actions";


export const initialState = {
    contador: 0,
}

export function reducer(state, action) {
    switch (action.type) {
        // CONTADOR
        case TYPES.INCREMENTAR:
            return {contador: state.contador + action.payload}
        case TYPES.DECREMENTAR: 
            return {contador: state.contador - action.payload} 
        default:
            return state;
    }
}