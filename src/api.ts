export async function fetchProducts() {
	const response = await fetch("http://localhost:4000");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const json = await response.json();
	return json;
}

export async function fetchTodos() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const json = await response.json();
	return json;
}
