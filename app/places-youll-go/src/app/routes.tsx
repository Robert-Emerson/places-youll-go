import { Outlet, createBrowserRouter } from "react-router-dom"

import { Quotes } from "@/features/quotes/Quotes"
import { Error } from "@/shared/ui-components/Error"
import { TripBuilder } from "@/features/tripBuilder/TripBuilder"
import { Header } from "@/shared/ui-components/Header"
import { Footer } from "@/shared/ui-components/Footer"
import app from "./App.module.css"
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js"
import { reactPlugin } from "@/shared/services/AppInsightsService"

function Layout() {
  return (
    <div className={app.page}>
      <Header />
      <div className={app.content}>
        <AppInsightsErrorBoundary
          onError={() => <Error />}
          appInsights={reactPlugin}
        >
          <Outlet />
        </AppInsightsErrorBoundary>
      </div>
      <Footer />
    </div>
  )
}

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <TripBuilder />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
])
