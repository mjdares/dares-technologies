import { useState, useEffect } from 'react';

export const useCounter = (end, duration = 2000, delay = 0) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isVisible) return;

		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);

			setCount(Math.floor(progress * end));

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		const timeoutId = setTimeout(() => {
			window.requestAnimationFrame(step);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [end, duration, delay, isVisible]);

	return [count, setIsVisible];
};

export default useCounter;
