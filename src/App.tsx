import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<div>
			<Button disabled>Solid</Button>
			<Button color="ghost">Ghost</Button>
			<Button color="soft">Soft</Button>
		</div>
	);
}

export default App;
