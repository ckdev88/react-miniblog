import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const changeName = (event) => {
		setName(event.target.value);
	};
	const fetchAge = () => {
		fetch("https://api.agify.io/?name=" + name)
			.then((res) => res.json())
			.then((data) => {
				setAge(data.age);
			});
	};
	useEffect(() => {
		fetchAge();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<b className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha
				</b>
				<input
					type="text"
					className="rounded-md bg-lime text-black p-1"
					placeholder="Ex. Sjaak..."
					onChange={changeName}
				/>
				<button
					className="App rounded-md p-1 bg-green-600 ml-3"
					onClick={fetchAge}
				>
					Predict age
				</button>
				<p>
					Predicted age of {name}: {age}
				</p>
			</header>
		</div>
	);
}

export default App;
