import tracks from "../data/tracks";
import Track from "./Track";

// note: The interface declaration and type applyance "track:Tracks" is fine, but not necessary in this case, TS already detected it properly
interface Tracks {
	id: number;
	artist: string;
	title: string;
	tempo: number;
}
const List = () => {
	const listItems = tracks.map((track: Tracks) => {
		return (
			<Track
				key={track.id}
				id={track.id}
				artist={track.artist}
				title={track.title}
				tempo={track.tempo}
			/>
		);
	});

	return (
		<>
			<ul>{listItems}</ul>
		</>
	);
};
export default List;
