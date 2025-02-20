import React from "react";
import s from './skillSet.module.css';

export default function SkillSet() {
	const ICONS_DIR = "/Portfolio_v1/icons/";

	let skillTags = [
		{catName: "Front-end", skills: [
			{img:"CSS.svg", name:"CSS", desc: "Styling Lang"},
			{img:"React-Dark.svg", name:"React", desc: "JS Lib"},
			{img:"JavaScript.svg", name:"Java Script", desc: "Lang"},
			{img:"NodeJS-Dark.svg", name:"Node JS", desc: "JS Lib"},
			{img:"Bootstrap.svg", name:"Bootstrap", desc: "Styling Lib"},
			{img:"MaterialUI-Dark.svg", name:"Material UI", desc: "React Lib"},
			{img:"TailwindCSS-Dark.svg", name:"Tailwind CSS", desc: "Styling Lib"},
			{img:"AntDesign.svg", name:"Ant Design", desc: "Component Lib"}
		]},
		{catName: "Back-end", skills: [
			{img:"PHP-Dark.svg", name:"PHP", desc: "Lang"},
			{img:"Python-Dark.svg", name:"Python", desc: "Lang"},
			{img:"Bash-Dark.svg", name:"Bash", desc: "Lang"},
			{img:"ExpressJS-Dark.svg", name:"Express JS", desc: "JS Lib"}
		]},
		{catName: "General Tools", skills: [
			{img:"Git.svg", name:"Git", desc: "Version Control"},
			{img:"Figma-Dark.svg", name:"Figma", desc: "Design Tool"},
			{img:"Notion-Dark.svg", name:"Notion", desc: "Organization Tool"},
			{img:"Trello.svg", name:"Trello", desc: "Organization Tool"},
			{img:"SpanishFlag.webp", name:"Spanish", desc: "Native Lang"},
			{img:"EnglishFlag.webp", name:"English", desc: "Second Lang"}
		]}
	];

  return (
		<div className={s.skillSet}>
			{skillTags.map((cat, catKey) => (
				<div key={catKey}>
					<h4>{cat.catName}</h4>
					<div className={s.tagSlider}>
						{cat.skills.map((skill, skillKey) => (
							<div className={s.skillTag} key={skillKey}>
								<img src={ICONS_DIR + skill.img} alt="" />
								<div className={s.name}>{skill.name}</div>
								<div className={s.desc}>{skill.desc}</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
  )
}