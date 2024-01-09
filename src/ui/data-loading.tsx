import { fetchProducts, fetchTodos } from "../api";
import { useFetch } from "../hooks/useFetch";

export type Product = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

export default function DataLoadingExample() {
	const {
		data: todos,
		error: todosError,
		loading: todosLoading,
	} = useFetch(fetchTodos);
	const {
		data: products,
		error: productsError,
		loading: productsLoading,
	} = useFetch<Product[]>(fetchProducts);

	if (productsError) return <p>Products Error</p>;

	if (todosError) return <p>Todos Error</p>;

	if (productsLoading) return <p>Products Loading...</p>;

	if (todosLoading) return <p>Todos Loading...</p>;

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products?.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	);
}
