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
			<button
				className="rounded-md bg-green-800 hover:bg-green-900 p-1.5"
				onClick={fetchCatfact}
			>
				Get random cat "fact"
			</button>
			<p>{catfact}</p>
		</div>
	);
};

export default Catfact;
