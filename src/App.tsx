import SelectMenu from "./components/SelectMenu/SelectMenu";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos/Todos";

function App() {
	const [count, setCount] = useState(0);

	console.log("App renders");

	return (
		<div>
			<div>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<p>{count}</p>
			</div>
			<div className="wrapper">
				<SelectMenu
					label="Select Country"
					options={["United States", "Canada", "India"]}
				/>
				<SelectMenu
					label="Select Gender"
					options={["Male", "Female", "Other"]}
				/>
			</div>
			<Todos />
		</div>
	);
}

export default App;
