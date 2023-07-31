import useCounter from "./hooks/useCounter";

const Counter = () => {
	const { counter, plus, minus, reset } = useCounter(1);
	return (
		<div>
			<h2 className="text-2xl mb-3">Counter!</h2>
			<button
				onClick={plus}
				className="rounded-md bg-green-600 py-1 px-1.5 mb-2"
			>
				Plus
			</button>
			<br />
			<button
				onClick={minus}
				className="rounded-md bg-red-600 py-1 px-1.5 mb-2"
			>
				Minus
			</button>
			<br />
			<button onClick={reset} className="rounded-md bg-black py-1 px-1.5 mb-2">
				Reset
			</button>
			<p className="text-xl">{counter}</p>
		</div>
	);
};
export default Counter;
