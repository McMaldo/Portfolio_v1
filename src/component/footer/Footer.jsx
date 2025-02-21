import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return(
		<footer className="center">
			<h2 className="heading">
				Prototype Portfolio <FontAwesomeIcon icon={faCreativeCommons}/>
			</h2>
			<div className="info">
				<div className="center">
					<h3>Creation</h3>
					<p>13/02/2025</p>
				</div>
				<div className="author center">
					<h3>Author</h3>
					<a href="https://github.com/McMaldo">@McMaldo</a>
				</div>
			</div>
			<div className="ubic">
				<p>Arg.</p>
				<p>Bs. As.</p>
			</div>
		</footer>
	);
}