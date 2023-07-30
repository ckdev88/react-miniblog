import Person from "./Person";
import { people } from "../data/people";

export default function List() {
	const listItems = people.map((person) => (
		<Person
			name={person.name}
			id={person.id}
			gender={person.gender}
			age={person.age}
			profession={person.profession}
		/>
	));
	return (
		<>
			<h1>List of peoples</h1>
			<ul>{listItems}</ul>
		</>
	);
}
