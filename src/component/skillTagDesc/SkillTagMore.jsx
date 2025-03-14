import React from "react";
import s from './skillTagMore.module.css';
import { useTheme } from "../../hook/useTheme";
import userData from "../../assets/userData.json";

export default function SkillTagMore({skillMore}) {

	let {theme} = useTheme();

	return (
		<div className={s.skillTagMore}>
			<h5>Related</h5>
			{skillMore.map((skill, skillKey) => (
				<div className={s.skillTag} key={skillKey}>
					<img src={userData.SKILLTAGS_ICONS_DIR + (theme=="dark"? skill.img : skill.img.replace(/-Dark/g, "-Light"))} alt="" />
					<div className={s.name}>{skill.name}</div>
					<div className={s.desc}>{skill.desc}</div>
				</div>
			))}
		</div>
  )
}