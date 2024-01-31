import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./app/App"
import { store } from "./app/store"
import "@/shared/global.css"
import { Auth0Provider } from "@auth0/auth0-react"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <Auth0Provider
      domain={import.meta.env.VITE_IDP_DOMAIN}
      clientId={import.meta.env.VITE_IDP_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Auth0Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
