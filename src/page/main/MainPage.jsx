import React, { useState, lazy, Suspense } from "react";
import './mainPage.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import userData from "../../assets/userData.json";

import SkillSet from "../../component/skillSet/SkillSet";
import Projects from "../../component/projects/Projects";
import AboutMe from "../../component/aboutMe/AboutMe";
import Footer from '../../component/footer/Footer';

const Hobbies = lazy(() => import('../../component/hobbies/Hobbies'));
import Loading from '../../component/loading/Loading';

export default function Main() {

	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
    let [isHobbiesSectionVisible, setHobbiesSectionVisible] = useState(false);

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
				{
					!isHobbiesSectionVisible ?
					<button className="expand" onClick={() => setHobbiesSectionVisible(true)}>
						{isTranslatedToEnglish? "About My Hobbies" : "Acerca de Mis Pasatiempos"}
					</button>
					:
					<Suspense fallback={<Loading/>}>
						<Hobbies/>
					</Suspense>
				}
			</section>
			<Footer/>
		</>
	)
}