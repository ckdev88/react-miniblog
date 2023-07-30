import Profile from "./../components/Profile";
import { useContext } from "react";
import { AppContext } from "../App";

const ProfilePage = () => {
	const { username, setUsername } = useContext(AppContext);
	return (
		<>
			<Profile username={username} setUsername={setUsername} />
		</>
	);
};
export default ProfilePage;
