import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ProfileChange = () => {
	const { username, setUsername } = useContext(AppContext);
	const [newUsername, setNewUsername] = useState("");
	const [status, setStatus] = useState("");
	const updateUsername = (newUsername: string) => {
		setUsername(newUsername);
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
