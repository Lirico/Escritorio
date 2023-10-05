const Product = ({ data, addToCart }) => {
  const { name, price, id } = data;

  return (
    <div className="product">
      <h4>{name}</h4>
      <h5>${price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default Product;
