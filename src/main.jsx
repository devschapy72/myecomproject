import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    // domain={import.meta.env.VITE_AUTH_DOMAIN}
    // clientId={import.meta.env.VITE_CLIENT_ID}
    domain="dev-asuie1k5njhnzq4a.us.auth0.com"
    clientId="aXMmM17bvpXT2XLLLDNOsJZdCiHvsNW4"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>
);
