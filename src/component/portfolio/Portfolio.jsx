import React from "react";
import s from './portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio() {
	const IMGS_DIR = "/Portfolio_v1/img/";

	let projects = [
		{img:"kiwi_tt.png", name:"Kiwi TT", techs:["React", "JS", "CSS", "MUI", "AntD"], 
			desc:"Permite administrar a un grupo de trabajo mediante la metodología agil SCRUM, designando tareas con distintas prioridades y plazos de entrega.", gh:"", gl:""},
		{img:"App_Resto.png", name:"App Resto", techs:["React", "EX", "Node", "JS", "CSS"], 
			desc:"Ofrece multiples platos con diferentes clasificaciones, un carrito para administrar las compras y un generador del total a pagar. Además una API para registar las compras.", gh:"https://github.com/McMaldo/act_14_react", gl:""},
		{img:"App_Clothing_Store.png", name:"App Station", techs:["PHP", "CSS", "HTML", "JS"], 
			desc:"Observa el cambio climatico en un app web totalmente responsive, verifica estadisticas como la temperatura, humedad, presión atmosferica y más.", gh:"https://github.com/McMaldo/app-estacion", gl:"https://gitlab.com/mcmaldo/app-estacion"},

		{img:"", name:"App Clothing Store", techs:["CSS", "JS", "HTML"], 
			desc:"E-commerce con múltiples opciones de ropa, y un carrito para administrar las compras de un usuario. Es una SPA elaborada con únicamente JS Vanila para su funcionalidad.", gh:"https://github.com/McMaldo/app_clothing_store", gl:""},
		{img:"", name:"Webgenerator", techs:["PHP", "HTML", "Shell"], 
			desc:"Genera la estrucutra para una aplicación web. Además permite adminitrar las generadas por un mismo usuario y las de todos los registrados por un admin.", gh:"https://github.com/McMaldo/webgenerator", gl:"https://gitlab.com/mcmaldo/webgenerator"},
		{img:"", name:"Kiwi PM", techs:["React", "JS", "CSS"], 
			desc:"En base al nombre de usuario de Github, genera el porfolio ideal seleccionando entre una variedad de plantillas y una paleta de colores personalizada.", gh:null, gl:null}
	]

  return (
		<div className={s.portfolio}>
			{projects.map((p, pKey) => (
				<article key={pKey}>
					<div className={s.imgContainer}>
						<img src={IMGS_DIR + p.img} alt="" />
						<div className={p.gh || p.gl ? s.links : ""}>
							{p.gh ? <a href={p.gh}><FontAwesomeIcon icon={faGithub}/></a> : ""}
							{p.gl ? <a href={p.gl}><FontAwesomeIcon icon={faGitlab}/></a> : ""}
						</div>
					</div>
					<div className={s.techs}>{p.techs.map((t, tKey) => <div key={tKey}>{t}</div>)}</div>
					<h4 className={s.name}>{p.name}</h4>
					<div className={s.desc}>{p.desc}</div>
				</article>
			))}
		</div>
  )
}