import { useEffect, useRef, useState } from "react";

export default function FocusInputFormRefs() {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const [showEmailInput, setShowEmailInput] = useState(false);

	useEffect(() => {
		if (emailInputRef.current) {
			emailInputRef.current.focus();
		}
	}, [showEmailInput]);

	function toggleShowEmailInput() {
		setShowEmailInput(!showEmailInput);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Sign in</h2>
				{showEmailInput && (
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" ref={emailInputRef} />
					</div>
				)}
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<button onClick={toggleShowEmailInput}>Toggle Email</button>
			</form>
		</div>
	);
}
