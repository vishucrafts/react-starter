import { useEffect, useState } from "react";
import { fetchProducts, fetchTodos } from "../api";

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
		async function startFetching() {
			try {
				setTodosLoading(true);
				const json = await fetchTodos();

				if (ignore) return;

				setTodos(json);
				setTodosLoading(false);
			} catch (error) {
				setTodosError(true);
			}
		}

		startFetching();

		return () => {
			ignore = true;
		};
	}, []);

	useEffect(() => {
		let ignore = false;

		async function startFetching() {
			try {
				setProductsLoading(true);
				const json = await fetchProducts();

				if (ignore) return;

				setProducts(json.products);
				setReqId(json.reqId);
				setProductsLoading(false);
			} catch (error) {
				setProductsError(true);
			}
		}

		startFetching();

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
