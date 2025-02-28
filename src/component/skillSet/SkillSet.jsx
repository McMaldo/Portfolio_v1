import { useState } from "react";
import s from './skillSet.module.css';
import userData from "../../assets/userData.json";
import SkillTagMore from "../skillTagDesc/SkillTagMore";

export default function SkillSet() {

  return (
		<div className={s.skillSet}>
			{userData.skillTags.map((cat, catKey) => (
				<div key={catKey}>
					<h4>{cat.catName}</h4>
					<div className={s.tagSlider}>
						{cat.skills.map((skill, skillKey) => {
							const [mostrarComponente, setMostrarComponente] = useState(false);
							
							return(
								<div className={s.skillTag+" "+(skill.more && s.skillTagMore)} key={skillKey}
									onMouseEnter={() => setMostrarComponente(true)}
									onMouseLeave={() => setMostrarComponente(false)}
								>
									<img src={userData.SKILLTAGS_ICONS_DIR + skill.img} alt="" />
									<div className={s.name}>{skill.name}</div>
									<div className={s.desc}>{skill.desc}</div>
									
									{(mostrarComponente && skill.more) ? <SkillTagMore skillMore={skill.more} /> : ""}
								</div>
							)
						})}
					</div>
				</div>
			))}
		</div>
  )
}