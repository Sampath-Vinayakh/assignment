import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

function Register() {
  return (
    <div className={styles.login}>
      <PageNav />

      <form>
        <h3>Register</h3>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>Submit</button>
        <p>
          Already a user? <Link to="/login">Click here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
