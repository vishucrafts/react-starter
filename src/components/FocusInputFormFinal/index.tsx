import { useEffect, useRef } from "react";

export default function FocusInputFormFinal() {
	const emailInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (emailInputRef.current) {
			emailInputRef.current.focus();
		}
	}, []);

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<h2>Sign in</h2>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" ref={emailInputRef} />
				</div>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
			</form>
		</div>
	);
}
