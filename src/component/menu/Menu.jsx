import { useState } from "react";
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faPenToSquare, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {

    let [isExpanded, setExpanded] = useState(false);
    let [isDarkMode, setDarkMode] = useLocalStorage("darkMode", true);
    let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

    return(
        <div className={s.menu+" "+(isExpanded && s.expanded)}>
            {isExpanded && (<>
                <button><FontAwesomeIcon icon={faPenToSquare}/></button>
                <button onClick={() => setDarkMode(!isDarkMode)}>
                    <FontAwesomeIcon icon={isDarkMode? faMoon : faSun}/>
                </button>
                <button onClick={() => setTranslatedToEnglish(!isTranslatedToEnglish)}>
                    {isTranslatedToEnglish? "EN" : "ES"}
                </button>
            </>)}
            <button className={isExpanded? s.close : ""} onClick={() => setExpanded(!isExpanded)}>
                <FontAwesomeIcon icon={isExpanded? faXmark : faBars}/>
            </button>
        </div>
    );
}