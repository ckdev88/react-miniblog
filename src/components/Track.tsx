interface Props {
	id: number;
	artist: string;
	title: string;
	tempo: number;
}

const Track = (props: Props) => {
	return (
		<div>
			<div>
				{props.id} {props.artist} {props.title} {props.tempo}
			</div>
		</div>
	);
};
export default Track;
