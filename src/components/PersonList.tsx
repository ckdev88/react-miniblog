import Person from "./Person";
import { people } from "../data/people";

const List = () => {
	const listItems = people.map((person) => (
		<Person
			key={person.id}
			name={person.name}
			id={person.id}
			gender={person.gender}
			age={person.age}
			profession={person.profession}
		/>
	));
	return (
		<>
			<h2>List of peoples</h2>
			<ul>{listItems}</ul>
		</>
	);
};
export default List;
