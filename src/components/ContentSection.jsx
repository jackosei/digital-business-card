import Content from "./Content"
import { About, Interests } from "../lib/constants"
import "./ContentSection.css"

export default function ContentSection() {
	return (
		<section className="content-section">
			<Content title={About.title} description={About.description} />
			<Content title={Interests.title} description={Interests.description} />
		</section>
	)
}
