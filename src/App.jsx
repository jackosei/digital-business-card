import useLocalStorage from "use-local-storage"
import Info from "./components/home/Info"
import About from "./components/home/About"
import Interests from "./components/home/Interests"
import Footer from "./components/home/Footer"
import ThemeButton from "./components/home/ThemeButton"
import "./App.css"
import Card from "./components/journals/Card.jsx"
import rawData from "./components/journals/rawData.js"

export default function App() {
	// get user's preferred color-theme and store in local storage
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	)

	// change theme based on user's preferred mode
	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
	}

	// retrieve raw data
	// rawData.map((rD) => {
	// 	const card = <Cards key={rD.id} data={rD} />
	// })

	// render these components
	return (
		<div className="app" data-theme={theme}>
			<Card />
			<ThemeButton theme={theme} switchTheme={switchTheme} />
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	)
}
