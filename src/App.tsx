import SelectMenu from "./components/SelectMenu/SelectMenu";
import "./App.css";
import InfiniteRenders from "./components/InfiniteRenders";

function App() {
	console.log("App renders");

	return (
		<div>
			<InfiniteRenders />
		</div>
	);
}

export default App;
