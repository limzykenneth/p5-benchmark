/* global createVector */

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

new p5();

// Benchmarks
suite("createVector", () => {
	benchmark("p5.createVector", () => {
		createVector();
	});

	benchmark("p5.createVector 1D", () => {
		createVector(1.2);
	});

	benchmark("p5.createVector 2D", () => {
		createVector(1.2, 2.2);
	});

	benchmark("p5.createVector 3D", () => {
		createVector(1.2, 2.2, 3.2);
	});
});