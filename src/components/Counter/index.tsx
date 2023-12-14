import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	console.log("Counter renders => means running");

	function handleClick() {
		console.log("click");
		setCount(count + 1);
	}

	return (
		<>
			<button onClick={handleClick}>count is {count}</button>
		</>
	);
}
