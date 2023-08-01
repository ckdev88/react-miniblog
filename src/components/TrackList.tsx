import tracks from "../data/tracks";
import Track from "./Track";

interface Tracks {
	id: number;
	artist: string;
	title: string;
	tempo: number;
}
const TrackList = () => {
	const tracklist = tracks.map((track) => {
		return (
			<Track
				id={track.id}
				artist={track.artist}
				title={track.title}
				tempo={track.tempo}
			/>
		);
	});
	return tracklist;
};
export default TrackList;
