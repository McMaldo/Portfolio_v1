import React, { useRef, useEffect, useState } from "react";
import "./bgDots.css";
import MouseFollower from "../MouseFollower/MouseFollower";

const BgDots = () => {
	const containerRef = useRef(null);
	const [divCount, setDivCount] = useState(0);
	const divArea = 20 * 20;

	useEffect(() => {
		if (!containerRef.current) return;

		const updateDivCount = () => {
			const { width, height } = containerRef.current.getBoundingClientRect();
			const containerArea = width * (height + 20);
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
		<div className="bgDotsContainer">
			<div className="bgDots" ref={containerRef}>
				{divs}
			</div>
			<MouseFollower zIndex={0}/>
		</div>
	);
};

export default BgDots;