import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAgeFetch = (username = "") => {
	const { data, refetch, isLoading, isError } = useQuery(
		["cattie"],
		async () => {
			return axios
				.get(`https://api.agify.io/?name=${username}`)
				.then((res) => res.data);
		}
	);

	const refetchData = (username = "") => {
		refetch();
	};

	return { data, refetchData, isLoading, isError };
};

export default useAgeFetch;
