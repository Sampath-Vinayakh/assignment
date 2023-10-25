import { useProducts } from "../contexts/ProductsContext";
import styles from "./Products.module.css";
import Product from "./Product";

function Products() {
  const { products, isLoading } = useProducts();
  return (
    <div className={styles.products}>
      <h1>Featured Products</h1>
      <ul>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
