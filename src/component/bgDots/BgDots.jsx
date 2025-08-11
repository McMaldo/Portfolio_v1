import "./bgDots.css";
import MouseFollower from "../MouseFollower/MouseFollower";

const BgDots = () => {

	return (
		<div className="bgDotsContainer">
			<div className="bgDots"></div>
			<MouseFollower zIndex={0}/>
		</div>
	);
};

export default BgDots;