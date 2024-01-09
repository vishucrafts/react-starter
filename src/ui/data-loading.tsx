import { useEffect, useState } from "react";

export type Product = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

type Props = {
	products: Product[];
	setProducts: (products: Product[]) => void;
	reqId: number;
	setReqId: (reqId: number) => void;
};

export default function DataLoadingExample(props: Props) {
	const { products, setProducts, setReqId } = props;

	const [productsLoading, setProductsLoading] = useState(true);
	const [productsError, setProductsError] = useState(false);

	const [todos, setTodos] = useState([]);
	const [todosLoading, setTodosLoading] = useState(true);
	const [todosError, setTodosError] = useState(false);

	useEffect(() => {
		let ignore = false;
		async function fetchTodos() {
			try {
				setTodosLoading(true);
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const json = await response.json();

				if (ignore) return;

				setTodos(json);
				setTodosLoading(false);
			} catch (error) {
				setTodosError(true);
			}
		}

		fetchTodos();

		return () => {
			ignore = true;
		};
	}, []);

	useEffect(() => {
		let ignore = false;

		async function fetchProducts() {
			try {
				setProductsLoading(true);
				const response = await fetch("http://localhost:4000");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const json = await response.json();

				if (ignore) return;

				setProducts(json.products);
				setReqId(json.reqId);
				setProductsLoading(false);
			} catch (error) {
				setProductsError(true);
			}
		}

		fetchProducts();

		return () => {
			ignore = true;
		};
	}, [setProducts, setReqId]);

	if (productsError) return <p>Products Error</p>;

	if (todosError) return <p>Todos Error</p>;

	if (productsLoading) return <p>Products Loading...</p>;

	if (todosLoading) return <p>Todos Loading...</p>;

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	);
}
