import logoImage from "@/logo.png"
import logo from "./Logo.module.css"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to="/" className={logo.nounderline}>
      <img
        src={logoImage}
        className={logo.smalllogo}
        alt="Places You'll Go logo"
      ></img>
      <h1>Places You'll Go</h1>
    </Link>
  )
}
