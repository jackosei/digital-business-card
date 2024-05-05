export default function ThemeButton({ theme, switchTheme }) {
	return (
		<button onClick={switchTheme}>
			Switch to {theme === "light" ? "Dark 🌙" : "Light 🔆"} Theme
		</button>
	)
}
