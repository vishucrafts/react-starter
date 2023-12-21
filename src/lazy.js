function onClick(callback) {
	callback();
}

onClick(function () {
	console.log("click");
});

async function useEffect(callback, deps) {
	await callback();
	/// some more code but this will be run later
	// if callback is async it will be added to microtask queue. When callstack is empty it will be executed
}

function useEffect(callback, deps) {
	callback().then(() => {
		// react wants do something
	});
}

// this is good
function useEffect(callback, deps) {
	callback();
	// Rest of the code is ran immediately -> backgroud is fetching
}
