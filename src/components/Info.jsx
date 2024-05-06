import mailIcon from "../assets/Mail.svg"
import linkedinIcon from "../assets/linkedin.svg"
import "./Info.css"

export default function Info() {
	return (
		<div className="info">
			<div className="picture__wrapper"></div>
			<div className="text__wrapper">
				<h1 className="name">Jack Osei</h1>
				<p className="role">Frontend Developer</p>
				<a className="website" href="/">
					jackosei.com
				</a>
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
					<img src={linkedinIcon} alt="mail icon" />
					<p>LinkedIn</p>
				</a>
			</div>
		</div>
	)
}
