import LocationPin from "../assets/icons/LocationPin"
import ProfileImage from "../assets/jack-profile-image.webp"
import DownloadIcon from "../assets/icons/DownloadIcon"
import MailIcon from "../assets/icons/MailIcon"
import LinkedInIcon from "../assets/icons/LinkedInIcon"
import FacebookIcon from "../assets/icons/FacebookIcon"
import GitHubIcon from "../assets/icons/GitHubIcon"
import ResumePDF from "../../public/Jack Osei Resume.pdf"

import "./Hero.css"
import CodeIcon from "../assets/icons/CodeIcon"

export default function Info() {
	return (
		<div className="info">
			<div className="picture__wrapper">
				<img src={ProfileImage} alt="Portrait Photo of Jack Osei" />
				<CodeIcon size={48} className="code-icon" />
				<div className="picture__shadow"></div>
			</div>
			<div className="text__wrapper">
				<h1 className="name">Jack Osei</h1>
				<p className="role">Frontend Developer</p>
				<div className="location">
					<LocationPin size={16} />
					Dubai, UAE
				</div>
				<div className="social-icons">
					<a href="https://www.linkedin.com/in/jackosei/" target="_blank">
						<LinkedInIcon className="social-icon" size={20} />
					</a>
					<a href="https://facebook.com/freedomwithjack" target="_blank">
						<FacebookIcon className="social-icon" size={22} />
					</a>
					<a href="https://github.com/jackosei" target="_blank">
						<GitHubIcon className="social-icon" size={20} />
					</a>
				</div>
			</div>
			<div className="btns__wrapper">
				<a className="btn btn__email" href="mailto:jackoseik@gmail.com">
					<MailIcon size={16} className="mail-icon" />
					Email
				</a>
				<a
					className="btn btn__download"
					href={ResumePDF}
					target="_blank"
					download="Jack Osei Resume.pdf"
				>
					<DownloadIcon size={16} className="download-icon" />
					Download CV
				</a>

			</div>
		</div>
	)
}
