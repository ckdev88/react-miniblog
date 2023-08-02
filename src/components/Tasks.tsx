import { SetStateAction, useState } from "react";
import { Task } from "./Task";

// type TodoList = {
// 	todoList: [];
// 	setTodoList: [];
// 	setTodoList(todoList: []): [];
// };
interface TaskInterface {
	id: number;
	taskName: string;
	isCompleted: boolean;
}
// interface TaskInterface2 {
// 	[]: any;
// }

export default function Tasks() {
	const [todoList, setTodoList] = useState<TaskInterface[]>([]); // TODO: apply proper type/interface
	const [newTask, setNewTask] = useState("");

	const handleChangeFunction = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setNewTask(event.target.value);
	};

	const addTask = () => {
		const task: TaskInterface = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			isCompleted: false,
		};
		setTodoList([...todoList, task]);
	};
	const completeTask = (taskId: number) => {
		setTodoList(
			todoList.map((task: TaskInterface) => {
				if (task.id === taskId) {
					return { ...task, isCompleted: true }; // !
				} else {
					return task;
				}
			})
		);
	};
	const removeTask = (taskId: number) => {
		setTodoList(todoList.filter((task: TaskInterface) => task.id !== taskId));
	};

	return (
		<>
			<h2>Tasks & todo stuff</h2>
			<input type="text" onChange={handleChangeFunction} />
			<button onClick={addTask}>Add task</button>
			<hr className="my-5" />
			{todoList.map((task: TaskInterface) => {
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
