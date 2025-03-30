import React, { useRef, useEffect, useState } from "react";
import "./bgDots.css";

const BgDots = () => {
	const containerRef = useRef(null);
	const [divCount, setDivCount] = useState(0);
	const divArea = 22 * 22;

	useEffect(() => {
		if (!containerRef.current) return;

		const updateDivCount = () => {
			const { width, height } = containerRef.current.getBoundingClientRect();
			const containerArea = width * (height + 18);
			const newDivCount = Math.ceil(containerArea / divArea);
			setDivCount(newDivCount);
		};

		updateDivCount();

		const resizeObserver = new ResizeObserver(updateDivCount);
		resizeObserver.observe(containerRef.current);

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

	const divs = Array.from({ length: divCount }, (_, index) => (
		<div key={index}></div>
	));

	return (
		<div className="bgDots" ref={containerRef}>
			{divs}
		</div>
	);
};

export default BgDots;