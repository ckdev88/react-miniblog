import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Catfact = () => {
	const {
		data: catData,
		isLoading,
		isError,
		refetch,
	} = useQuery(["cat"], async () => {
		return axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});

	return (
		<>
			<h2>Here, have a cat fact!</h2>
			{isLoading && <p>...</p>}
			{isError && <p>Oeps, source URL broken?</p>}
			<p>{catData?.fact}</p>
			<button onClick={refetch}>Again!</button>
		</>
	);
};

export default Catfact;
