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
		setTodosLoading(true);
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => {
				setTodos(json);
				setTodosLoading(false);
			});
	}, []);

	useEffect(() => {
		let ignore = false;
		fetch("http://localhost:4000")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				if (ignore) {
					setProducts(data.products);
					setReqId(data.reqId);
				}

				setProductsLoading(false);
			})
			.catch(() => {
				setProductsError(true);
			});

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
