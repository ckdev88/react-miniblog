import "./App.css";
import Text from "./components/Text";
import { useState } from "react";

function App() {
	const [showText, setShowText] = useState(false);
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha!
				</h1>
				<button
					onClick={() => {
						setShowText(!showText);
					}}
					className="bg-yellow-800 text-white rounded-md p-1.5 mb-2"
				>
					Show/Hide text
				</button>
				{showText && <Text />}
			</header>
		</div>
	);
}

export default App;
