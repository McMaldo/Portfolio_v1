import React from "react";
import s from './skillTagMore.module.css';
import userData from "../../assets/userData.json";

export default function SkillTagMore({skillMore}) {
  return (
		<div className={s.skillTagMore}>
			<h5>Related</h5>
			{skillMore.map((skill, skillKey) => (
				<div className={s.skillTag} key={skillKey}>
					<img src={userData.SKILLTAGS_ICONS_DIR + skill.img} alt="" />
					<div className={s.name}>{skill.name}</div>
					<div className={s.desc}>{skill.desc}</div>
				</div>
			))}
		</div>
  )
}