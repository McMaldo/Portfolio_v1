import s from './aboutMe.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useOverlay } from '../../context/OverlayContext';
import { useRef, useState } from 'react';
import { useTheme } from '../../hook/useTheme';

export default function AboutMe() {

	let {theme} = useTheme();
	let {openPdfPreview} = useOverlay();
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	let [viewSelected, setViewSelected] = useState("education");
	let aboutMeArticle = useRef();

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
			company: "Universidad de Buenos Aires, Argentina",
			link:"https://www.uba.ar/",
			title: "Licenciatura en Ciencia de la Computación",
			pdf:undefined}
		],
		certificates:[
			{skill: "JavaScript",
			company: "HackerRank",
			link:"https://www.hackerrank.com/skills-verification/javascript_basic",
			title: "JavaScript (Basic) Certificate",
			pdf: "hackerrack_js_basic_certificate"},

			{skill: "CSS",
			company: "HackerRank",
			link:"https://www.hackerrank.com/skills-verification/css",
			title: "CSS (Basic) Certificate",
			pdf: "hackerrack_css_basic_certificate"},
			
			{logo: "CFP",
			company: "CFP 401 Tortuguitas",
			link:"https://cfp401.edu.ar/",
			title: "Pensamiento Computacional - Programación",
			pdf: "CFP401_PensamientoComputacional-Programacion"},
			
			{logo: "CFP",
			company: "CFP 401 Tortuguitas",
			link:"https://cfp401.edu.ar/",
			title: "Robotica y Automatización",
			pdf: "CFP401_RoboticayAutomatizacion"},
			
			{logo: "CFP",
			company: "CFP 401 Tortuguitas",
			link:"https://cfp401.edu.ar/",
			title: "Diseño y Fabricación Digital",
			pdf: "CFP401_DisenoyFabricacionDigitial"},
			
			{skill: "Powershell-Dark",
			company: "Cisco Networking Academy program",
			link:"https://www.netacad.com/courses/linux-unhatched?courseLang=en-US",
			title: "NDG Linux Unhatched",
			pdf: "cisco_netacad_shellscript"}
		]
	}
	
	return (
		<div className={s.aboutMe}>
			<article ref={aboutMeArticle}>
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
			<article style={{height: aboutMeArticle.current? aboutMeArticle.current.offsetHeight : "100%"}}>
				<div className={s.sectionsSwitch}>
					<h4 className={viewSelected==="education"? s.current : ""} onClick={()=> setViewSelected("education")}>
						{isTranslatedToEnglish? "Education" : "Educación"}
					</h4>
					<h4 className={viewSelected==="certificates"? s.current : ""} onClick={()=> setViewSelected("certificates")}>
						{isTranslatedToEnglish? "Certificates" : "Certificados"}
					</h4>
				</div>
				<div className={"customScroll "+s.eduItemsList}>
					{viewSelected === "education" ?
					titles.education.map((item, index) => (
						<div key={index} className={s.eduItem}>
							<img src={item.logo} alt="logo" />
							<a href={item.link} target="_blank" className={s.comp}>{item.lvl && (isTranslatedToEnglish? item.lvl.en : item.lvl.es)}: {item.company}<FontAwesomeIcon icon={faUpRightFromSquare}/></a>
							<div className={s.title}>{(isTranslatedToEnglish? "Title" : "Título")}: {item.title}</div>
							{item.pdf && <FontAwesomeIcon className={s.openPdf} icon={faFilePdf} onClick={() => openPdfPreview(item.pdf)}/>}
							{!item.pdf && <div className={s.upperTag}>{isTranslatedToEnglish? "Current" : "Cursando"}</div>}
						</div>
					))
					:
					titles.certificates.map((item, index) => (
						<div key={index} className={s.eduItem}>
							{item.skill && <img src={"https://raw.githubusercontent.com/McMaldo/skill-icons/main/icons/" + (theme=="dark"? item.skill : item.skill.replace(/-Dark/g, "-Light")) + ".svg"} alt="" />}
							{item.logo && <img src={"/Portfolio_v1/icons/" + item.logo + ".svg"} alt="logo" />}
							<a href={item.link} target="_blank" className={s.comp}>{item.company}<FontAwesomeIcon icon={faUpRightFromSquare}/></a>
							<div className={s.title}>{item.title}</div>
							<FontAwesomeIcon className={s.openPdf} icon={faFilePdf} onClick={() => openPdfPreview(item.pdf)}/>
						</div>
					))
					}
				</div>
			</article>
		</div>
	)
}