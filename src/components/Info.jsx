import mailIcon from "../assets/icons/Mail.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import LocationPin from "../assets/icons/LocationPin"
import codeIcon from "../assets/icons/hexa.svg"
import ProfileImage from "../assets/jack-profile-image.webp"

import twitterIcon from "../assets/icons/Twitter Icon.svg"
import facebookIcon from "../assets/icons/Facebook Icon.svg"
import instagramIcon from "../assets/icons/Instagram Icon.svg"
import githubIcon from "../assets/icons/GitHub Icon.svg"

import "./Info.css"

export default function Info() {
	return (
		<div className="info">
			<div className="picture__wrapper">
				<img src={ProfileImage} alt="Portrait Photo of Jack Osei" />
				<img src={codeIcon} alt="code icon" className="code-icon" />
				<div className="picture__shadow"></div>
			</div>
			<div className="text__wrapper">
				<h1 className="name">Jack Osei</h1>
				<p className="role">Frontend Developer</p>
				<div className="location">
					<LocationPin />
					Dubai, UAE
				</div>
			</div>
			<div className="btns__wrapper">
				<a className="btn btn__email" href="mailto:jackoseik@gmail.com">
					<img src={mailIcon} alt="mail icon" />
					<p>Email</p>
				</a>
				<a
					className="btn btn__linkedin"
					href="https://www.linkedin.com/in/jackosei/"
				>
					{/* <img src={linkedinIcon} alt="linkedin icon" /> */}
					<p>Download CV</p>
				</a>

			</div>
			{/* <div>
				<a href="https://www.linkedin.com/in/jackosei/" target="_blank">
					<img className="footer-icon" src={linkedinIcon} alt="linkedin icon" />
				</a>
				<a href="https://facebook.com/freedomwithjack" target="_blank">
					<img className="footer-icon" src={facebookIcon} alt="facebook icon" />
				</a>
				<a href="https://github.com/jackosei" target="_blank">
					<img className="footer-icon" src={githubIcon} alt="github icon" />
				</a>
			</div> */}
		</div>
	)
}
