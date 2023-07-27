import { planets } from "../data/planets";
import Planet from "./Planet";

export default function List() {
	const gasPlanets = planets.filter((planet) => planet.isGasPlanet);
	return (
		<div>
			<h2 className="font-extrabold underline">Gas planets</h2>
			<ul>
				{gasPlanets.map((planet) => {
					return <Planet name={planet.name} />;
				})}
			</ul>
		</div>
	);
}
