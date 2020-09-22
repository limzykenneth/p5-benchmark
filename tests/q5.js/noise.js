/* global noiseSeed */

suite("noiseSeed", () => {
	benchmark("q5.noiseSeed", () => {
		noiseSeed(12);
	});
});