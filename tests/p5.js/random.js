/* global randomGaussian */

suite("randomGaussian", () => {
	benchmark("p5.randomGaussian", () => {
		randomGaussian(1.2, 2.2);
	});
});