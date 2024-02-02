import header from "./Header.module.css"
import { Logo } from "./Logo"
import { NavBar } from "./NavBar"

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
