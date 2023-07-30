import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav className="block text-yellow-100 py-2 bg-slate-600 font-bold mb-4 uppercase">
			<Link to="/" className="mx-2">
				Home
			</Link>
			<Link to="agefetch" className="mx-2">
				Agefetch
			</Link>
			<Link to="catfact" className="mx-2">
				Catfact
			</Link>
			<Link to="counter" className="mx-2">
				Counter
			</Link>
			<Link to="personlist" className="mx-2">
				Peoples
			</Link>
			<Link to="planetlist" className="mx-2">
				Planets
			</Link>
			<Link to="tasks" className="mx-2">
				Tasks
			</Link>
			<Link to="profile" className="mx-2">
				Profile
			</Link>
			<Link to="propdrilling" className="mx-2">
				Propdrilling?
			</Link>
		</nav>
	);
}
