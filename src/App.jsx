import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";
import Cart from "./components/CartList";

function App() {
  return (
    <div>
      <AuthProvider>
        <ProductsProvider>
          <HashRouter>
            <Routes>
              <Route index element={<HomePage />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="products" />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<ProductItem />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Routes>
          </HashRouter>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
