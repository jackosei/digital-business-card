import mailIcon from "../assets/Mail.svg"
import linkedinIcon from "../assets/linkedin.svg"
import "./Info.css"
import LocationPin from "./icons/LocationPin"

export default function Info() {
	return (
		<div className="info">
			<div className="picture__wrapper"></div>
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
					<img src={linkedinIcon} alt="linkedin icon" />
					<p>LinkedIn</p>
				</a>
			</div>
		</div>
	)
}
