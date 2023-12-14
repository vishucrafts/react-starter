import SelectMenu from "./components/SelectMenu/SelectMenu";

function App() {
	console.log("App renders");
	return (
		<div>
			<SelectMenu
				label="Select Country"
				options={["United States", "Canada", "India"]}
			/>
		</div>
	);
}

export default App;
