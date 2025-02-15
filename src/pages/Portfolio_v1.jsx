import React from "react";
import './portfolio_v1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import SkillSet from "../component/skillSet/SkillSet";

export default function Portfolio_v1() {
  return (
    <div className='portfolio'>
      <section className='left'>
        <div className="leftContent">
          <div className="avatar"></div>
          <h2>McMaldo</h2>
          <h5>Front-end Developer</h5>
          <div className="accounts">
            <a href="https://github.com/McMaldo"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://gitlab.com/maldonado.ignacio.pablo"><FontAwesomeIcon icon={faGitlab} /></a>
            <a href="https://www.linkedin.com/in/pablo-ignacio-maldonado"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://dev.to/mcmaldo"><FontAwesomeIcon icon={faDev} /></a>
          </div>
          <div className="contacts">
            <div className="contactItem">
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              <div className="content">
                <div>EMAIL</div>
                <div className="text">maldonado.ignacio.pablo@gmail.com</div>
              </div>
            </div>
            <div className="contactItem">
              <span><FontAwesomeIcon icon={faMobile} /></span>
              <div className="content">
                <div>PHONE</div>
                <div className="text">+54 911 3055-7307</div>
              </div>
            </div>
            <div className="contactItem">
              <span><FontAwesomeIcon icon={faCalendar} /></span>
              <div className="content">
                <div>BIRTRHDAY</div>
                <div className="text">December 24, 2005</div>
              </div>
            </div>
            <div className="contactItem">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <div className="content">
                <div>LOCATION</div>
                <div className="text">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>
          <h3>About Me</h3>
          <p className="aboutMe">
            Técnico en Informática Personal y Profesional, programando desde los 15 años, con una gran
            afinidad por el desarrollo Front-end y el Diseño Web.
          </p>
          <p className="aboutMe">
            A su vez con mucha práctica en Back-end y Bases de Datos para la Web.
          </p>
        </div>
      </section>
      <section className='right'>
          <header>
            <div className='heading'>
              <h1 className='gradient'>Web Developer</h1>
              <div className='extras gradient'>
                <span>Front-end</span>
                <span>Back-end</span>
                <span>Design</span>
              </div>
            </div>
            <nav>
              <button>SkillSet</button>
              <button>Portfolio</button>
              <button>Contact</button>
            </nav>
          </header>
          <main>
            <h3>Skill Set</h3>
            <SkillSet/>
          </main>
      </section>
    </div>
  )
}