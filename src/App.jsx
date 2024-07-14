import useLocalStorage from "use-local-storage"
import { useState } from "react"
import Home from "./screens/Home"
import Journals from "./screens/Journals"
import About from "./screens/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./App.css"

export default function App() {
	const [currentScreen, setCurrentScreen] = useState("home")

	const navigateToScreen = (screen) => {
		setCurrentScreen(screen)
	}

	let screenComponent
	switch (currentScreen) {
		case 'journals':
			screenComponent = <Journals />
			break
		case 'about':
			screenComponent = <About />
			break
		default:
			screenComponent = <Home />
			break
	}

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
			<Navbar
				theme={theme}
				switchTheme={switchTheme}
				navigate={navigateToScreen}
			/>
			{screenComponent}
			<Footer />
		</div>
	)
}
