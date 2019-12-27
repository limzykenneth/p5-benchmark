// BUSY WORK START
// Busy work to achieve sync promise (karma have no way of async startup)
// Only use if you absolutely need some promise to resolve first!
// busyWork([]);

// function busyWork(promises){
// 	const p = Promise.all(promises);

// 	let work = true;
// 	while(work){
// 		work = p.isFulfilled();
// 	}
// }
// BUSY WORK END

// Benchmarks
suite("abs", () => {
	benchmark("p5.abs", () => {
		p5.prototype.abs(1.2);
	});
});

suite("ceil", () => {
	benchmark("p5.ceil", () => {
		p5.prototype.ceil(1.2);
	});
});

suite("constrain", () => {
	benchmark("p5.constrain", () => {
		p5.prototype.constrain(1.2, 0, 1);
	});
});

suite("dist", () => {
	benchmark("p5.dist", () => {
		p5.prototype.dist(2, 4, 6, 8);
	});
});

suite("exp", () => {
	benchmark("p5.exp", () => {
		p5.prototype.exp(1.2);
	});
});

suite("floor", () => {
	benchmark("p5.floor", () => {
		p5.prototype.floor(1.2);
	});
});

suite("lerp", () => {
	benchmark("p5.lerp", () => {
		p5.prototype.lerp(0.5, 0, 100);
	});
});

suite("log", () => {
	benchmark("p5.log", () => {
		p5.prototype.log(1.2);
	});
});

suite("mag", () => {
	benchmark("p5.mag", () => {
		p5.prototype.mag(3, 4);
	});
});

suite("map", () => {
	benchmark("p5.map", () => {
		p5.prototype.map(0.2, 0, 1, 0, 100);
	});
});

suite("max", () => {
	benchmark("p5.max", () => {
		p5.prototype.max(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.max (Array)", () => {
		p5.prototype.max([0.2, 0, 1, 0, 100]);
	});
});

suite("min", () => {
	benchmark("p5.min", () => {
		p5.prototype.min(0.2, 0, 1, 0, 100);
	});

	benchmark("p5.min (Array)", () => {
		p5.prototype.min([0.2, 0, 1, 0, 100]);
	});
});

suite("norm", () => {
	benchmark("p5.norm", () => {
		p5.prototype.norm(50, 0, 100);
	});
});

suite("pow", () => {
	benchmark("p5.pow", () => {
		p5.prototype.pow(1.2, 3);
	});
});

suite("round", () => {
	benchmark("p5.round", () => {
		p5.prototype.round(22.2);
	});

	benchmark("p5.round with decimals", () => {
		p5.prototype.round(22.2, 10);
	});
});

suite("sq", () => {
	benchmark("p5.sq", () => {
		p5.prototype.sq(1.2);
	});
});

suite("sqrt", () => {
	benchmark("p5.sqrt", () => {
		p5.prototype.sqrt(1.2);
	});
});

// Not released yet
// suite("fract", () => {
// 	benchmark("p5.fract", () => {
// 		p5.prototype.fract(1.2);
// 	});

// 	benchmark("p5.wasm.fract", () => {
// 		p5.prototype.wasm.fract(1.2);
// 	});
// });