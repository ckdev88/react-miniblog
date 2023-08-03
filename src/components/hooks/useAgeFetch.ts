import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAgeFetch = (username: string) => {
	const { data, refetch, isLoading, isError } = useQuery(["age"], async () => {
		return axios
			.get(`https://api.agify.io/?name=${username}`)
			.then((res) => res.data);
	});

	const refetchData = () => {
		refetch();
	};

	return { data, refetchData, isLoading, isError };
};

export default useAgeFetch;
