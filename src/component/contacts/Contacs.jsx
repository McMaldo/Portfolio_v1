import { useState } from "react";
import s from './contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faCalendar, faLocationDot, faClone, faCheck } from '@fortawesome/free-solid-svg-icons';

function ContactItem({contact: c}) {

	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = (textToCopy) => {
		navigator.clipboard.writeText(textToCopy).then(() => {
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		})
		.catch((error) => {
			console.error('Error al copiar el texto: ', error);
		})
	}

	return (
		<div className={s.contactItem} onClick={() => copyToClipboard(c.desc)}>
			<span><FontAwesomeIcon icon={c.icon}/></span>
			<div className={s.content}>
				<div>{c.name}</div>
				<div className={s.text}>{c.desc}</div>
			</div>
			<div className={s.isCopied}>
				<FontAwesomeIcon icon={isCopied? faCheck : faClone}/>
			</div>
		</div>
	)
}

export default function Contacts() {

	let contacts = [
		{icon:faEnvelope, name:"EMAIL", desc:"maldonado.ignacio.pablo@gmail.com"},
		{icon:faMobile, name:"PHONE", desc:"+54 911 3055-7307"},
		{icon:faCalendar, name:"BIRTRHDAY", desc:"December 24, 2005"},
		{icon:faLocationDot, name:"LOCATION", desc:"Buenos Aires, Argentina"}
	];

	return (
		<div className={s.contacts}>
			{contacts.map((c, cKey) => (
				<ContactItem contact={c} key={cKey}/>
			))}
		</div>
	)
}