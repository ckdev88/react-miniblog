import { useState } from "react";

const Catfact = (props) => {
	const [catfact, setCatfact] = useState("");
	const fetchCatfact = () => {
		fetch(`https://catfact.ninja/fact`).then((res) =>
			res.json().then((data) => {
				setCatfact(data.fact);
			})
		);
	};
	return (
		<div>
			<button onClick={fetchCatfact}>Get it now!</button>
			<p className="my-6">{catfact}</p>
		</div>
	);
};

export default Catfact;
