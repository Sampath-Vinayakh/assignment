import { useProducts } from "../contexts/ProductsContext";

function CartItem({ prod }) {
  const { image, price, quantity, size, title, id } = prod;
  const { removeFromCart } = useProducts();
  const subtotal = Number(price * quantity).toFixed(2);
  return (
    <tr>
      <td onClick={() => removeFromCart({ id, size })}>
        <i className="fa-solid fa-xmark"></i>
      </td>
      <td>
        <img src={image} alt="Product Image" />
      </td>
      <td>{title}</td>
      <td>{size}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{subtotal}</td>
    </tr>
  );
}

export default CartItem;
