import ProfileChange from "./ProfileChange";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
	const { username } = useContext(AppContext);
	return (
		<>
			<h1>Welcome back {username}</h1>
			<ProfileChange />
		</>
	);
};
export default Profile;
