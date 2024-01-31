import { AuthButton } from "./AuthButton"
import navbar from "./NavBar.module.css"

type NavLink = {
  displayText: string
  location: string
}

function NavItem({ link }: { link: NavLink }): JSX.Element {
  return (
    <a href={link.location} key={link.location}>
      {link.displayText}
    </a>
  )
}

export const NavBar = () => {
  let links: [NavLink] = [{ displayText: "quotes", location: "quotes" }]

  return (
    <nav className={navbar.nav}>
      {links.map(link => NavItem({ link }))}
      <AuthButton />
    </nav>
  )
}
