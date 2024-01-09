import { useState } from "react";
import "../App.css";
import Modal from "../components/Modal";
import Button from "../components/Button";
import DataLoadingExample from "./data-loading";

export type Product = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

export default function Products() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function toggleModal() {
		setIsModalOpen(!isModalOpen);
	}

	return (
		<div className="flex items-start gap-2 p-2 w-1/2">
			<Button onClick={toggleModal}>
				{isModalOpen ? "Close Modal" : "Open Modal"}
			</Button>
			{isModalOpen && (
				<Modal onClose={toggleModal}>
					<DataLoadingExample />
				</Modal>
			)}
		</div>
	);
}
