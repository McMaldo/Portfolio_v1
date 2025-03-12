import { useState } from "react";
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faPenToSquare, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';

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
    let [isOpenedCustomPanel, setOpenedCustomPanel] = useState(false)
    let [isDarkMode, setDarkMode] = useLocalStorage("darkMode", true);
    let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

    return(
        <div className={s.menu+" "+(isOpenedCustomPanel && s.openedCustomPanel)}>
            {isExpanded && (<>
                <button
                    onMouseEnter={() => setOpenedCustomPanel(true)}
                    onMouseLeave={() => setOpenedCustomPanel(false)}
                    onClick={() => setOpenedCustomPanel(!isOpenedCustomPanel)}
                >
                    {isOpenedCustomPanel && <CustomPanel/>}
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </button>
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