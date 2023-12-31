import React from "react";
import { useState, useEffect } from "react";

interface Props {
	text: string;
	hideText: string;
}

const Text = (props: Props) => {
	const [text, setText] = useState<string>("");
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
