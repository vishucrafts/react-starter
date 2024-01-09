import { useState } from "react";
import "./App.css";
import DataLoadingExample from "./ui/data-loading";
import Button from "./components/Button";
import Modal from "./components/Modal";

export type Product = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [showModal, setShowModal] = useState(false);

	function toggleModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="flex flex-col items-start gap-2 p-2">
			<div className="flex flex-col gap-2">
				Products:{" "}
				{products.map((product) => (
					<div key={product.id} className="border rounded-md">
						<div>Name: {product.name}</div>
						<div>Price: {product.price}</div>
						<div>Quantity: {product.quantity}</div>
					</div>
				))}
			</div>
			<Button onClick={toggleModal}>Open Modal</Button>
			{showModal && (
				<Modal onClose={toggleModal}>
					<DataLoadingExample products={products} setProducts={setProducts} />
				</Modal>
			)}
		</div>
	);
}

export default App;
