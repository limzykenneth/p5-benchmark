/* global random, randomSeed, randomGaussian */

suite("random", () => {
	benchmark("p5.random", () => {
		random();
	});

	benchmark("p5.random Range", () => {
		random(1.2, 2.2);
	});

	benchmark("p5.random Seeded", () => {
		random();
	}, {
		setup(){
			randomSeed(1.2);
		}
	});
});

suite("randomSeed", () => {
	benchmark("p5.randomSeed", () => {
		randomSeed(1.2);
	});
});

suite("randomGaussian", () => {
	benchmark("p5.randomGaussian", () => {
		randomGaussian(1.2, 2.2);
	});
});