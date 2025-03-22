import { useState } from "react";
import s from './skillSet.module.css';
import { useTheme } from "../../hook/useTheme";
import userData from "../../assets/userData.json";
import SkillTagMore from "../skillTagDesc/SkillTagMore";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function SkillTag({skill}) {
	let {theme} = useTheme();
	const [mostrarComponente, setMostrarComponente] = useState(false);
	
	return(
		skill.more?
		<div className={s.skillTag+" "+s.skillTagMore}
			onMouseEnter={() => setMostrarComponente(true)}
			onMouseLeave={() => setMostrarComponente(false)}
		>
			<img src={userData.SKILLTAGS_ICONS_DIR + (theme=="dark"? skill.img : skill.img.replace(/-Dark/g, "-Light"))} alt="" />
			<div className={s.name}>{skill.name}</div>
			<div className={s.desc}>{skill.desc}</div>
			
			{mostrarComponente? <SkillTagMore skillMore={skill.more} /> : ""}
		</div>
		:
		<div className={s.skillTag}>
			<img src={userData.SKILLTAGS_ICONS_DIR + (theme=="dark"? skill.img : skill.img.replace(/-Dark/g, "-Light"))} alt="" />
			<div className={s.name}>{skill.name}</div>
			<div className={s.desc}>{skill.desc}</div>
		</div>
	)
}
function SkillTagsCategory({cat, index}) {
	const [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	const [isExpanded, setExpanded] = useState(index < 3);
	
	const toggleExpanded = () => {
		setExpanded((prevState) => {
		const newState = !prevState; // Calcula el nuevo estado
		return newState; // Devuelve el nuevo estado
		});
	};
	
	return (
		<details open={isExpanded}>
		<summary
			onClick={(e) => {
				e.preventDefault();
				toggleExpanded();
			}}
		>
			<FontAwesomeIcon icon={faCaretRight} className={isExpanded ? s.expanded : ""} />
			<h4>{cat.catName}</h4>
		</summary>
		{cat.catName === "Programming Concepts" || cat.catName === "Soft Skills" ? (
			<div className={s.tagSliderSimple}>
			{cat.skills.map((skill, skillKey) => (
				<div className={s.skillTagSimple} key={skillKey}>
					{isTranslatedToEnglish ? skill.en : skill.es}
				</div>
			))}
			</div>
		) : (
			<div className={s.tagSlider}>
			{cat.skills.map((skill, skillKey) => (
				<SkillTag skill={skill} key={skillKey} />
			))}
			</div>
		)}
		</details>
	);
}
	

export default function SkillSet() {
	return (
		<div className={s.skillSet}>
			{userData.skillTags.map((cat, catKey) => (
				<SkillTagsCategory cat={cat} index={catKey}	key={catKey}/>
			))}
		</div>
	);
}