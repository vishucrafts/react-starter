/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";

export default function Refs() {
	const [count, setCount] = useState(0);

	const [isFirstRender] = useState({ current: true });

	console.log("isFirstRender: ", isFirstRender.current);

	//@ts-expect-error
	isFirstRender.current = false;

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

	return (
		<div>
			<h2>Refs</h2>
			<div>
				Count: {count}
				<button onClick={increment}>-</button>
				<button onClick={decrement}>+</button>
			</div>
		</div>
	);
}
