import { useContext } from "react";
import { AppContext } from "../App";

export default function Home() {
	const { username } = useContext(AppContext);
	return <h1>Aloha {username}!</h1>;
}
