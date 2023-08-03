import { useContext } from "react";
import { AppContext } from "../App";
import useAgeFetch from "./hooks/useAgeFetch";

const Agefetch = () => {
	let { username } = useContext(AppContext);
	const { data, refetchData, isLoading, isError } = useAgeFetch(username);

	if (username !== data.name) {
		refetchData(username);
	}
	return (
		<div>
			<h2>What's my age again? {data?.fact}</h2>
			<div className="text-xl">
				{isLoading && <p>...</p>}
				{isError && <p>kapot?</p>}
				{!isLoading && !isError ? (
					<p>
						{username}, are you {data?.age} years old?
					</p>
				) : (
					<p></p>
				)}
			</div>
		</div>
	);
};
export default Agefetch;
