import { planets } from "../data/planets";
import Planet from "./Planet";

export default function List() {
	const gasPlanets = planets.filter((planet) => planet.isGasPlanet);
	const listItems = gasPlanets.map((planet) => {
		return <Planet name={planet.name} />;
	});
	return listItems;
}
