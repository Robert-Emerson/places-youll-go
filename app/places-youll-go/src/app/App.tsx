import { RouterProvider } from "react-router-dom";

import { Header } from "@/shared/ui-components/Header";
import { AppRouter } from "./routes";


const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
