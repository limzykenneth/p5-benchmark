/* global wasm */

(async function(){
	await window.p5WasmReady;

	suite("random", () => {
		benchmark("p5.wasm.random", () => {
			wasm.random();
		});

		benchmark("p5.wasm.random_range", () => {
			wasm.random_range(1.2, 2.2);
		});
	});

	suite("random_seed", () => {
		benchmark("p5.wasm.random", () => {
			wasm.random_seed(1.2);
		});
	});
})();