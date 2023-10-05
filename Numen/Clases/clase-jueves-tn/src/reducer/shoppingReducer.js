import { TYPES } from "../actions/actions";
import { shoppingInitialState } from "./shoppingInitialState";

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
           const newItem = state.products.find(product => product.id === action.payload)

           const itemInCart = state.cart.find(item => item.id === newItem.id) 

           return itemInCart  
            ? {
                ...state,
                cart: state.cart.map(item => 
                    item.id === itemInCart.id    
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            }
            : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}]
            } 
        }
        case TYPES.REMOVE_ONE_PRODUCT: {}
        case TYPES.REMOVE_ALL_PRODUCTS: {}
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }

        default:
            return state;
    }
}



