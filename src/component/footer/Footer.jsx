import React from "react";
import "./footer.css";

export default function Footer() {
	return(
		<footer className="center">
			<h3 className="heading">
				<h2>Prototype Portfolio</h2>
			</h3>
			<div className="info">
				<div className="center">
					<h3>Creación</h3>
					<p>13/02/2025</p>
				</div>
				<div className="center">
					<h3>Autores</h3>
					<a href="https://github.com/McMaldo">@McMaldo</a>
				</div>
			</div>
			<div className="ubic">
				<p className="pais">Arg.</p>
				<p className="prov">Bs. As.</p>
			</div>
		</footer>
	);
}