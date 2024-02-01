import { RouterProvider } from "react-router-dom"

import { Header } from "@/shared/ui-components/Header"
import { AppRouter } from "./routes"
import { Footer } from "@/shared/ui-components/Footer"

import app from "./App.module.css"

const App = () => {
  return (
    <div className={app.page}>
      <Header />
      <div className={app.content}>
        <RouterProvider router={AppRouter} />
      </div>
      <Footer />
    </div>
  )
}

export default App
