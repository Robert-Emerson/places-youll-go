import { AuthButton } from "./AuthButton"

import header from "./Header.module.css"
import logo from '@/logo.png'

export const Header = () => {
    return (
        <header className={header.topbar}>
            <div className={header.container}>
                <div>
                    <img src={logo} alt="Places You'll Go logo" ></img>
                    <h1>Places You'll Go</h1>
                </div>
                <div className={header.searchbar}></div>
                <div>
                    < AuthButton />
                </div>
            </div>
        </header>
    )
}
