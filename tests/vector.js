/* global createVector */

suite("createVector", () => {
	benchmark("p5.createVector", () => {
		createVector();
	});

	benchmark("p5.createVector 1D", () => {
		createVector(1.2);
	});

	benchmark("p5.createVector 2D", () => {
		createVector(1.2, 2.2);
	});

	benchmark("p5.createVector 3D", () => {
		createVector(1.2, 2.2, 3.2);
	});
});