import { useState } from "react";
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCake, faMoon, faPenToSquare, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../hook/useTheme";

function CustomPanel(){
	return(
		<div className={s.customPanel}>
			<div className={s.option}>
				<div className={s.desc}>main</div>
				<div className={s.value}>#6F2CE3</div>
				<div className={s.preview} style={{background: "#6F2CE3"}}></div>
			</div>
			<div className={s.option}>
				<div className={s.desc}>font</div>
				<div className={s.value}>#ffffffde</div>
				<div className={s.preview} style={{background: "#ffffffde"}}></div>
			</div>
			<div className={s.option}>
				<div className={s.desc}>back</div>
				<div className={s.value}>#13131a</div>
				<div className={s.preview} style={{background: "#13131a"}}></div>
			</div>
		</div>
	)
}

export default function Menu() {

	let [isExpanded, setExpanded] = useState(false);
	let [isOpenedCustomPanel, setOpenedCustomPanel] = useState(false);

	let { theme, setTheme } = useTheme();
	let themeIcons = {
		dark: faMoon,
		light: faSun,
		pinky: faCake
	}

	let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return(
		<div className={s.menu+" "+(isOpenedCustomPanel && s.openedCustomPanel)}>
			{isExpanded && (<>
				<button
					onMouseEnter={() => setOpenedCustomPanel(true)}
					onMouseLeave={() => setOpenedCustomPanel(false)}
				>
					{isOpenedCustomPanel && <CustomPanel/>}
					<span onClick={() => setOpenedCustomPanel(!isOpenedCustomPanel)}>
						<FontAwesomeIcon icon={faPenToSquare}/>
					</span>
				</button>
				<button 
					onClick={() => setTheme()} 
					title={isTranslatedToEnglish? "Switch Theme" : "Cambiar Tema"}
				>
					<FontAwesomeIcon icon={themeIcons[theme]}/>
				</button>
				<button 
					onClick={() => setTranslatedToEnglish(!isTranslatedToEnglish)}
					title={isTranslatedToEnglish? "Cambiar a Español / Switch to Spanish" : "Switch to English / Cambiar a Inglés"}
				>
					{isTranslatedToEnglish? "EN" : "ES"}
				</button>
			</>)}
			<button className={isExpanded? s.close : ""} onClick={() => setExpanded(!isExpanded)}>
				<FontAwesomeIcon icon={isExpanded? faXmark : faBars}/>
			</button>
		</div>
	);
}