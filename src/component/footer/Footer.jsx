import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faDev, faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLifeTime } from "../../hook/useLifeTime";

export default function Footer() {

	const {lifeTime} = useLifeTime("2025-02-13T19:30:00");
	const accounts = [
		{name: "Github", icon:faGithub, link:"https://github.com/McMaldo"},
		{name: "Gitlab", icon:faGitlab, link:"https://gitlab.com/maldonado.ignacio.pablo"},
		{name: "LinkedIn", icon:faLinkedin, link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},
		{name: "DevTo", icon:faDev, link:"https://dev.to/mcmaldo"}
	];

	return(
		<footer className="center">
			<h2 className="heading">
				Prototype Portfolio <FontAwesomeIcon icon={faCreativeCommons}/>
			</h2>
			<hr/>
			<div className="info">
				<div className="group center">
					<h3>Creation</h3>
					<p>13/02/2025</p>
				</div>
				<div className="group center">
					<h3>Author</h3>
					<p className="author">@McMaldo</p>
				</div>
				<div className="group center">
					<h3>Life Time</h3>
					<p className="lifeTime">{lifeTime}</p>
				</div>
				<div className="group center">
					<h3>Contacts</h3>
					<div className="accounts">
						{accounts.map((a, aKey) => (
							<a href={a.link} key={aKey}>
								<FontAwesomeIcon icon={a.icon}/>
							</a>
						))}
					</div>
				</div>
			</div>
			<hr/>
			<div className="ubic">
				<p>Arg.</p>
				<p>Bs. As.</p>
			</div>
		</footer>
	);
}