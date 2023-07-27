import "./App.css";
import PlanetList from "./components/PlanetList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha!
				</h1>
				<PlanetList />
			</header>
		</div>
	);
}

export default App;
