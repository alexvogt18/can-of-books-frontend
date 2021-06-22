import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="dev-jjw40wxd.us.auth0.com"
  clientId="AeZrD6YZKuP1G1sgjkgu4aBS2jYCO0N2"
  redirectUri="http://localhost:3000/profile"
>
  <App />
</Auth0Provider>,
document.getElementById("root")
);
