import { useState } from "react";
import "./SelectMenu.css";

type Props = {
	label: string;
	options: string[];
};

// states
// 	isMenuOpen: false,
// 	selectedOption: "Canada",
// Updates => []
export default function SelectMenu(props: Props) {
	const { label, options } = props;

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	console.log("SelectMenu renders");

	function handleMenuToggle() {
		// All updates are batched
		setIsMenuOpen(!isMenuOpen); //Schedule an update -> add to the update array
	}

	function handleMenuItemClick(option: string) {
		// All updates are batched
		setIsMenuOpen(false); //Schedule an update -> add to the update array
		setSelectedOption(option); //Schedule an update -> add to the update array
	} // Event handler has finished executing -> flush the update array

	return (
		<div className="select-menu-wrapper">
			<button className="label" onClick={handleMenuToggle}>
				{selectedOption ? selectedOption : label}
			</button>
			{isMenuOpen && (
				<div className="options">
					{options.map((option) => {
						return (
							<button
								key={option}
								className="option"
								onClick={() => handleMenuItemClick(option)}
							>
								{option}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

// AND operator

// true && true = true
// true && false = false
// false && true = false
// false && false = false
