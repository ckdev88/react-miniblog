import { planets } from "../data/planets";
import Planet from "./Planet";

export default function List() {
	const gasPlanets = planets.filter((planet) => planet.isGasPlanet);
	return (
		<>
			<h2>List of planets!</h2>
			<h3 className="font-extrabold underline">Gas planets</h3>
			<ul>
				{gasPlanets.map((planet) => {
					return <Planet name={planet.name} />;
				})}
			</ul>
		</>
	);
}
