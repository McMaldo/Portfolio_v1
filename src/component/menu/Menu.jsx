import { useState } from "react";
import s from "./menu.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {

    let [isExpanded, setExpanded] = useState(false);

    return(
        <div className={s.menu+" "+(isExpanded && s.expanded)}>
            {isExpanded && (<>
                <button><FontAwesomeIcon icon={faPenToSquare}/></button>
                <button><FontAwesomeIcon icon={faMoon}/></button>
            </>)}
            <button onClick={() => setExpanded(!isExpanded)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </div>
    );
}