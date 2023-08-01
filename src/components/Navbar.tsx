import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav className="block py-2 bg-slate-500 font-bold mb-4 uppercase ">
			<Link to="/" className="mx-2">
				/
			</Link>
			<Link to="lists" className="mx-2">
				Lists
			</Link>
			<Link to="tracks" className="mx-2">
				Tracks
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
