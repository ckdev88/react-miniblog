import { useState, useEffect } from "react";
const Agefetch = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);

	const fetchAge = () => {
		console.log({ name });
		fetch(`https://api.agify.io/?name=${name}`)
			.then((res) => res.json())
			.then((data) => {
				setAge(data.age);
			});
	};
	useEffect(() => {
		fetchAge();
	}, []);
	return (
		<div>
			<input
				type="text"
				className="rounded-md bg-lime text-black p-1"
				placeholder="Ex. Sjaak..."
				onChange={(event) => {
					setName(event.target.value);
					console.log(event.target.value);
				}}
			/>
			<button className="rounded-md p-1 bg-green-600 ml-3" onClick={fetchAge}>
				Predict age
			</button>
			<p>
				<br />
				<br />
				Predicted age of {name}: {age}
			</p>
		</div>
	);
};
export default Agefetch;
