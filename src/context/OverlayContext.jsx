import { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {

	const [isOverlayOpened, setOverlayOpened] = useState(false);
	const [pdfName, setPdfName] = useState("");
	let openPdfPreview = (pdfName) => {
		setPdfName(pdfName);
		setOverlayOpened(true);
		return 0;
	};

	return (
		<OverlayContext.Provider value={{isOverlayOpened, setOverlayOpened, pdfName, openPdfPreview}}>
			{children}
		</OverlayContext.Provider>
	);
}

export const useOverlay = () => {
	const context = useContext(OverlayContext);
	if (!context) {
		throw new Error("useOverlay must be used within an OverlayProvider");
	}
	return context;
};