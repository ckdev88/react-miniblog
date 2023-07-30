import { useState } from "react";
const ProfileChange = (props) => {
	const [newUsername, setNewUsername] = useState("");
	const [status, setStatus] = useState("");
	const updateUsername = (newUsername) => {
		props.setUsername(newUsername);
		setStatus("Updated!");
	};
	return (
		<div>
			<h2>Change profile</h2>
			<input
				type="text"
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					updateUsername(newUsername);
				}}
			>
				Change username
			</button>
			{status}
		</div>
	);
};
export default ProfileChange;
