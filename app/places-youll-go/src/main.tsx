/* c8 ignore start*/
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
    <React.StrictMode>
      <Provider store={store}>
        <Auth0Provider
          domain={import.meta.env.VITE_IDP_DOMAIN}
          clientId={import.meta.env.VITE_IDP_CLIENTID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

/* c8 ignore end*/
