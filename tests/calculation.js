/* global wasm, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt */

suite("abs", () => {
	benchmark("p5.abs", () => {
		abs(1.2);
	});

	benchmark("p5.wasm.abs", () => {
		wasm.abs(1.2);
	});
});

suite("ceil", () => {
	benchmark("p5.ceil", () => {
		ceil(1.2);
	});

	benchmark("p5.wasm.ceil", () => {
		wasm.ceil(1.2);
	});
});

suite("constrain", () => {
	benchmark("p5.constrain", () => {
		constrain(1.2, 0, 1);
	});

	benchmark("p5.wasm.constrain", () => {
		wasm.constrain(1.2, 0, 1);
	});
});

suite("dist", () => {
	benchmark("p5.dist", () => {
		dist(2, 4, 6, 8);
	});

	benchmark("p5.dist 3D", () => {
		dist(2, 4, 6, 8, 10, 12);
	});

	benchmark("p5.wasm.dist", () => {
		wasm.dist(2, 4, 6, 8);
	});

	benchmark("p5.wasm.dist 3D", () => {
		wasm.dist3d(2, 4, 6, 8, 10, 12);
	});
});

suite("exp", () => {
	benchmark("p5.exp", () => {
		exp(1.2);
	});

	benchmark("p5.wasm.exp", () => {
		wasm.exp(1.2);
	});
});

suite("floor", () => {
	benchmark("p5.floor", () => {
		floor(1.2);
	});

	benchmark("p5.wasm.floor", () => {
		wasm.floor(1.2);
	});
});

suite("lerp", () => {
	benchmark("p5.lerp", () => {
		lerp(0.5, 0, 100);
	});

	benchmark("p5.wasm.lerp", () => {
		wasm.lerp(0.5, 0, 100);
	});
});

suite("log", () => {
	benchmark("p5.log", () => {
		log(1.2);
	});

	benchmark("p5.wasm.log", () => {
		wasm.log(1.2);
	});
});

suite("mag", () => {
	benchmark("p5.mag", () => {
		mag(3, 4);
	});

	benchmark("p5.wasm.mag", () => {
		wasm.mag(3, 4);
	});
});

suite("map", () => {
	benchmark("p5.map", () => {
		map(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.map constrained", () => {
		map(1.2, 0, 1, 0, 100, true);
	});

	benchmark("p5.wasm.map", () => {
		wasm.map(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.wasm.map constrained", () => {
		wasm.map(1.2, 0, 1, 0, 100, true);
	});
});

suite("max", () => {
	benchmark("p5.max", () => {
		max(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.max (Array)", () => {
		max([0.2, 0, 1, 0, 100]);
	});
});

suite("min", () => {
	benchmark("p5.min", () => {
		min(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.min (Array)", () => {
		min([0.2, 0, 1, 0, 100]);
	});
});

suite("norm", () => {
	benchmark("p5.norm", () => {
		norm(50, 0, 100);
	});

	benchmark("p5.wasm.norm", () => {
		wasm.norm(50, 0, 100);
	});
});

suite("pow", () => {
	benchmark("p5.pow", () => {
		pow(1.2, 3);
	});

	benchmark("p5.wasm.pow", () => {
		wasm.pow(1.2, 3);
	});
});

suite("round", () => {
	benchmark("p5.round", () => {
		round(22.2);
	});

	benchmark("p5.round with decimals", () => {
		round(22.2, 10);
	});

	benchmark("p5.wasm.round", () => {
		wasm.round(22.2);
	});

	benchmark("p5.wasm.round with decimals", () => {
		wasm.round_decimal(22.2, 10);
	});
});

suite("sq", () => {
	benchmark("p5.sq", () => {
		sq(1.2);
	});

	benchmark("p5.wasm.sq", () => {
		wasm.sq(1.2);
	});
});

suite("sqrt", () => {
	benchmark("p5.sqrt", () => {
		sqrt(1.2);
	});

	benchmark("p5.wasm.sqrt", () => {
		wasm.sqrt(1.2);
	});
});

// Not released yet
suite("fract", () => {
	// benchmark("p5.fract", () => {
	// 	fract(1.2);
	// });

	benchmark("p5.wasm.fract", () => {
		wasm.fract(1.2);
	});
});
