import { useEffect, useState } from "react";

export default function Refs() {
	const [count, setCount] = useState(0);
	let isFirstRender = true;

	function increment() {
		setCount(count + 1);
		// if setCount(0) there is no change so React skip rerender after applying changes from update queue
	}

	function decrement() {
		setCount(count - 1);
	}

	console.log("Rendering Ref component");
	console.log({ isFirstRender });

	isFirstRender = false;
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

// export default function Refs() {
// 	const [count, setCount] = useState(0);
//   const [isFirstRender, setIsFirstRender] = useState(true);

// 	function increment() {
// 		setCount(count + 1);
// 	}

// 	function decrement() {
// 		setCount(count - 1);
// 	}

// 	console.log({ isFirstRender });

//   setIsFirstRender(false);

// 	return (
// 		<div>
// 			<h2>Refs</h2>
// 			<div>
// 				Count: {count}
// 				<button onClick={increment}>-</button>
// 				<button onClick={decrement}>+</button>
// 			</div>
// 		</div>
// 	);
// }

// export default function Refs() {
// 	const [count, setCount] = useState(0);
// 	const [isFirstRender, setIsFirstRender] = useState(true);

// 	useEffect(() => {
// 		setIsFirstRender(false);
// 	}, []);

// 	function increment() {
// 		setCount(count + 1);
// 	}

// 	function decrement() {
// 		setCount(count - 1);
// 	}

// 	console.log({ isFirstRender });

// 	return (
// 		<div>
// 			<h2>Refs</h2>
// 			<div>
// 				Count: {count}
// 				<button onClick={increment}>-</button>
// 				<button onClick={decrement}>+</button>
// 			</div>
// 		</div>
// 	);
// }
