import React, { useState, lazy, Suspense } from "react";
import './mainPage.css';
import { useLocalStorage, useWindowSize } from "@uidotdev/usehooks";
import userData from "../../assets/userData.json";

import SkillSet from "../../component/skillSet/SkillSet";
import Projects from "../../component/projects/Projects";
import AboutMe from "../../component/aboutMe/AboutMe";
import Footer from '../../component/footer/Footer';
import BgDots from "../../component/bgDots/BgDots";

const Hobbies = lazy(() => import('../../component/hobbies/Hobbies'));
import Loading from '../../component/loading/Loading';

export default function Main() {

	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
    let [isHobbiesSectionVisible, setHobbiesSectionVisible] = useState(false);
	const { width } = useWindowSize();

	return (
		<>
			<nav>
				<button onClick={() => document.querySelector(`#SkillSet`).scrollIntoView({behavior: 'smooth'})}>
					{isTranslatedToEnglish? "Skill Set" : "Habilidades"}
				</button>
				<button onClick={() => document.querySelector(`#Projects`).scrollIntoView({behavior: 'smooth'})}>
					{isTranslatedToEnglish? "Projects" : "Proyectos"}
				</button>
				<button onClick={() => document.querySelector(`#AboutMe`).scrollIntoView({behavior: 'smooth'})}>
					{isTranslatedToEnglish? "About Me" : "Sobre Mí"}
				</button>
			</nav>
			{width > 750 && <BgDots/>}
			<div className="mainScroll">
				<header>
					<div className='heading'>
						<h1>{isTranslatedToEnglish? userData.heading.h1.en : userData.heading.h1.es}</h1>
						<div className='extras'>
							{userData.heading.subtitle.map((s, sKey) => (
								<span key={sKey}>{isTranslatedToEnglish? s.en : s.es}</span>
							))}
						</div>
					</div>
				</header>
				<section className="mainContent">
					<h3 id="SkillSet">{isTranslatedToEnglish? "Skill Set" : "Habilidades"}</h3>
					<SkillSet/>
					<h3 id="Projects">{isTranslatedToEnglish? "Projects" : "Proyectos"}</h3>
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
			</div>
		</>
	)
}