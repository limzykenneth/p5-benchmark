new p5();

window.p5WasmReady.then(() => {
	const canvas = document.querySelector("#defaultCanvas0");
	if(canvas !== null) canvas.remove();
	new p5();
	return Promise.resolve();
});