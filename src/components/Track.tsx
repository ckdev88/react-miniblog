type Props = {
	id: number;
	artist: string;
	title: string;
	tempo: number;
};

const Track = (props: Props) => {
	return (
		<li key={props.id}>
			<span>{props.artist}</span>
			<span>{props.title}</span>
			<span>{props.tempo}</span>
		</li>
	);
};
export default Track;
