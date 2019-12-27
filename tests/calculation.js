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

suite("norm", () => {
	benchmark("p5.norm", () => {
		p5.prototype.norm(50, 0, 100);
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