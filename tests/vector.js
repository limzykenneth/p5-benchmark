/* global createVector */
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
});

suite("Vector.toString", () => {
	let v;
	benchmark("p5.Vector.toString", () => {
		v.toString();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});
});