import "./Content.css"

export default function Content({ title, description }) {
	return (
		<div className="content">
			<h2 className="heading">{title}</h2>
			<p className="text">{description}</p>
		</div>
	)
}
