import { useState } from "react";
import { Task } from "./Task";

export default function Tasks() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChangeFunction = (event) => {
		setNewTask(event.target.value);
	};

	const addTask = () => {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			isCompleted: false,
		};
		setTodoList([...todoList, task]);
	};
	const completeTask = (taskId) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === taskId) {
					return { ...task, isCompleted: true }; // !
				} else {
					return task;
				}
			})
		);
	};
	const removeTask = (taskId) => {
		setTodoList(todoList.filter((task) => task.id !== taskId));
	};

	return (
		<div>
			<input
				type="text"
				onChange={handleChangeFunction}
				className="p-1 rounded-md"
			/>
			<button
				onClick={addTask}
				className="rounded-md py-1 px-1.5 ml-2 bg-black text-white"
			>
				Add task
			</button>
			<hr className="my-5" />
			{todoList.map((task) => {
				return (
					<Task
						id={task.id}
						name={task.taskName}
						isCompleted={task.isCompleted}
						completeTask={completeTask}
						removeTask={removeTask}
					/>
				);
			})}
			<br />
		</div>
	);
}
