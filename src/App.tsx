import "./App.css";
import Pages from "./components/Pages";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppContextType {
	username: string;
	setUsername(username: string): void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

function App() {
	const client = new QueryClient();
	const [username, setUsername] = useState<string>("Anonymous");
	return (
		<QueryClientProvider client={client}>
			<AppContext.Provider value={{ username, setUsername }}>
				<div className="App bg-zinc-200 h-100">
					<header className="App-header py-3 mb-0 my-auto">
						<strong className="text-3xl overline uppercase font-extrabold block">
							Aloha</strong>
					</header>
					<Pages />
				</div></AppContext.Provider>
		</QueryClientProvider>
	);
}

export default App;
