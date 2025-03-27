import React from "react";
import './mainPage.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import userData from "../../assets/userData.json";

import SkillSet from "../../component/skillSet/SkillSet";
import Projects from "../../component/projects/Projects";
import AboutMe from "../../component/aboutMe/AboutMe";
import Hobbies from "../../component/hobbies/Hobbies";
import Footer from '../../component/footer/Footer';

export default function Main() {

	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return (
		<>
			<header>
				<div className='heading'>
					<h1 className='gradient'>{isTranslatedToEnglish? userData.heading.h1.en : userData.heading.h1.es}</h1>
					<div className='extras gradient'>
						{userData.heading.subtitle.map((s, sKey) => (
							<span key={sKey}>{isTranslatedToEnglish? s.en : s.es}</span>
						))}
					</div>
				</div>
				<nav>
					<button onClick={() => document.querySelector(`#SkillSet`).scrollIntoView({behavior: 'smooth'})}>
						{isTranslatedToEnglish? "Skill Set" : "Habilidades"}
					</button>
					<button onClick={() => document.querySelector(`#Portfolio`).scrollIntoView({behavior: 'smooth'})}>
						{isTranslatedToEnglish? "Portfolio" : "Portafolio"}
					</button>
					<button onClick={() => document.querySelector(`#AboutMe`).scrollIntoView({behavior: 'smooth'})}>
						{isTranslatedToEnglish? "About Me" : "Sobre Mí"}
					</button>
				</nav>
			</header>
			<section className="mainContent">
				<h3 id="SkillSet">{isTranslatedToEnglish? "Skill Set" : "Habilidades"}</h3>
				<SkillSet/>
				<h3 id="Portfolio">{isTranslatedToEnglish? "Portfolio" : "Portafolio"}</h3>
				<Projects/>
				<h3 id="AboutMe">{isTranslatedToEnglish? "About Me" : "Sobre Mí"}</h3>
				<AboutMe/>
				<Hobbies/>
			</section>
			<Footer/>
		</>
	)
}