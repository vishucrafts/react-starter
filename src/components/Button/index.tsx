import clsx from "clsx";

type Props = {
	children: React.ReactNode;
	variant?: "solid" | "ghost" | "soft";
	size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
	const { variant: color = "solid", size = "medium" } = props;
	return (
		<button
			className={clsx([
				"font-medium text-white rounded-md py-1",
				color === "solid" && "bg-blue-500",
				color === "ghost" && "bg-white border text-blue-600 border-blue-500",
				color === "soft" && "bg-blue-100 text-blue-500",
				size === "small" && "text-xs px-1",
				size === "medium" && "text-base px-2",
				size === "large" && "text-xl px-3",
			])}
		>
			{props.children}
		</button>
	);
}
