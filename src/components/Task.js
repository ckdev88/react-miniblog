export const Task = (props) => {
	return (
		<li className="my-3 list-none">
			<span
				className={
					props.isCompleted ? "line-through decoration-2 text-gray-500" : ""
				}
			>
				<span className="text-2xl font-black">
					{props.id}: {props.name}
				</span>
			</span>
			<button
				className="rounded-md ml-3 uppercase bg-green-600 hover:bg-green-800 px-2 text-s font-bold text-sm"
				onClick={() => props.completeTask(props.id)}
			>
				Done
			</button>
			<button
				className="rounded-md ml-1 uppercase bg-red-800 hover:bg-red-900 px-2 text-sm font-bold"
				onClick={() => props.removeTask(props.id)}
			>
				x
			</button>
		</li>
	);
};
