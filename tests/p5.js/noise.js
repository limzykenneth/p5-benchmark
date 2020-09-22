/* global noise, noiseSeed */

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
});

suite("noiseSeed", () => {
	benchmark("p5.noiseSeed", () => {
		noiseSeed(12);
	});
});