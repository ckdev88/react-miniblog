import { planets } from "../data/planets";

const Planet = (props) => {
	planets.map((value, key) => {
		console.log({ value });
		return <div key={key}>{value.name}</div>;
	});
	// return <h2 className={props.gas && "bg-red-300 text-black"}>{props.name}</h2>;
};
export default Planet;
