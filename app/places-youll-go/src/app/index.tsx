import { RouterProvider } from "react-router-dom";

import "./index.css"
import { Header } from "@/shared/ui/Header";
import { AppRouter } from "./routes";


const App = () => {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
