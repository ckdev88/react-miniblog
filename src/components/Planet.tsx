interface Props {
	name: string;
}

const Planet = (props: Props) => {
	return <li className="list-none">{props.name}</li>;
};
export default Planet;
