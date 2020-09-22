suite("noop", () => {
	benchmark("noop", () => {
	});
}, {
	onComplete: () => {
		new p5();
	}
});