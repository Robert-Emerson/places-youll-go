import { RouterProvider } from "react-router-dom"

import { Error as ErrorComponent } from "@/shared/ui-components/Error"
import { AppRouter } from "./routes"
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js"
import { reactPlugin } from "@/shared/services/AppInsightsService"

const App = () => {
  return (
    <AppInsightsErrorBoundary  onError={() => <ErrorComponent/>} appInsights={reactPlugin}>
      <RouterProvider router={AppRouter} />
    </AppInsightsErrorBoundary >
  )
}

export default App
