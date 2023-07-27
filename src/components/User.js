const User = (props) => {
	return (
		<h2 className={props.gender === "F" ? "bg-pink-500" : "bg-blue-500"}>
			{props.name},{props.age}
		</h2>
	);
};
export default User;
