import React from "react";
import s from './skillSet.module.css';

export default function SkillSet() {
  return (
		<div className={s.skillSet}>
			<h4>Front-end</h4>
			<div className={s.tagSlider}>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/CSS.svg" alt="" />
					<div className={s.name}>CSS</div>
					<div className={s.desc}>Styling Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/React-Dark.svg" alt="" />
					<div className={s.name}>React</div>
					<div className={s.desc}>JS Lib</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/JavaScript.svg" alt="" />
					<div className={s.name}>Java Script</div>
					<div className={s.desc}>Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/NodeJS-Dark.svg" alt="" />
					<div className={s.name}>Node JS</div>
					<div className={s.desc}>JS Lib</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Bootstrap.svg" alt="" />
					<div className={s.name}>Bootstrap</div>
					<div className={s.desc}>Styling Lib</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/MaterialUI-Dark.svg" alt="" />
					<div className={s.name}>Material UI</div>
					<div className={s.desc}>React Lib</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/TailwindCSS-Dark.svg" alt="" />
					<div className={s.name}>Tailwind</div>
					<div className={s.desc}>Styling Lib</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/AntDesign.svg" alt="" />
					<div className={s.name}>Ant Design</div>
					<div className={s.desc}>Component Lib</div>
				</div>
			</div>
			<h4>Back-end</h4>
			<div className={s.tagSlider}>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/PHP-Dark.svg" alt="" />
					<div className={s.name}>PHP</div>
					<div className={s.desc}>Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Python-Dark.svg" alt="" />
					<div className={s.name}>Python</div>
					<div className={s.desc}>Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Bash-Dark.svg" alt="" />
					<div className={s.name}>Bash</div>
					<div className={s.desc}>Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/ExpressJS-Dark.svg" alt="" />
					<div className={s.name}>Express</div>
					<div className={s.desc}>JS Lib</div>
				</div>
			</div>
			<h4>General Tools</h4>
			<div className={s.tagSlider}>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Git.svg" alt="" />
					<div className={s.name}>Git</div>
					<div className={s.desc}>Version Control</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Figma-Dark.svg" alt="" />
					<div className={s.name}>Figma</div>
					<div className={s.desc}>Design Tool</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Notion-Dark.svg" alt="" />
					<div className={s.name}>Notion</div>
					<div className={s.desc}>Organization Tool</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Trello.svg" alt="" />
					<div className={s.name}>Trello</div>
					<div className={s.desc}>Organization Tool</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/SpanishFlag.webp" alt="" />
					<div className={s.name}>Spanish</div>
					<div className={s.desc}>Native Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/EnglishFlag.webp" alt="" />
					<div className={s.name}>English</div>
					<div className={s.desc}>Second Lang</div>
				</div>
				<div className={s.skillTag}>
					<img src="/Portfolio_v1/icons/Monday.png" alt="" />
					<div className={s.name}>Monday</div>
					<div className={s.desc}>Organization Tool</div>
				</div>
			</div>
		</div>
  )
}