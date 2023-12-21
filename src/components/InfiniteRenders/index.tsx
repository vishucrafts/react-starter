import { useState } from "react";

export default function InfiniteRenders() {
	const [count, setCount] = useState(0);

	// Don't do this!
	// Your render function should be pure.
	// Don't modify inputs. That is props and state in render body
	setCount(count + 1);

	return <div>Inifinite Renders: {count}</div>;
}
