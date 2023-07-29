import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Agefetch from "../pages/Agefetch";
import Catfact from "../pages/Catfact";
import Counter from "../pages/Counter";
import PersonList from "../pages/PersonList";
import PlanetList from "../pages/PlanetList";
import Tasks from "../pages/Tasks";

export default function Pages() {
	return (
		<main className=" text-black ">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/agefetch" element={<Agefetch />} />
					<Route path="/catfact" element={<Catfact />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/personlist" element={<PersonList />} />
					<Route path="/planetlist" element={<PlanetList />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}
