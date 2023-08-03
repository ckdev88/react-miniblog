import { useContext } from "react";
import { AppContext } from "../App";
import useAgeFetch from "./hooks/useAgeFetch";

const Agefetch = () => {
	let { username } = useContext(AppContext);
	const { data, refetchData, isLoading, isError } = useAgeFetch(username);

	if (username !== data?.name) {
		refetchData();
	}
	return (
		<div>
			<h2>What's my age again?</h2>
			<div className="text-xl">
				{isLoading && <p>...</p>}
				{isError && <p>kapot?</p>}
				{!isLoading && !isError ? (
					<p>
						{data?.name}, are you {data?.age} years old?
					</p>
				) : (
					<></>
				)}
				{username !== data?.name ? (
					<button onClick={refetchData}>Refresh</button>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Agefetch;
