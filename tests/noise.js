/* global wasm, noise */

suite("noise", () => {
	benchmark("p5.noise", () => {
		noise(1.2);
	});

	benchmark("p5.noise 2D", () => {
		noise(1.2, 2.2);
	});

	benchmark("p5.noise 3D", () => {
		noise(1.2, 2.2, 3.2);
	});

	benchmark("p5.wasm.noise", () => {
		wasm.noise(1.2);
	});

	benchmark("p5.wasm.noise 2D", () => {
		wasm.noise2d(1.2, 2.2);
	});

	benchmark("p5.wasm.noise 3D", () => {
		wasm.noise3d(1.2, 2.2, 3.2);
	});
});