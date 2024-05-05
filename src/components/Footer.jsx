import twitterIcon from "../assets/Twitter Icon.svg"
import facebookIcon from "../assets/Facebook Icon.svg"
import instagramIcon from "../assets/Instagram Icon.svg"
import githubIcon from "../assets/GitHub Icon.svg"
import "./Footer.css"

export default function Footer() {
	return (
		<div className="footer">
			<img className="footer-icon" src={twitterIcon} alt="twitter icon" />
			<img className="footer-icon" src={facebookIcon} alt="facebook icon" />
			<img className="footer-icon" src={instagramIcon} alt="instagram icon" />
			<img className="footer-icon" src={githubIcon} alt="github icon" />
		</div>
	)
}
