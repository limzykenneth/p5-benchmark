new p5();

window.p5WasmReady.then(() => {
	document.querySelector("#defaultCanvas0").remove();
	new p5();
	return Promise.resolve();
});