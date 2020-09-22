/* global createVector */

suite("Vector.rotate", () => {
	let v;

	benchmark("q5.Vector.rotate", () => {
		v.rotate(2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});
});