import useToggle from "./hooks/useToggle";

const Toggle = () => {
	const { state: stateText, toggle: toggleText } = useToggle(false);
	const { state: stateColor, toggle: toggleColor } = useToggle(false); // kan zelfde effect niet vaker uitvoeren?

	return (
		<div>
			<h2>Toggler</h2>
			<button onClick={toggleText}>
				{!stateText ? "Laat tekst zien" : "Verberg tekst"}
			</button>
			{stateText && (
				<>
					<p className={stateColor ? "text-red-600" : "text-black"}>
						Deze tekst is om de test tekst te testen.
					</p>
					<button onClick={toggleColor}>
						{!toggleColor ? "Maak rood" : "Maak zwart"}
					</button>
				</>
			)}
		</div>
	);
};
export default Toggle;
