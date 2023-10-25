import { Link, useNavigate } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";

function PageNav() {
  const [active, setActive] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    logout();
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <Link to={isAuthenticated ? "/app" : "/"}>Clothing App</Link>
      {isAuthenticated && (
        <>
          <ul className={active ? styles.active : ""}>
            <span
              className={styles.close}
              onClick={() => setActive((active) => !active)}
            >
              {active && <i className="fa-solid fa-xmark"></i>}
            </span>
            <li className={styles.username}>Hello, {user.name}</li>
            <li>
              <Link to="cart">Cart History</Link>
            </li>
            <li>
              <button className={styles.logout} onClick={handleLogOut}>
                Logout
              </button>
            </li>
          </ul>
          <span onClick={() => setActive((active) => !active)}>
            <i className="fa-solid fa-bars hamburger-menu"></i>
          </span>
        </>
      )}
    </header>
  );
}

export default PageNav;
