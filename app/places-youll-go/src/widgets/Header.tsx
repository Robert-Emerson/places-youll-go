import header from "./Header.module.css"
import { Logo } from "@/widgets/Logo"
import { NavBar } from "@/widgets/NavBar"

export const Header = () => {
  return (
    <header className={header.topbar}>
      <div className={header.container}>
        <Logo />
        <div className={header.searchbar}></div> {/* TODO: extract */}
        <NavBar />
      </div>
    </header>
  )
}
