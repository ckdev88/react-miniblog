import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
	const {
		data: catData,
		isLoading,
		isError,
		refetch,
	} = useQuery(["cat"], () => {
		return axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});

	console.log({ catData });
	// const { username } = useContext(AppContext);
	return (
		<main>
			<h1>Aloha!</h1>

			<h2>Here, have a cat fact!</h2>
			{isLoading && <p>...</p>}
			{isError && <p>Oeps, foutje?</p>}
			<p>{catData?.fact}</p>
			<button onClick={refetch}>Again!</button>
		</main>
	);
}
