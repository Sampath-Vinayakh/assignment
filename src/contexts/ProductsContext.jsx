import { createContext, useContext, useEffect, useReducer } from "react";

const ProductsContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
};

const URL = "https://fakestoreapi.com";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "products/loaded":
      return { ...state, products: action.payload, isLoading: false };
    case "cart/added": {
      // If the product with the same size already exists this code is to update the quantity instead of adding a new item to the cart. 
      if (state.cart.length) {
        const exisitingProd = state.cart.filter(
          (prod) =>
            prod.id === action.payload.id && prod.size === action.payload.size
        );
        if (exisitingProd.length) {
          exisitingProd[0].quantity += action.payload.quantity;
          return {
            ...state,
            cart: [
              ...state.cart.filter(
                (prod) =>
                  prod.id !== action.payload.id &&
                  prod.size !== action.payload.size
              ),
              exisitingProd[0],
            ],
          };
        }
      }
      return {
        ...state,
        cart:
          state.cart.length !== 0
            ? [...state.cart, action.payload]
            : [action.payload],
      };
    }
    case "cart/removed": {
      return {
        ...state,
        cart: [
          ...state.cart.filter((prod) => {
            if (prod.id === action.payload.id) {
              return prod.size !== action.payload.size;
            }
            return prod.id !== action.payload.id;
          }),
        ],
      };
    }
  }
}

function ProductsProvider({ children }) {
  const [{ products, isLoading, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${URL}/products`);
        const data = await res.json();
        dispatch({ type: "products/loaded", payload: data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  function addToCart(product) {
    dispatch({ type: "cart/added", payload: product });
  }

  function removeFromCart(productInfo) {
    dispatch({ type: "cart/removed", payload: productInfo });
  }

  return (
    <ProductsContext.Provider
      value={{ products, isLoading, addToCart, cart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("Products Context used outside of Products Provider");
  return context;
}

export { ProductsProvider, useProducts };
