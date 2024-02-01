import { createBrowserRouter } from "react-router-dom"

import { Counter } from "@/features/counter/Counter"
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
