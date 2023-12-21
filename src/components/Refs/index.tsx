import { useEffect, useRef, useState } from "react";

export default function Refs() {
	console.log("Refs renders");

	const [count, setCount] = useState(0);

	// let isFirstRender = true; this will recreate the variable on every render
	const isFirstRender = useRef(true);

	console.log("isFirstRender: ", isFirstRender.current);

	useEffect(() => {
		isFirstRender.current = false;
	}, []);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

	function updateRef() {
		isFirstRender.current = true;
	}

	return (
		<div>
			<h2>Refs</h2>
			<div>
				Count: {count}
				<button onClick={increment}>-</button>
				<button onClick={decrement}>+</button>
				<button onClick={updateRef}>Update ref</button>
			</div>
		</div>
	);
}

// function useRef(initialValue: any) {
// 	const [value] = useState({ current: initialValue });

// 	return value;
// }
