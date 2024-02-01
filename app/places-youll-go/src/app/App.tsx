import { RouterProvider } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"

import { Error as ErrorComponent } from "@/shared/ui-components/Error"
import { AppRouter } from "./routes"

const App = () => {
  return (
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <RouterProvider router={AppRouter} />
        </ErrorBoundary>
  )
}

export default App
