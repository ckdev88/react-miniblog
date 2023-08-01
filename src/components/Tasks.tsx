import { SetStateAction, useState } from "react";
import { Task } from "./Task";

interface TodoList {
	id: number;
	task: any;
}
interface Task {
	id: number;
	taskName: string;
	isCompleted: boolean;
}

export default function Tasks() {
	const [todoList, setTodoList] = useState<any>([]);
	const [newTask, setNewTask] = useState("");

	const handleChangeFunction = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setNewTask(event.target.value);
	};
	// interface TodoList: Array;

	const addTask = () => {
		const task: Task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			isCompleted: false,
		};
		setTodoList([...todoList, task]);
	};
	const completeTask = (taskId: number) => {
		setTodoList(
			todoList.map((task: any) => {
				if (task.id === taskId) {
					return { ...task, isCompleted: true }; // !
				} else {
					return task;
				}
			})
		);
	};
	const removeTask = (taskId: number) => {
		setTodoList(todoList.filter((task: any) => task.id !== taskId));
	};

	return (
		<>
			<h2>Tasks & todo stuff</h2>
			<input type="text" onChange={handleChangeFunction} />
			<button onClick={addTask}>Add task</button>
			<hr className="my-5" />
			{todoList.map((task: any) => {
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
		</>
	);
}
