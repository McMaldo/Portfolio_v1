import s from './aboutMe.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useOverlay } from '../../context/OverlayContext';
import { useState } from 'react';
import { useTheme } from '../../hook/useTheme';

export default function AboutMe() {

	let {theme} = useTheme();
	let {openPdfPreview} = useOverlay();
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	let [viewSelected, setViewSelected] = useState("education");

	let titles = {
		education:[
			{lvl:{en:"High School", es:"Secundaria"},
			logo:"/Portfolio_v1/icons/RobertoArlt-Logo.svg",
			company:"Técnica N°3, Malvinas Argentinas, Buenos Aires, Argentina",
			link:"https://tecnica3.com.ar/",
			title:"Tecnicatura en Programación Personal y Profesional",
			pdf:"titulo_educativo_TÉCNICO_EN_INFORMÁTICA_PERSONAL_Y_PROFESIONAL"},

			{lvl:{en:"College", es:"Universidad"},
			logo:"/Portfolio_v1/icons/UBA-Logo.svg",
			company: "Universidad de Buenos Aires, Buenos Aires, Argentina",
			link:"https://www.uba.ar/",
			title: "Licenciatura en Ciencia de la Computación",
			pdf:undefined}
		],
		certificates:[
			{logo: "Powershell-Dark",
			company: "Cisco Networking Academy program",
			link:"https://www.netacad.com/courses/linux-unhatched?courseLang=en-US",
			title: "NDG Linux Unhatched",
			pdf: "cisco_netacad_shellscript"},

			{logo: "CSS",
			company: "HackerRank",
			link:"https://www.hackerrank.com/skills-verification/css",
			title: "CSS (Basic) Certificate",
			pdf: "hackerrack_css_basic_certificate"},

			{logo: "JavaScript",
			company: "HackerRank",
			link:"https://www.hackerrank.com/skills-verification/javascript_basic",
			title: "JavaScript (Basic) Certificate",
			pdf: "hackerrack_js_basic_certificate"}
		]
	}
	
	return (
		<div className={s.aboutMe}>
			<article>
				{isTranslatedToEnglish? 
				<>
					<p>
						Maldonado Ignacio, also known as Maldo. Personal & Professional 
						IT Technician, programming since the age of 15.
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
				<div className={s.sectionsSwitch}>
					<h4 className={viewSelected==="education"? s.current : ""} onClick={()=> setViewSelected("education")}>
						{isTranslatedToEnglish? "Education" : "Educación"}
					</h4>
					<h4 className={viewSelected==="certificates"? s.current : ""} onClick={()=> setViewSelected("certificates")}>
						{isTranslatedToEnglish? "Certificates" : "Certificados"}
					</h4>
				</div>
				{viewSelected === "education" ?
					titles.education.map((item, index) => (
						<div key={index} className={s.eduItem}>
							<img src={item.logo} alt="logo" />
							<a href={item.link} target="_blank" className={s.comp}>{item.lvl && (isTranslatedToEnglish? item.lvl.en : item.lvl.es)}: {item.company}</a>
							<div className={s.title}>{(isTranslatedToEnglish? "Title" : "Título")}: {item.title}</div>
							{item.pdf && <FontAwesomeIcon icon={faFilePdf} onClick={() => openPdfPreview(item.pdf)}/>}
							{!item.pdf && <div className={s.upperTag}>{isTranslatedToEnglish? "Current" : "Cursando"}</div>}
						</div>
					))
				:
					titles.certificates.map((item, index) => (
						<div key={index} className={s.eduItem}>
							<img src={"https://raw.githubusercontent.com/McMaldo/skill-icons/main/icons/" + (theme=="dark"? item.logo : item.logo.replace(/-Dark/g, "-Light")) + ".svg"} alt="" />
							<a href={item.link} target="_blank" className={s.comp}>{item.company}</a>
							<div className={s.title}>{item.title}</div>
							<FontAwesomeIcon icon={faFilePdf} onClick={() => openPdfPreview(item.pdf)}/>
						</div>
					))
				}
			</article>
		</div>
	)
}