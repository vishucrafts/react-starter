// Takes inputs explicitly
// Same inputs always return same outputs
// Should not use globals
// Should not make network request // side effects
// Should not mutate input
export function add(a: number, b: number) {
	return a + b;
}

add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3

// 1. impure example
// export function addRandom(a: number) {
// 	return a + Math.random();
// }

// console.log(addRandom(1)); // 1.123123
// console.log(addRandom(1)); // 1.123123

// 2. impure example

// let counter = 0;
// export function increment() {
// 	counter++;
// 	return counter;
// }

// increment(); // 1
// increment(); // 2

// 3. impure example

// function startTimer() {
// 	let counter = 0;
// 	setInterval(() => {
// 		console.log(counter++);
// 	}, 1000);
// }

// startTimer();

// 4. impure example

const arr = [1, 2, 3, 4, 5];

export function addToArray(arr: number[], a: number) {
	arr.push(a);
}

arr; // [1, 2, 3, 4, 5]
addToArray(arr, 6);
arr; // [1, 2, 3, 4, 5, 6]
