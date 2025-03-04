import React from "react";
import s from './portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { projects } from "../../assets/userData.json";

export default function Portfolio() {

	const {ARTICLES_IMGS_DIR} = projects;

  return (
		<div className={s.portfolio}>
			{projects.articles.map((p, pKey) => (
				<article key={pKey}>
					<div className={s.imgContainer}>
						<img src={ARTICLES_IMGS_DIR + p.img} alt="" />
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