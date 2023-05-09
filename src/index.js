import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Auth0Provider
      domain="dev-q1z1lcr2eau7cv5w.us.auth0.com"
      clientId="vQEXZutceL2JgU2hhHKkNKht4zQaNMoB"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>
);
