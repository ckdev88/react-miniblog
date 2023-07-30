import ProfileChange from "./ProfileChange";
const Profile = (props) => {
	return (
		<>
			<h1>Welcome back {props.username}</h1>
			<ProfileChange name={props.username} setUsername={props.setUsername} />
		</>
	);
};
export default Profile;
