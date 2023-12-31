import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetCat = () => {
	const {
		data,
		refetch,
		isLoading: isCatLoading,
		isError,
	} = useQuery(["cat"], async () => {
		return axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});

	const refetchData = () => {
		refetch();
	};

	return { data, refetchData, isCatLoading, isError };
};
export default useGetCat;
