/* global filter, image, THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE */

(async () => {
	await window._ready;

	suite("filter", () => {
		benchmark("p5.filter(THRESHOLD)", () => {
			filter(THRESHOLD);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(GRAY)", () => {
			filter(GRAY);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(OPAQUE)", () => {
			filter(OPAQUE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(INVERT)", () => {
			filter(INVERT);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(POSTERIZE)", () => {
			filter(POSTERIZE, 3);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(BLUR)", () => {
			filter(BLUR, 10);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(ERODE)", () => {
			filter(ERODE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});

		benchmark("p5.filter(DILATE)", () => {
			filter(DILATE);
		}, {
			onCycle(){
				image(window.img, 0, 0);
			}
		});
	});
})();