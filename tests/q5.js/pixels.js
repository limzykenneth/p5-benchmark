/* global filter, image, THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE */

(async function(){
	await window._ready;

	suite("filter", function(){
		benchmark("q5.filter(THRESHOLD)", function(){
			filter(THRESHOLD);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(GRAY)", function(){
			filter(GRAY);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(OPAQUE)", function(){
			filter(OPAQUE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(INVERT)", function(){
			filter(INVERT);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(POSTERIZE)", function(){
			filter(POSTERIZE, 3);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(BLUR)", function(){
			filter(BLUR, 10);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(ERODE)", function(){
			filter(ERODE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("q5.filter(DILATE)", function(){
			filter(DILATE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});
	});
})();