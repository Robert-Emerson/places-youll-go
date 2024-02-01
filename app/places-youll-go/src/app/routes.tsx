import { createBrowserRouter } from "react-router-dom"

import { Quotes } from "@/features/quotes/Quotes"
import Map from "@/features/map/Map"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Map />,
  },
  {
    path: "/quotes",
    element: <Quotes />,
  },
])
