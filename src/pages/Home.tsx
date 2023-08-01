import { useContext } from "react";
import { AppContext } from "../App";
import Catfact from "../components/Catfact";

export default function Home() {
	const { username } = useContext(AppContext);
	return (
		<>
			<h1>Aloha {username}!</h1>
			<Catfact />
		</>
	);
}
