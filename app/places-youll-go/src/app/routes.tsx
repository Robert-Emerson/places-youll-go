import { createBrowserRouter } from "react-router-dom";

import { Counter } from "@/features/counter/Counter"
import { Quotes } from "@/features/quotes/Quotes"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Counter />
  },
  {
    path: "/quotes",
    element: <Quotes />,
  }
]);