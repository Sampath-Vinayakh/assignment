import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <section className={styles.main}>
        <div className={styles.info}>
          <h1>Shopping for all</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae placeat deserunt nam cupiditate quasi mollitia doloribus
            eveniet, dignissimos doloremque nihil ex optio adipisci magnam iste
            aliquam saepe fugit ipsa? Iusto ab voluptatem quisquam eum soluta
            libero nisi doloribus, aspernatur commodi necessitatibus modi eos
            natus. Sint molestias dicta eius facere.
          </p>
          <Link to="/login">Login</Link>
        </div>
        <div className={styles["img-container"]}>
          <img src="pic_1.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
