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
	const [products, setProducts] = useState<Product[]>([]);
	const [reqId, setReqId] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function toggleModal() {
		setIsModalOpen(!isModalOpen);
	}

	return (
		<div className="flex items-start gap-2 p-2 w-1/2">
			<div className="flex flex-col gap-2">
				<div>Req Id {reqId}</div>
				<div>Products</div>
				{products.map((product) => (
					<div key={product.id} className="border rounded-md">
						<div>Name: {product.name}</div>
						<div>Price: {product.price}</div>
						<div>Quantity: {product.quantity}</div>
					</div>
				))}
			</div>
			<Button onClick={toggleModal}>
				{isModalOpen ? "Close Modal" : "Open Modal"}
			</Button>
			{isModalOpen && (
				<Modal onClose={toggleModal}>
					<DataLoadingExample
						products={products}
						setProducts={setProducts}
						reqId={reqId}
						setReqId={setReqId}
					/>
				</Modal>
			)}
		</div>
	);
}
