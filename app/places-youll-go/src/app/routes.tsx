import { createBrowserRouter } from "react-router-dom"

import { Quotes } from "@/features/quotes/Quotes"
import Map from "@/features/map/Map"
import { Error } from "@/shared/ui-components/Error"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Map />,
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
