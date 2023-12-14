export default function Counter() {
	let count = 0;

	function handleClick() {
		console.log("click");
		count = count + 1;
	}

	return (
		<>
			<button onClick={handleClick}>count is {count}</button>
		</>
	);
}
