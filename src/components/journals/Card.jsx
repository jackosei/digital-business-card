import locationIcon from "../../assets/icons/location-icon.svg"
import "./Card.css"
import slideshow from "../../assets/images/mount-fuji.png"

export default function Card() {
	return (
		<article className="card">
			<div className="slideshow">
				<img className="" src={slideshow} alt="photo slide" />
			</div>
			<div className="content">
				<div className="meta">
					<span className="icon__wrapper">
						<img className="icon" src={locationIcon} alt="location icon" />
						<span className="name">Japan</span>
					</span>
					<span>
						<a className="link" href="">
							View on Google Maps
						</a>
					</span>
				</div>
				<div className="details">
					<h2 className="heading">
						<a className="main-link" href="">
							Mount Fuji
						</a>
					</h2>
					<h3 className="sub-heading">
						Journal
						<time datetime="12-01-2021">12 Jan, 2021</time> {"-"}
						<time datetime="12-01-2021">12 Jan, 2021</time>
					</h3>
					<p>
						Mount Fuji is the tallest mountain in Japan, standing at 3,776
						meters (12,380 feet). Mount Fuji is the single most popular tourist
						site in Japan, for both Japanese and foreign tourists.
					</p>
				</div>
			</div>
		</article>
	)
}
