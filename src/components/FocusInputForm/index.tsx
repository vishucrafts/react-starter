import { useEffect } from "react";

export default function FocusInputForm() {
	// At this point there is no DOM element with id="email"
	// So we can't focus it
	document.getElementById("email")?.focus();

	useEffect(() => {
		document.getElementById("email")?.focus();
	}, []);

	return (
		<div>
			<form>
				<h2>Sign in</h2>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
			</form>
		</div>
	);
}
