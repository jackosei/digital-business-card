import ThemeButton from "./ThemeButton"
import JackLogo from "../assets/icons/JackLogo"
import brandLogo from "../assets/jack-logo.svg"

const Navbar = ({theme, switchTheme}) => {

	return (
		<nav className="nav" >
			<JackLogo size={32} className="brand-logo"/>
			<div className="nav-links">
				<a href="!#" className="nav-link">Home</a>
				<a href="!#" className="nav-link">About</a>
				<a href="!#" className="nav-link">Journals</a>
				<ThemeButton theme={theme} switchTheme={switchTheme} />
			</div>
		</nav>
	)
}


export default Navbar