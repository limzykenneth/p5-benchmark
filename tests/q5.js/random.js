/* global randomGaussian */

suite("randomGaussian", () => {
	benchmark("q5.randomGaussian", () => {
		randomGaussian(1.2, 2.2);
	});
});