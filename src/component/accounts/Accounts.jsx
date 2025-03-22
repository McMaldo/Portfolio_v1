import React from "react";
import s from './accounts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faDev, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Accounts() {

	let contacts = [
		{name: "Github", icon:faGithub, link:"https://github.com/McMaldo"},
		{name: "Gitlab", icon:faGitlab, link:"https://gitlab.com/maldonado.ignacio.pablo"},
		{name: "LinkedIn", icon:faLinkedinIn, link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},
		{name: "DevTo", icon:faDev, link:"https://dev.to/mcmaldo"}
	];

	return (
		<div className={s.accounts}>
			{contacts.map((a, aKey) => (
				<a href={a.link} key={aKey} title={"My "+a.name}><FontAwesomeIcon icon={a.icon}/></a>
			))}
		</div>
	)
}