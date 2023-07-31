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
			<h2>What's my age again?</h2>
			<input
				type="text"
				className="rounded-md bg-lime text-black p-1"
				placeholder="Type your name"
				onChange={(event) => {
					setName(event.target.value);
					console.log(event.target.value);
				}}
			/>
			<button onClick={fetchAge}>Predict age</button>
			<p>
				Predicted age of <b>{name}</b>: {age}
			</p>
		</div>
	);
};
export default Agefetch;
