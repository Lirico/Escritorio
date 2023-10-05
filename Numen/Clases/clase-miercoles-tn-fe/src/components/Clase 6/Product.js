import React from "react";

const Product = ({product, addToCart}) => {

    // Destructurar el producto
    const {id, name, price} = product;

  return (
    <div className="product">
      <h4>{name}</h4>
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default Product;
