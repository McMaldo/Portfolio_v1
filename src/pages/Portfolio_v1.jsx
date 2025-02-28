import React from "react";
import './portfolio_v1.css';
import { useWindowSize } from "@uidotdev/usehooks";
import userData from "../assets/userData.json";

import Accounts from "../component/accounts/Accounts";
import Contacts from "../component/contacts/Contacs";
import AboutMe from "../component/aboutMe/AboutMe";
import SkillSet from "../component/skillSet/SkillSet";
import Portfolio from "../component/portfolio/Portfolio";
import Footer from '../component/footer/Footer';

export default function Portfolio_v1() {

  let size = useWindowSize();

  return (
    <div className='portfolio'>
      <section className='left'>
        <div className="leftContent">
          <img src="/Portfolio_v1/img/McMaldo.jpg" className="avatar"/>
          <div className="infoTags">
            <h2>{userData.name}</h2>
            <h5>{userData.focusedOn}</h5>
            <div className="spkLangs">
              <div className="spkLangTag">
                <h5>Spanish</h5>
                <img src="/Portfolio_v1/icons/SpanishFlag.webp" alt=""/>
              </div>
              <div className="spkLangTag">
                <img src="/Portfolio_v1/icons/EnglishFlag.webp" alt=""/>
                <h5>English</h5>
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
            <h1 className='gradient'>{userData.heading.h1}</h1>
            <div className='extras gradient'>
              {userData.heading.subtitle.map((s, sKey) => (
                <span key={sKey}>{s}</span>
              ))}
            </div>
          </div>
          <nav>
            <button onClick={() => document.querySelector(`#SkillSet`).scrollIntoView({behavior: 'smooth'})}>Skill Set</button>
            <button onClick={() => document.querySelector(`#Portfolio`).scrollIntoView({behavior: 'smooth'})}>Portfolio</button>
            <button onClick={() => document.querySelector(`#AboutMe`).scrollIntoView({behavior: 'smooth'})}>About Me</button>
          </nav>
        </header>
        <main>
          <h3 id="SkillSet">Skill Set</h3>
          <SkillSet/>
          <h3 id="Portfolio">Portfolio</h3>
          <Portfolio/>
          <h3 id="AboutMe">About Me</h3>
          <AboutMe/>
        </main>
        <Footer/>
      </section>
    </div>
  )
}