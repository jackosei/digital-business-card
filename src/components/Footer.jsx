import twitterIcon from "../assets/Twitter Icon.svg"
import facebookIcon from "../assets/Facebook Icon.svg"
import instagramIcon from "../assets/Instagram Icon.svg"
import githubIcon from "../assets/GitHub Icon.svg"
import "./Footer.css"

export default function Footer() {
	return (
		<div className="footer">
			<a href="https://twitter.com/freedomwithjack" target="_blank">
				<img className="footer-icon" src={twitterIcon} alt="twitter icon" />
			</a>
			<a href="https://facebook.com/freedomwithjack" target="_blank">
				<img className="footer-icon" src={facebookIcon} alt="facebook icon" />
			</a>
			<a href="https://instagram.com/freedomwithjack" target="_blank">
				<img className="footer-icon" src={instagramIcon} alt="instagram icon" />
			</a>
			<a href="https://github.com/jackosei" target="_blank">
				<img className="footer-icon" src={githubIcon} alt="github icon" />
			</a>
		</div>
	)
}
