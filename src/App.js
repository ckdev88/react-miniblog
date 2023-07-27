import "./App.css";
// import PlanetList from "./components/PlanetList";
import PersonList from "./components/PersonList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha!
				</h1>
				<PersonList />
			</header>
		</div>
	);
}

export default App;
