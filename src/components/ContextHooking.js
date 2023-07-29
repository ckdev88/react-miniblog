// import { useState } from "react";

// export default function ContextHooking() {
// 	// return <h2>Hook mah context!</h2>;
// 	const GrandparentComponent = () => {
// 		const [state, setState] = useState();
// 		setState(true);
// 		return (
// 			<div>
// 				<ParentComponent state={state} />
// 			</div>
// 		);
// 	};
// 	const ParentComponent = () => {
// 		return (
// 			<div>
// 				<ChildComponent state={state} />
// 			</div>
// 		);
// 	};
// 	const ChildComponent = () => {
// 		return <div>{state}</div>;
// 	};
// }
