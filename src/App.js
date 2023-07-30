import "./App.css";
import Pages from "./components/Pages";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("Anonymous");
	return (
		<AppContext.Provider value={{ username, setUsername }}>
			<div className="App bg-zinc-200 h-100">
				<header className="App-header py-4 mb-0 my-auto">
					<strong className="text-3xl overline mb-2 uppercase font-extrabold block">
						Aloha!
					</strong>
				</header>
				<Pages />
			</div>
		</AppContext.Provider>
	);
}

export default App;
