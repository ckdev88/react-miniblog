import { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	const increaseCount = () => {
		setCounter(counter + 1);
	};
	const decreaseCount = () => {
		setCounter(counter - 1);
	};
	const resetCount = () => {
		setCounter(0);
	};
	return (
		<div>
			<h1 className="text-2xl mb-3">Counter!</h1>
			<button
				onClick={increaseCount}
				className="rounded-md bg-green-600 py-1 px-1.5 mb-2"
			>
				Plus
			</button>
			<br />
			<button
				onClick={decreaseCount}
				className="rounded-md bg-red-600 py-1 px-1.5 mb-2"
			>
				Minus
			</button>
			<br />
			<button
				onClick={resetCount}
				className="rounded-md bg-black py-1 px-1.5 mb-2"
			>
				Reset
			</button>
			<p className="text-xl">{counter}</p>
		</div>
	);
}
