import useLocalStorage from "use-local-storage"
import Info from "./components/home/Info"
import About from "./components/home/About"
import Interests from "./components/home/Interests"
import Footer from "./components/home/Footer"
import ThemeButton from "./components/home/ThemeButton"
import "./App.css"

export default function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	)

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
	}

	return (
		<div className="app" data-theme={theme}>
			<ThemeButton theme={theme} switchTheme={switchTheme} />
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	)
}
