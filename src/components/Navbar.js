import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav className="block text-yellow-100 py-2 bg-slate-600 font-bold mb-4">
			<Link to="/" className="mx-2">
				HOME
			</Link>
			<Link to="agefetch" className="mx-2">
				AGEFETCH
			</Link>
			<Link to="catfact" className="mx-2">
				CATFACT
			</Link>
			<Link to="counter" className="mx-2">
				COUNTER
			</Link>
			<Link to="personlist" className="mx-2">
				PERSONLIST
			</Link>
			<Link to="planetlist" className="mx-2">
				PLANETLIST
			</Link>
			<Link to="tasks" className="mx-2">
				TASKS
			</Link>
		</nav>
	);
}
