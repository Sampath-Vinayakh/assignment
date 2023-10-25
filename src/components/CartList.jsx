import { useProducts } from "../contexts/ProductsContext";
import CartItem from "./CartItem";
import styles from "./CartList.module.css";

function Cart() {
  const { cart } = useProducts();

  return (
    <div className={styles.cartList}>
      <table>
        <thead>
          <tr>
            <td>REMOVE</td>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>SIZE</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>SUBTOTAL</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartProd) => (
            <CartItem prod={cartProd} key={`${cartProd.id}${cartProd.size}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
