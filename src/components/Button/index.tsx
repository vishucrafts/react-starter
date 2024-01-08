import "./index.css";
import clsx from "clsx";

type Props = {
	children: React.ReactNode;
	color?: "solid" | "ghost" | "soft";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
	const { children, disabled, color = "solid" } = props;

	// const name = "Vishal";
	// "hello " + name;
	// `hello ${name}`
	// return (
	// 	<button className={`base ${color} ${disabled ? "disabled" : ""}`}>
	// 		{children}
	// 	</button>
	// );

	return (
		<button className={clsx(["base", color, disabled && "disabled"])}>
			{children}
		</button>
	);
}
