import React from "react";
import './portfolio_v1.css';
import { useWindowSize, useLocalStorage } from "@uidotdev/usehooks";
import { useTheme } from "../../hook/useTheme";
import userData from "../../assets/userData.json";

import Accounts from "../../component/accounts/Accounts";
import Contacts from "../../component/contacts/Contacs";
import SkillSet from "../../component/skillSet/SkillSet";
import Projects from "../../component/projects/Projects";
import AboutMe from "../../component/aboutMe/AboutMe";
import Hobbies from "../../component/hobbies/Hobbies";
import Footer from '../../component/footer/Footer';
import Menu from '../../component/menu/Menu';

export default function Portfolio_v1() {

	let size = useWindowSize();
	let {theme} = useTheme();
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return (
		<div className="body" data-theme={theme? theme : "dark"}>
			<div className='portfolio'>
				<aside>
					<div className="asideContent">
						<div className="avatar">
							<img src="/Portfolio_v1/img/avatar-dark.webp" className={theme=="dark"? "active" : ""}/>
							<img src="/Portfolio_v1/img/avatar-light.webp" className={theme=="dark"? "" : "active"}/>
						</div>
						<div className="infoTags">
							<h2>{userData.name}</h2>
							<h5>{isTranslatedToEnglish? userData.focusedOn.en : userData.focusedOn.es}</h5>
							<div className="spkLangs">
								<div className="spkLangTag" title="Native Lang">
									<div>{isTranslatedToEnglish? "Spanish" : "Español"}</div>
									<img src="/Portfolio_v1/icons/SpanishFlag.webp" alt=""/>
								</div>
								<div className="spkLangTag" title="Second Lang">
									<img src="/Portfolio_v1/icons/EnglishFlag.webp" alt=""/>
									<div>{isTranslatedToEnglish? "English" : "Inglés"}</div>
								</div>
							</div>
							{size.width < 750 && <Accounts/>}
						</div>
						<Contacts/>
						{size.width >= 750 && <Accounts/>}
					</div>
				</aside>
				<main>
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
				</main>
				<Menu/>
			</div>
		</div>
	)
}