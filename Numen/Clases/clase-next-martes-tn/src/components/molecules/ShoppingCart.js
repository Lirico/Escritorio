import { useReducer, useEffect } from "react";
import axios from "axios";
import { TYPES } from "@/actions/shoppingActions";
import {
  shoppingReducer,
  shoppingInitialState,
} from "@/reducer/shoppingReducer";
import CartItem from "../atoms/cart_components/CartItem";
import Product from "../atoms/cart_components/Product";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart"
    };
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart);
    const productsList = responseProducts.data,
      cartItems = responseCart.data;

    dispatch({type: TYPES.READ_STATE, payload: {
      products: productsList,
      cart: cartItems
    }})
  }

  useEffect(() => {
    updateState()
  }, [])
  
  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
    }
  }

  const clearCart = () => dispatch({type: TYPES.CLEAR_CART})

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
