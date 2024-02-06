/* c8 ignore start*/
import { ApplicationInsights } from "@microsoft/applicationinsights-web"
import { ReactPlugin } from "@microsoft/applicationinsights-react-js"

const reactPlugin = new ReactPlugin()
const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING,
    enableAutoRouteTracking: true,
    extensions: [reactPlugin],
  },
})
appInsights.loadAppInsights()

export { reactPlugin, appInsights }

/* c8 ignore stop*/
