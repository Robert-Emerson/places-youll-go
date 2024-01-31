import logoImage from '@/logo.png'
import logo from './Logo.module.css'

export const Logo = () => {
    return (
                <a href="/" className={logo.nounderline}>
                    <img src={logoImage} className={logo.smalllogo} alt="Places You'll Go logo" ></img>
                    <h1>Places You'll Go</h1>
                </a>
    )
}
