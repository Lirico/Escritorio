import { TYPES } from "@/actions/actions";
import { useReducer, useEffect } from "react";
import axios from "axios";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";
import { shoppingReducer } from "@/reducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // Destructurar el estado
  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart"
    };
    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);
    const productsList = await resProducts.data,
      cartItems = await resCart.data

    dispatch({type: TYPES.READ_STATE, payload: {
      products: productsList,
      cart: cartItems
    }})
  }

  useEffect(() => {
    updateState()
  }, [])
  

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  }

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <h4>Total: ${cart.reduce((acumulador, item) => {
        return acumulador + (item.price * item.quantity)
      }, 0)}</h4>
      <br />
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;