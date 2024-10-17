import { shoppingInitialState } from "@/reducer/shoppingInitialState";
import { shoppingReducer } from "@/reducer/shoppingReducer";
import Product from "./Product";
import { TYPES } from "@/actions/actions";
import { useReducer } from "react";
import CartItem from "./CartItem";

const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART} = TYPES;

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state;

    const addToCart = (id) => dispatch({type: ADD_TO_CART, payload: id})

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type: REMOVE_ALL_ITEMS, payload: id})
      } else {
        dispatch({type: REMOVE_ONE_ITEM, payload: id})
      }
    }

    const clearCart = () => dispatch({type: CLEAR_CART})

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
        }
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {
            cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart}/>)
        }
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;