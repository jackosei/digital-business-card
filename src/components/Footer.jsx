export default function Footer() {
	const currentYear = new Date().getFullYear()
	return (
		<div className="footer">
			Jack Osei © {currentYear} | All rights reserved
		</div>
	)
}
