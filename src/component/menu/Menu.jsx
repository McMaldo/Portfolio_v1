import { useState } from "react";
import PropTypes from 'prop-types';
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCake, faMoon, faPalette, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../hook/useTheme";

const extractCssVarValue = (cssVar) => {
    const portfolio = document.querySelector("#root .portfolio");
    const portfolioStyles = getComputedStyle(portfolio);
    return portfolioStyles.getPropertyValue(cssVar);
};

const SelectorPanel = ({ children }) => (
    <div className={s.selectorPanel}>
        {children}
        <div className={s.conector} />
    </div>
);

SelectorPanel.propTypes = {
    children: PropTypes.node.isRequired,
};

const PalettePanel = () => {
    const palette = ["main", "font", "bg"];

    return (
        <SelectorPanel>
            {palette.map((color) => (
                <div className={s.option} key={color}>
                    <div className={s.desc}>{color}</div>
                    <div className={s.value}>{extractCssVarValue(`--${color}-color`)}</div>
                    <div className={s.preview}>
                        <div style={{background: `var(--${color}-color)`}} />
                    </div>
                </div>
            ))}
        </SelectorPanel>
    );
};

const ThemePanel = ({ themeIcons }) => {
    const themeList = ["dark", "light", "pinky"];
    const { theme, setTheme } = useTheme();

    return (
        <SelectorPanel>
            {themeList.map((themeOption, index) => (
                <div 
                    className={`${s.option} ${theme === themeOption ? s.selected : ""}`}
                    onClick={() => setTheme(index)}
                    key={themeOption}
                >
                    <div className={s.value}>
                        <FontAwesomeIcon icon={themeIcons[themeOption]} />
                        <span>{themeOption}</span>
                    </div>
                    <div className={s.preview} data-theme={themeOption} style={{background: `var(--bg)`}}>
                        <div style={{background: `var(--main-color)`}} />
                    </div>
                </div>
            ))}
        </SelectorPanel>
    );
};

ThemePanel.propTypes = {
    themeIcons: PropTypes.objectOf(PropTypes.object).isRequired,
};

const LangPanel = () => {
    const [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
    const languages = [
        { lang: "Español", icon: "SpanishFlag.webp" },
        { lang: "English", icon: "EnglishFlag.webp" }
    ];

    return (
        <SelectorPanel>
            {languages.map(({ lang, icon }) => (
                <div 
                    className={`${s.option} ${(isTranslatedToEnglish && lang === "English") || (!isTranslatedToEnglish && lang === "Español") ? s.selected : ""}`}
                    onClick={() => setTranslatedToEnglish(lang === "English")}
                    key={lang}
                >
                    <div className={s.value}>
                        <img src={`/Portfolio_v1/icons/${icon}`} alt={lang} />
                        <span>{lang}</span>
                    </div>
                </div>
            ))}
        </SelectorPanel>
    );
};

const MenuButton = ({ children, title, onClick }) => (
    <button onClick={onClick} title={title}>
        {children}
    </button>
);

MenuButton.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

const Menu = () => {
    const [isExpanded, setExpanded] = useState(true);
    const [panelOpened, setPanelOpened] = useState("");
    const { theme, setTheme } = useTheme();
    const [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

    const themeIcons = {
        dark: faMoon,
        light: faSun,
        pinky: faCake
    };

    const handleMouseEnter = (panel) => setPanelOpened(panel);
    const handleMouseLeave = () => setPanelOpened("");

    return (
        <div className={`${s.menu} ${panelOpened === "palette" ? s.openedTopPanel : ""}`}>
            {isExpanded && (
                <>
                    <div 
                        className={s.btnContainer}
                        onMouseEnter={() => handleMouseEnter("palette")}
                        onMouseLeave={handleMouseLeave}
                    >
                        {panelOpened === "palette" && <PalettePanel />}
                        <MenuButton onClick={handleMouseLeave}>
                            <FontAwesomeIcon icon={faPalette} />
                        </MenuButton>
                    </div>
                    <div 
                        className={s.btnContainer}
                        onMouseEnter={() => handleMouseEnter("theme")}
                        onMouseLeave={handleMouseLeave}
                    >
                        {panelOpened === "theme" && <ThemePanel themeIcons={themeIcons} />}
                        <MenuButton 
                            onClick={setTheme}
                            title={isTranslatedToEnglish ? "Switch Theme" : "Cambiar Tema"}
                        >
                            <FontAwesomeIcon icon={themeIcons[theme]} />
                        </MenuButton>
                    </div>
                    <div 
                        className={s.btnContainer}
                        onMouseEnter={() => handleMouseEnter("lang")}
                        onMouseLeave={handleMouseLeave}
                    >
                        {panelOpened === "lang" && <LangPanel />}
                        <MenuButton
                            onClick={() => setTranslatedToEnglish(!isTranslatedToEnglish)}
                            title={isTranslatedToEnglish ? "Cambiar a Español / Switch to Spanish" : "Switch to English / Cambiar a Inglés"}
                        >
                            {isTranslatedToEnglish ? "EN" : "ES"}
                        </MenuButton>
                    </div>
                </>
            )}
            <button 
                className={isExpanded ? s.close : ""}
                onClick={() => setExpanded(!isExpanded)}
            >
                <FontAwesomeIcon icon={isExpanded ? faXmark : faBars} />
            </button>
        </div>
    );
};

export default Menu;