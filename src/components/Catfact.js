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
				className="rounded-md bg-green-800 hover:bg-green-900 p-1.5 font-bold text-white"
				onClick={fetchCatfact}
			>
				Get random cat "fact"
			</button>
			<p className="my-6">{catfact}</p>
		</div>
	);
};

export default Catfact;
