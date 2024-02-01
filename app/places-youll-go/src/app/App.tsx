import { RouterProvider } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"

import { Header } from "@/shared/ui-components/Header"
import { Footer } from "@/shared/ui-components/Footer"
import { Error as ErrorComponent } from "@/shared/ui-components/Error"
import { AppRouter } from "./routes"
import app from "./App.module.css"

const App = () => {
  return (
    <div className={app.page}>
      <Header />
      <div className={app.content}>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <RouterProvider router={AppRouter} />
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  )
}

export default App
