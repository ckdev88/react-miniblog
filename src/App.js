import "./App.css";
import Tasks from "./components/Tasks";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha!
				</h1>
				<Tasks />
			</header>
		</div>
	);
}

export default App;
