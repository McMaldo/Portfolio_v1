import React from "react";
import s from './contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {

	let contacts = [
		{icon:faEnvelope, name:"EMAIL", desc:"maldonado.ignacio.pablo@gmail.com"},
		{icon:faMobile, name:"PHONE", desc:"+54 911 3055-7307"},
		{icon:faCalendar, name:"BIRTRHDAY", desc:"December 24, 2005"},
		{icon:faLocationDot, name:"LOCATION", desc:"Buenos Aires, Argentina"}
	];

	return (
		<div className={s.contacts}>
			{contacts.map((c, cKey) => {
				let copyToClipboard = () => {
					navigator.clipboard.writeText(c.desc).then(() => {
						console.log('Texto copiado al portapapeles');
						alert('Texto copiado al portapapeles');
					})
					.catch((error) => {
						console.error('Error al copiar el texto: ', error);
					})
				}

				return (<div className={s.contactItem} key={cKey} onClick={copyToClipboard}>
					<span><FontAwesomeIcon icon={c.icon}/></span>
					<div className={s.content}>
						<div>{c.name}</div>
						<div className={s.text}>{c.desc}</div>
					</div>
				</div>
			)})}
		</div>
	)
}