import React from "react";
import s from './aboutMe.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";

export default function AboutMe() {

	let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	
	return (
		<div className={s.aboutMe}>
			<article>
				{isTranslatedToEnglish? 
				<>
					<p>
						Maldonado Ignacio, also known as Maldo.
						Personal & Profesional Informatic Technician, programming since 15 years old.
					</p>
					<p>
						With a great affinity for the Front-end Development & Web Design.
						At the same time with lot of practice in Back-end y Data Bases for the Web.
					</p>
					<p>
						Currently focus on React JS, with its multiples libraries like MUI, AntD, rrd, etc.
					</p>
				</> : <>
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
				</>}
			</article>
			<article>
				<h4>{isTranslatedToEnglish? "Education" : "Educación"}</h4>
				<div className={s.eduItem}>
					<div>{isTranslatedToEnglish? "High Scholl" : "Secundaria"}: Técnica N°3, Malv. Arg., Bs. As., Argentina</div>
					<div>{isTranslatedToEnglish? "Title" : "Titulo"}: Tecnicatura en Programación Personal y Profesional</div>
				</div>
				<div className={s.eduItem}>
					<div>{isTranslatedToEnglish? "College" : "Universidad"}: UBA (Universidad Nacional de Buenos Aires), Bs. As., Argentina</div>
					<div>{isTranslatedToEnglish? "Title" : "Titulo"}: Licenciatura en Ciencia de la Computación</div>
				</div>
			</article>
		</div>
	)
}