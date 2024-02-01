import { createBrowserRouter } from "react-router-dom"

import { Quotes } from "@/features/quotes/Quotes"
import { Map } from "@/features/map/Map"
import { Error } from "@/shared/ui-components/Error"
import { TripBuilder } from "@/features/tripBuilder/TripBuilder"

export const AppRouter = createBrowserRouter([
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
])
