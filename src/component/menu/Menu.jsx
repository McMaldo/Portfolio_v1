import { useState } from "react";
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCake, faMoon, faPenToSquare, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../hook/useTheme";

function extractCssVarValue(cssVar) {
	let portfolio = document.querySelector("#root .portfolio");
	let portfolioStyles = getComputedStyle(portfolio);
	return portfolioStyles.getPropertyValue(cssVar);
}

function PalettePanel(){
	let palette = ["main", "font", "bg"];
	return(
		<div className={s.palettePanel}>
			{palette.map((paletteColor, paletteColorKey) => (
				<div className={s.option} key={paletteColorKey}>
					<div className={s.desc}>{paletteColor}</div>
					<div className={s.value}>{extractCssVarValue(`--${paletteColor}-color`)}</div>
					<div className={s.preview}>
						<div style={{background: `var(--${paletteColor}-color)`}}></div>
					</div>
				</div>
			))}
		</div>
	)
}

export default function Menu() {

	let [isExpanded, setExpanded] = useState(true);
	let [isOpenedPalettePanel, setOpenedPalettePanel] = useState(false);

	let { theme, setTheme } = useTheme();
	let themeIcons = {
		dark: faMoon,
		light: faSun,
		pinky: faCake
	}

	let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return(
		<div className={s.menu+" "+(isOpenedPalettePanel && s.openedPalettePanel)}>
			{isExpanded && (<>
				<button
					onMouseEnter={() => setOpenedPalettePanel(true)}
					onMouseLeave={() => setOpenedPalettePanel(false)}
				>
					{isOpenedPalettePanel && <PalettePanel/>}
					<span onClick={() => setOpenedPalettePanel(!isOpenedPalettePanel)}>
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