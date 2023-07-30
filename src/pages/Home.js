import { useContext } from "react";
import { AppContext } from "../components/Pages";
export default function Home() {
	const { username } = useContext(AppContext);
	return <h1>Aloha {username}!</h1>;
}
