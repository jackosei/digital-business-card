import { useState } from "react"
import ThemeButton from "./ThemeButton"
import JackLogo from "../assets/JackLogo"

const Navbar = ({ theme, switchTheme, navigate }) => {
	const [activeLink, setActiveLink] = useState("home")

	const handleNavigation = (link) => {
		navigate(link)
		setActiveLink(link)
	}

	return (
		<nav className="nav" >
			<JackLogo size={32} className="brand-logo" />
			<div className="nav-links">
				<a
					className={`nav-link ${activeLink === "home" && "active"}`}
					onClick={() => handleNavigation("home")}
				>Home</a>
				<a
					className={`nav-link ${activeLink === "about" && "active"}`}
					onClick={() => handleNavigation("about")}
				>About</a>
				<a
					className={`nav-link ${activeLink === "journals" && "active"}`}
					onClick={() => handleNavigation("journals")}
				>Journals</a>
				<ThemeButton theme={theme} switchTheme={switchTheme} />
			</div>
		</nav>
	)
}


export default Navbar