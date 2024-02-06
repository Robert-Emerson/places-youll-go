/* c8 ignore start*/
import { Outlet, createBrowserRouter } from "react-router-dom"

import { Quotes } from "@/pages/quotes/Quotes"
import { Error } from "@/pages/error/Error"
import { TripBuilder } from "@/pages/tripBuilder/TripBuilder"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
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
/* c8 ignore end*/
