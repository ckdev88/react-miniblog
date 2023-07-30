import Profile from "./../components/Profile";
const ProfilePage = (props) => {
	return (
		<>
			<Profile username={props.username} setUsername={props.setUsername} />
		</>
	);
};
export default ProfilePage;
