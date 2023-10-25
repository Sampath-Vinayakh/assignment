import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ product }) {
  const {
    image,
    title,
    rating: { rate, count },
    price,
    id,
  } = product;

  return (
    <Link className={styles.card} to={`${id}`}>
      <li>
        <img src={image} alt="Product" />
        <div className={styles.container}>
          <h4>{title}</h4>
          <span>
            {rate} <i className="fa-solid fa-star"></i>
          </span>
          <p>$ {price} </p>
        </div>
        <span className={styles.cart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
      </li>
    </Link>
  );
}

export default Product;
