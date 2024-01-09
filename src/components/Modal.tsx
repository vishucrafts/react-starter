type Props = {
	children: React.ReactNode;
	onClose?: () => void;
};

export default function Modal(props: Props) {
	const { children } = props;

	function handleClose() {
		return () => {
			// if (props.onClose) {
			// 	props.onClose();
			// }
			props.onClose?.();
		};
	}

	return (
		<div className="w-1/2 border rounded-md border-gray-600 shadow-sm shadow-black p-2">
			<div className="min-h-24">{children}</div>
			<div className="flex gap-2">
				<button
					className="bg-red-500 rounded-md px-2 py-1 text-white"
					onClick={handleClose()}
				>
					Cancel
				</button>
				<button className="border rounded-md px-2 py-1" onClick={handleClose}>
					Save
				</button>
			</div>
		</div>
	);
}
