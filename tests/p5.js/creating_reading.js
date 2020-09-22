/* global color */

suite("color", () => {
	benchmark("p5.color(r, g, b)", () => {
		color(50, 100, 200);
	})
});