import { TYPES } from "@/actions/shoppingActions";
import axios from "axios";
import { useReducer, useEffect } from "react";
import { shoppingReducer, shoppingInitialState } from "@/reducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const updateState = async () => {
      const ENDPOINTS = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart"
      }
      const reponseProducts = await axios.get(ENDPOINTS.products),
        reponseCart = await axios.get(ENDPOINTS.cart);
      const productsList = reponseProducts.data,
        cartItems = reponseCart.data;

      const data = {
        products: productsList,
        cart: cartItems
      }

      dispatch({type: TYPES.READ_STATE, payload: data})
    }

    useEffect(() => {
      updateState()
    }, [])
    

    // Destructurando el estado
    const {products, cart} = state;

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
