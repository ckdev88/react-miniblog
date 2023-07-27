export const Planet = (props) => {
	return <h2 className={props.gas && "bg-red-300 text-black"}>{props.name}</h2>;
};
export default Planet;
