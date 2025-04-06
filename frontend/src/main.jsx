import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-b4puqduaqy2fbl41.us.auth0.com"
    clientId="SLCOzq5OI883yDLbfmz91UOO0NflmzzK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
