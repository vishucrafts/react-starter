import { useEffect, useRef } from "react";

type Props = {
	time: number;
	setTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Timer(props: Props) {
	const { time, setTime } = props;

	const timerRef = useRef(0);

	useEffect(() => {
		// Since we already wrote the code
		// startTimer();
		// Component mounts
		// Component unmounts
		// Component mounts
		const intervalId = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);

		// cleanup function
		return () => {
			clearInterval(intervalId);
		};
	}, [setTime]);

	function startTimer() {
		if (timerRef.current) return;

		timerRef.current = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	}

	function stopTimer() {
		clearInterval(timerRef.current);
		timerRef.current = 0;
	}

	return (
		<div>
			<span>Time elapsed: {time}</span>
			<div className="flex gap-2">
				<button className="p-0.5 rounded-md bg-green-400" onClick={startTimer}>
					Start
				</button>
				<button className="p-0.5 rounded-md bg-red-400" onClick={stopTimer}>
					Stop
				</button>
			</div>
		</div>
	);
}
