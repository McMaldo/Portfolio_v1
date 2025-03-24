import { useState } from "react";
import s from './contacts.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faCalendar, faLocationDot, faClone, faCheck } from '@fortawesome/free-solid-svg-icons';

function ContactItem({contact: c}) {

	const [isCopied, setIsCopied] = useState(false);
	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

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
				<div>{isTranslatedToEnglish? c.name.en : c.name.es}</div>
				<div className={s.text}>{c.desc.en? (isTranslatedToEnglish? c.desc.en : c.desc.es) : c.desc}</div>
			</div>
			<div className={s.isCopied}>
				<FontAwesomeIcon icon={isCopied? faCheck : faClone}/>
			</div>
		</div>
	)
}

export default function Contacts() {

	let contacts = [
		{icon:faEnvelope, name:{en: "EMAIL", es: "EMAIL"}, desc:"maldonado.ignacio.pablo@gmail.com"},
		{icon:faMobile, name:{en: "PHONE", es: "TELEFONO"}, desc:"+54 911 3055-7307"},
		{icon:faCalendar, name:{en: "BIRTRHDAY", es: "NACIMIENTO"}, desc:{en: "December 24, 2005", es: "24 de Diciembre, 2005"}},
		{icon:faLocationDot, name:{en: "LOCATION", es: "LOCACIÓN"}, desc:"Buenos Aires, Argentina"}
	];

	return (
		<div className={s.contacts}>
			{contacts.map((c, cKey) => (
				<ContactItem contact={c} key={cKey}/>
			))}
		</div>
	)
}