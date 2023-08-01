import useGetCat from "./hooks/useGetCat";

const Catfact = () => {
	const { data, refetchData, isCatLoading, isError } = useGetCat();
	return (
		<>
			<h2>Here, have a cat fact!</h2>
			{isCatLoading && <p>...</p>}
			{isError && <p>Nope, source URL broken?</p>}
			<p>{data?.fact}</p>
			<button onClick={refetchData}>Again!</button>
		</>
	);
};

export default Catfact;
