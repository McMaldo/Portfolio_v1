import React from "react";
import s from './aboutMe.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";

export default function AboutMe() {

	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	
	return (
		<div className={s.aboutMe}>
			<article>
				{isTranslatedToEnglish? 
				<>
					<p>
						Maldonado Ignacio, also known as Maldo. Personal & Professional 
						Information Technology Technician, programming since the age of 15.
					</p>
					<p>
						With a strong affinity for Front-end Development and Web Design, 
						as well as considerable experience in Back-end and Database development.
					</p>
					<p>
						Currently focused on React JS, along with its multiple libraries, such as MUI, AntD, RRD, and others.
					</p>
				</> : <>
					<p>
						Maldonado Ignacio, también conocido como Maldo. Técnico en Informática 
						Personal y Profesional, programando desde los 15 años.
					</p>
					<p>
						Gran afinidad por el Desarrollo Front-end y el Diseño Web, complementada 
						con amplia práctica en Back-end y Bases de Datos para aplicaciones web.
					</p>
					<p>
						Actualmente enfocado en React JS y sus múltiples librerías, como MUI, AntD, RRD, entre otras.
					</p>
				</>}
			</article>
			<article>
				<h4>{isTranslatedToEnglish? "Education" : "Educación"}</h4>
				<div className={s.eduItem}>
					<div>{isTranslatedToEnglish? "High Scholl" : "Secundaria"}: Técnica N°3, Malv. Arg., Bs. As., Argentina</div>
					<div>{isTranslatedToEnglish? "Title" : "Título"}: Tecnicatura en Programación Personal y Profesional</div>
				</div>
				<div className={s.eduItem}>
					<div>{isTranslatedToEnglish? "College" : "Universidad"}: UBA (Universidad Nacional de Buenos Aires), Bs. As., Argentina</div>
					<div>{isTranslatedToEnglish? "Career" : "Carrera"}: Licenciatura en Ciencia de la Computación</div>
					<div className={s.upperTag}>{isTranslatedToEnglish? "Current" : "Cursando"}</div>
				</div>
			</article>
		</div>
	)
}