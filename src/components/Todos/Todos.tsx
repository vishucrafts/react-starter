import { useEffect, useState } from "react";

function delay(ms: number) {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve("");
		}, ms)
	);
}

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export default function Todos() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	delay(10000).then(() => {
	// 		console.log("10 seconds have passed");
	// 		fetch("https://jsonplaceholder.typicode.com/todos")
	// 			.then((response) => response.json())
	// 			.then((json) => {
	// 				setTodos(json);
	// 				setIsLoading(false);
	// 			});
	// 	});
	// }, []);

	useEffect(() => {
		async function startFetching() {
			await delay(10000);
			console.log("10 seconds have passed");
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const json = await response.json();
			setTodos(json);
			setIsLoading(false);
		}
		startFetching();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>Todos</h2>
			{todos.map((todo) => (
				<div key={todo.id}>
					<h3>{todo.title}</h3>
					<p>{todo.completed ? "Completed" : "Not completed"}</p>
				</div>
			))}
		</div>
	);
}
