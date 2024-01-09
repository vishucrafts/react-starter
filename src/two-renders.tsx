import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Timer from "./components/Timer";

export default function TwoRenders() {
	const [showModal, setShowModal] = useState(false);
	const [time, setTime] = useState(0);

	function toggleModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="flex flex-col items-start gap-2 p-2">
			<div>Parent time: {time}</div>
			<Button onClick={toggleModal}>Open Modal</Button>
			{showModal && (
				<Modal onClose={toggleModal}>
					<Timer time={time} setTime={setTime} />
				</Modal>
			)}
		</div>
	);
}
