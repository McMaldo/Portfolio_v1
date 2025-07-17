import s from './pdfPreview.module.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useOverlay } from '../../context/OverlayContext';

const PdfPreview = () => {

	let {pdfName, isOverlayOpened, setOverlayOpened} = useOverlay();
	let pdfUrl = `/Portfolio_v1/certificates/${pdfName}.pdf`;
	
	return (
		!isOverlayOpened? "" :
		<div className={s.overlay}>
			<div className={s.options}>
				<a href={pdfUrl} target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare}/></a>
				<a href={pdfUrl} download={"MaldonadoPablo_"+pdfName}><FontAwesomeIcon icon={faDownload}/></a>
				<FontAwesomeIcon icon={faXmark} onClick={() => setOverlayOpened(false)}/>
			</div>
			<div className={s.pdfBox}>
				<Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
					<Viewer fileUrl={pdfUrl} />
				</Worker>
			</div>
		</div>
	);
};

export default PdfPreview;