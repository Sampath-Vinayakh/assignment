import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductsContext";
import Loader from "./Loader";

const URL = "https://fakestoreapi.com";

function ProductItem() {
  const { id } = useParams();
  const { addToCart } = useProducts();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XL");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/products/${Number(id)}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [id]);

  function handleClick() {
    const element = document.querySelector(".added-to-cart");
    element.innerHTML = "Added to cart! &#10003;";
    setTimeout(() => {
      element.innerHTML = "";
    }, 3000);
    const cartProduct = {
      id,
      title,
      price,
      image,
      quantity: Number(quantity),
      size,
    };
    addToCart(cartProduct);
  }

  const { title, price, description, category, image } = product;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productItem}>
          <div className={styles.imageBox}>
            <img src={image} alt="Product Image" />
          </div>
          <div>
            <p>Home / {category}</p>
            <h3>{title}</h3>
            <h2>$ {price}</h2>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="S">S</option>
              <option value="XS">XS</option>
            </select>
            <div className={styles.quantitySection}>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={handleClick}>Add to cart</button>
              <span className="added-to-cart"></span>
            </div>
            <h3>Product Details</h3>
            <h4>{description}</h4>
            <button className={styles.back} onClick={() => navigate(-1)}>
              &#8592; BACK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItem;
