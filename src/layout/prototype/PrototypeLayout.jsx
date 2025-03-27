import React from "react";
import { Outlet } from "react-router-dom";
import './prototypeLayout.css';
import { useWindowSize, useLocalStorage } from "@uidotdev/usehooks";
import { useTheme } from "../../hook/useTheme";
import userData from "../../assets/userData.json";

import Accounts from "../../component/accounts/Accounts";
import Contacts from "../../component/contacts/Contacs";
import Menu from '../../component/menu/Menu';

export default function Prototype() {

	let size = useWindowSize();
	let {theme} = useTheme();
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return (
		<div className="body" data-theme={theme? theme : "dark"}>
			<div className='portfolio'>
				<aside>
					<div className="asideContent">
						<div className="avatar">
							<img src="/Portfolio_v1/img/avatar-dark.webp" className={theme=="dark"? "active" : ""}/>
							<img src="/Portfolio_v1/img/avatar-light.webp" className={theme=="dark"? "" : "active"}/>
						</div>
						<div className="infoTags">
							<h2>{userData.name}</h2>
							<h5>{isTranslatedToEnglish? userData.focusedOn.en : userData.focusedOn.es}</h5>
							<div className="spkLangs">
								<div className="spkLangTag" title="Native Lang">
									<div>{isTranslatedToEnglish? "Spanish" : "Español"}</div>
									<img src="/Portfolio_v1/icons/SpanishFlag.webp" alt=""/>
								</div>
								<div className="spkLangTag" title="Second Lang">
									<img src="/Portfolio_v1/icons/EnglishFlag.webp" alt=""/>
									<div>{isTranslatedToEnglish? "English" : "Inglés"}</div>
								</div>
							</div>
							{size.width < 750 && <Accounts/>}
						</div>
						<Contacts/>
						{size.width >= 750 && <Accounts/>}
					</div>
				</aside>
				<main>
					<Outlet/>
				</main>
				<Menu/>
			</div>
		</div>
	)
}