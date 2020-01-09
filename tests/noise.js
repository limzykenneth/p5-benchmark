// BUSY WORK START
// Busy work to achieve sync promise (karma have no way of async startup)
// Only use if you absolutely need some promise to resolve first!
busyWork([window.p5WasmReady]);

function busyWork(promises){
	const p = Promise.all(promises);

	let work = true;
	while(work){
		work = p.isFulfilled();
	}
}
// BUSY WORK END

suite("noise", () => {
	benchmark("p5.noise", () => {
		p5.prototype.noise(1.2);
	});

	benchmark("p5.noise 2D", () => {
		p5.prototype.noise(1.2, 2.2);
	});

	benchmark("p5.noise 3D", () => {
		p5.prototype.noise(1.2, 2.2, 3.2);
	});

	benchmark("p5.wasm.noise", () => {
		p5.prototype.wasm.noise(1.2);
	});

	benchmark("p5.wasm.noise 2D", () => {
		p5.prototype.wasm.noise(1.2, 2.2);
	});

	benchmark("p5.wasm.noise 3D", () => {
		p5.prototype.wasm.noise(1.2, 2.2, 3.2);
	});
});