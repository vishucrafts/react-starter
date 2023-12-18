import SelectMenu from "./components/SelectMenu/SelectMenu";
import "./App.css";
import { useState } from "react";

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
		</div>
	);
}

export default App;
