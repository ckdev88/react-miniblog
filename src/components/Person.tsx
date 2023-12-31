interface Props {
	id: number;
	name: string;
	age: number;
	gender: string;
	profession: string;
}
const Person = (props: Props) => {
	const gender: string = props.gender;
	if (gender === "F") {
		return (
			<li key={props.id} className="bg-pink-500 p-1">
				{props.name}({props.age}): {props.profession}
			</li>
		);
	} else if (gender === "M") {
		return (
			<li key={props.id} className="bg-blue-500 p-1">
				{props.name}({props.age}): {props.profession}
			</li>
		);
	} else {
		return (
			<li key={props.id} className="bg-black text-pink-400 p-1">
				{props.name}({props.age}): {props.profession}
			</li>
		);
	}
};
export default Person;
