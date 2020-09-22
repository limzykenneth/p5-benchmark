/* global color */

suite("color", () => {
	benchmark("q5.color(r, g, b)", () => {
		color(50, 100, 200);
	})
});