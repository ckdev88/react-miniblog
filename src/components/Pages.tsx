import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Lists from "../pages/Lists";
import Tracks from "../pages/Tracks";
import Misc from "../pages/Misc";

export default function Pages() {
	return (
		<div className=" text-black pb-10">
			<BrowserRouter>
				<Navbar />
				<main>
					<Routes>
						<Route path="*" element={<NotFound />} />
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/lists" element={<Lists />} />
						<Route path="/tracks" element={<Tracks />} />
						<Route path="/misc" element={<Misc />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}
