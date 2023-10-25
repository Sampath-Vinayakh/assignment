import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("sampath@gmail.com");
  const [password, setPassword] = useState("secret");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    navigate("/app");
  }

  return (
    <div className={styles.login}>
      <PageNav />

      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value="sampath@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value="secret"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        <p>
          If you are not registered? <Link to="/register">Click here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
