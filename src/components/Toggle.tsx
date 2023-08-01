import useToggle from "./hooks/useToggle";

const Toggle = () => {
	const { state, toggle } = useToggle(false);
	// const { isRed, toggleRed } = useToggle(false); // kan zelfde effect niet vaker uitvoeren?

	// typeof (bla)=AnalyserNode;
	const bla = () => {
		return console.log("asdasdas");
	};
	return (
		<div>
			<h2>Toggler</h2>
			<button onClick={toggle}>
				{!state ? "Laat tekst zien" : "Verberg tekst"}
			</button>
			{state && (
				<>
					{/* <p className={isRed && "text-red-600"}>
						Deze tekst is om de test tekst te testen.
					</p> */}
					<p>Deze tekst is om de test tekst te testen.</p>
					{/* <button onClick={toggleRed}>
						{!isRed ? "Maak rood" : "Maak zwart"}
					</button> */}
				</>
			)}
		</div>
	);
};
export default Toggle;
