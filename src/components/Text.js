import React from "react";
import { useState, useEffect } from "react";

const Text = (props) => {
	const [text, setText] = useState("");
	useEffect(() => {
		console.log("COMPONENT MOUNTED");

		return () => {
			console.log("COMPONENT UNMOUNTED");
		};
	}, [text]);

	return (
		<div>
			<input
				type="text"
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			{!props.hideText && <p>{text}</p>}
		</div>
	);
};
export default Text;
