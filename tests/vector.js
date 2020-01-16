/* global wasm, createVector */
/* eslint no-unused-vars: "off" */

suite("createVector", () => {
	benchmark("p5.createVector", () => {
		let v = createVector();
	});

	benchmark("p5.createVector 1D", () => {
		let v = createVector(1.2);
	});

	benchmark("p5.createVector 2D", () => {
		let v = createVector(1.2, 2.2);
	});

	benchmark("p5.createVector 3D", () => {
		let v = createVector(1.2, 2.2, 3.2);
	});

	benchmark("p5.wasm.createVector", () => {
		let v = wasm.create_vector();
		v.free();
	});

	benchmark("p5.wasm.createVector 1D", () => {
		let v = wasm.create_vector_1d(1.2);
		v.free();
	});

	benchmark("p5.wasm.createVector 2D", () => {
		let v = wasm.create_vector_2d(1.2, 2.2);
		v.free();
	});

	benchmark("p5.wasm.createVector 3D", () => {
		let v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		v.free();
	});
});