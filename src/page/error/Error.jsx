import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className="error">
			<div className="errorDialog">
				<span>Error <span className="errorNro">404</span></span>
				<span>URL no Encontrada</span>
				<Link to="/Portfolio_v1/">Volver al Inicio</Link>
			</div>
		</div>
	)
}