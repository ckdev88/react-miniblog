import "./App.css";
import Catfact from "./components/Catfact";
import Agefetch from "./components/Agefetch";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-3xl overline flex-shrink mb-10 uppercase font-extrabold border-t-4">
					Aloha!
				</h1>

				<Catfact />
				<Agefetch />
			</header>
		</div>
	);
}

export default App;
