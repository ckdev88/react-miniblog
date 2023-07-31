import Profile from "./../components/Profile";
import Agefetch from "./../components/Agefetch";
import { useContext } from "react";
import { AppContext } from "../App";

const ProfilePage = () => {
	const { username, setUsername } = useContext(AppContext);
	return (
		<>
			<Profile username={username} setUsername={setUsername} />
			<Agefetch />
		</>
	);
};
export default ProfilePage;
