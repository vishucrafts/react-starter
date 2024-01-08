import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<div className="flex items-start gap-2 p-2">
			<Button disabled size="small">
				Solid
			</Button>
			<Button variant="ghost" size="medium">
				Ghost
			</Button>
			<Button variant="soft" size="large">
				Soft
			</Button>
		</div>
	);
}

export default App;
