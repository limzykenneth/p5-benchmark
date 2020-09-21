/* global filter, image, THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE */

(async function(){
	await window._ready;

	suite("filter", function(){
		benchmark("q5.filter(THRESHOLD)", function(){
			image(window.img, 0, 0);
			filter(THRESHOLD);
		});

		benchmark("q5.filter(GRAY)", function(){
			image(window.img, 0, 0);
			filter(GRAY);
		});

		benchmark("q5.filter(OPAQUE)", function(){
			image(window.img, 0, 0);
			filter(OPAQUE);
		});

		benchmark("q5.filter(INVERT)", function(){
			image(window.img, 0, 0);
			filter(INVERT);
		});

		benchmark("q5.filter(POSTERIZE)", function(){
			image(window.img, 0, 0);
			filter(POSTERIZE, 3);
		});

		benchmark("q5.filter(BLUR)", function(){
			image(window.img, 0, 0);
			filter(BLUR, 10);
		});

		benchmark("q5.filter(ERODE)", function(){
			image(window.img, 0, 0);
			filter(ERODE);
		});

		benchmark("q5.filter(DILATE)", function(){
			image(window.img, 0, 0);
			filter(DILATE);
		});
	});
})();