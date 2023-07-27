const Person = (props) => {
	const gender = props.gender;
	return (
		<li
			key={props.id}
			className={
				props.gender === "F" || props.gender === "X"
					? "bg-pink-500 p-1"
					: "bg-blue-500 p-1"
			}
		>
			{props.name}({props.age}): {props.profession}
		</li>
	);
};
export default Person;
