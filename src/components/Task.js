const Task = (props) => {
	return (
		<div>
			<span
				className={
					props.isCompleted ? "line-through decoration-4 text-gray-600" : ""
				}
			>
				<span className="text-2xl font-black">
					{props.id} - {props.taskName}
				</span>
			</span>
			<button
				className="rounded-md ml-3 uppercase bg-green-600 hover:bg-green-800 px-2 text-s font-bold"
				onClick={() => props.completeTask(props.id)}
			>
				Done
			</button>
			<button
				className="rounded-md ml-3 uppercase bg-red-800 hover:bg-red-900 px-2 text-s font-bold"
				onClick={() => props.deleteTask(props.id)}
			>
				x
			</button>
		</div>
	);
};
export default Task;
