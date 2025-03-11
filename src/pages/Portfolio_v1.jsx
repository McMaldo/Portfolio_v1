import React from "react";
import './portfolio_v1.css';
import { useWindowSize, useLocalStorage } from "@uidotdev/usehooks";
import userData from "../assets/userData.json";

import Accounts from "../component/accounts/Accounts";
import Contacts from "../component/contacts/Contacs";
import SkillSet from "../component/skillSet/SkillSet";
import Portfolio from "../component/portfolio/Portfolio";
import AboutMe from "../component/aboutMe/AboutMe";
import Hobbies from "../component/hobbies/Hobbies";
import Footer from '../component/footer/Footer';
import Menu from '../component/menu/Menu';

export default function Portfolio_v1() {

  let size = useWindowSize();
  let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

  return (
    <div className='portfolio'>
      <section className='left'>
        <div className="leftContent">
          <img src="/Portfolio_v1/img/avatar.webp" className="avatar"/>
          <div className="infoTags">
            <h2>{userData.name}</h2>
            <h5>{userData.focusedOn}</h5>
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
      </section>
      <section className='right'>
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
              {isTranslatedToEnglish? "About Me" : "Sobre Mi"}
            </button>
          </nav>
        </header>
        <main>
          <h3 id="SkillSet">{isTranslatedToEnglish? "Skill Set" : "Habilidades"}</h3>
          <SkillSet/>
          <h3 id="Portfolio">{isTranslatedToEnglish? "Portfolio" : "Portafolio"}</h3>
          <Portfolio/>
          <h3 id="AboutMe">{isTranslatedToEnglish? "About Me" : "Sobre Mi"}</h3>
          <AboutMe/>
          <Hobbies/>
        </main>
        <Footer/>
      </section>
      <Menu/>
    </div>
  )
}