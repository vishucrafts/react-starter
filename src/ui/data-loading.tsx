import { useEffect, useState } from "react";
import { Product } from "../App";

type Props = {
	products: Product[];
	setProducts: (products: Product[]) => void;
};

export default function DataLoadingExample(props: Props) {
	const { products, setProducts } = props;

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let ignore = false;
		fetch("http://localhost:4000")
			.then((response) => response.json())
			.then((data) => {
				if (!ignore) {
					setProducts(data);
					setLoading(false);
				}
			});

		return () => {
			ignore = true;
		};
	}, [setProducts]);

	if (loading) return <p>Loading...</p>;

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
