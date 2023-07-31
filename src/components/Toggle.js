import useToggle from "./hooks/useToggle";

const Toggle = () => {
	const [isVisible, toggleVisibility] = useToggle();
	const [isRed, toggleRed] = useToggle(false);

	return (
		<div>
			<h2>Toggler</h2>
			<button onClick={toggleVisibility}>
				{!isVisible ? "Laat tekst zien" : "Verberg tekst"}
			</button>
			{isVisible && (
				<>
					<p className={isRed && "text-red-600"}>
						Deze tekst is om de test tekst te testen.
					</p>
					<button onClick={toggleRed}>
						{!isRed ? "Maak rood" : "Maak zwart"}
					</button>
				</>
			)}
		</div>
	);
};
export default Toggle;
