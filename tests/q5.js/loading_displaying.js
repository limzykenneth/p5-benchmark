/* global tint, image */

(async () => {
	await window._ready;

	suite("tint", () => {
		benchmark("q5.tint", () => {
			tint(0, 153, 204);
			image(window.img, 0, 0);
		});
	});
})();