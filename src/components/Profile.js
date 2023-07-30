import ProfileChange from "./ProfileChange";
import { useContext } from "react";
import { AppContext } from "./Pages";

const Profile = () => {
	const { username, setUsername } = useContext(AppContext);
	return (
		<>
			<h1>Welcome back {username}</h1>
			<ProfileChange name={username} setUsername={setUsername} />
		</>
	);
};
export default Profile;
