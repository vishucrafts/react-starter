import { useEffect, useState } from "react";

export function useFetch<T>(asyncFn: () => Promise<T>) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		let ignore = false;
		async function startFetching() {
			setLoading(true);
			try {
				const data = await asyncFn();

				if (ignore) return;

				setData(data);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		startFetching();

		return () => {
			ignore = true;
		};
	}, [asyncFn]);

	return { data, loading, error };
}
