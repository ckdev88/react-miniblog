import Profile from "./../components/Profile";
import { useContext } from "react";
import { AppContext } from "../components/Pages";

const ProfilePage = () => {
	const { username, setUsername } = useContext(AppContext);
	return (
		<>
			<Profile username={username} setUsername={setUsername} />
		</>
	);
};
export default ProfilePage;
