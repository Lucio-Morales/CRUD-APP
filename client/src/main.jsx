import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wwp5vb5iyiguj4t3.us.auth0.com"
    clientId="RTPrHfkwJQp7hjl0QPkxi3s3foXaM0JZ"
    redirectUri={window.location.origin} // || authorizationParams={{redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
