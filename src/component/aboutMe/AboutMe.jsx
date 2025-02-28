import React from "react";
import s from './aboutMe.module.css';

export default function AboutMe() {
	return (
		<div className={s.aboutMe}>
			<article>
				<p>
					Maldonado Ignacio, tambien conocido como Maldo.
					Técnico en Informática Personal y Profesional, programando desde los 15 años.
				</p>
				<p>
					Con una gran afinidad por el desarrollo Front-end y el Diseño Web.
					A su vez con mucha práctica en Back-end y Bases de Datos para la Web.
				</p>
				<p>
					Actualmente focalizado en React JS, con sus multiples librerias como MUI, AntD, rrd, etc.
				</p>
			</article>
			<article>
				<h4>Education</h4>
				<div className={s.eduItem}>
					<div>High Scholl: Técnica N°3, Malv. Arg., Bs. As., Argentina</div>
					<div>Title: Tecnicatura en Programación Personal y Profesional</div>
				</div>
				<div className={s.eduItem}>
					<div>College: UBA (Universidad Nacional de Buenos Aires), Bs. As., Argentina</div>
					<div>Title: Licenciatura en Ciencia de la Computación</div>
				</div>
			</article>
		</div>
	)
}