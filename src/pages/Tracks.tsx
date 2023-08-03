import Tracklist from "../components/TrackList";
import TrackListHead from "../components/TrackListHead";

const Tracks = () => {
	return (
		<div className="tracklist">
			<h1>List of tracks</h1>
			<TrackListHead />
			<Tracklist />
		</div>
	);
};
export default Tracks;
