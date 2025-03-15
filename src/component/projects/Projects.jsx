import React from "react";
import s from './projects.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { projects } from "../../assets/userData.json";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {

	const {ARTICLES_IMGS_DIR} = projects;
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return (
		<div className={s.projects}>
			{projects.articles.map((p, pKey) => (
				<article key={pKey}>
					<div className={s.imgContainer}>
						<img src={ARTICLES_IMGS_DIR + p.img} alt="" />
						<div className={p.demo || p.gh || p.gl ? s.links : ""}>
							{p.demo ? <a href={p.demo} title="demo"><FontAwesomeIcon icon={faGlobe}/></a> : ""}
							{p.gh ? <a href={p.gh} title="github repo"><FontAwesomeIcon icon={faGithub}/></a> : ""}
							{p.gl ? <a href={p.gl} title="gitlab repo"><FontAwesomeIcon icon={faGitlab}/></a> : ""}
						</div>
					</div>
					<div className={s.techs}>{p.techs.map((t, tKey) => <div key={tKey}>{t}</div>)}</div>
					<h4 className={s.name}>{p.name}</h4>
					<div className={s.desc}>{isTranslatedToEnglish? p.desc.en : p.desc.es}</div>
				</article>
			))}
		</div>
  )
}