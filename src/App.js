import "./App.css";
import Pages from "./components/Pages";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
	const client = new QueryClient();
	const [username, setUsername] = useState("Anonymous");
	return (
		<QueryClientProvider client={client}>
			<div className="App bg-zinc-200 h-100">
				<header className="App-header py-4 mb-0 my-auto">
					<strong className="text-3xl overline mb-2 uppercase font-extrabold block">
						Aloha!
					</strong>
				</header>
				<Pages />
			</div>
		</QueryClientProvider>
	);
}

export default App;
