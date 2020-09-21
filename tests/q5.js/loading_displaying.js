/* global tint, image */

(async function(){
	await window._ready;

	suite("tint", function(){
		benchmark("q5.tint", function(){
			tint(0, 153, 204);
			image(window.img, 0, 0);
		});
	});
})();