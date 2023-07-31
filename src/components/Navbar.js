import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav className="block text-yellow-100 py-2 bg-slate-600 font-bold mb-4 uppercase">
			<Link to="/" className="mx-2">
				/
			</Link>
			<Link to="counter" className="mx-2">
				Counter
			</Link>
			<Link to="lists" className="mx-2">
				Lists
			</Link>
			<Link to="profile" className="mx-2">
				Profile
			</Link>
			<Link to="contact" className="mx-2">
				Contact
			</Link>
			<Link to="misc" className="mx-2">
				Misc
			</Link>
		</nav>
	);
}
