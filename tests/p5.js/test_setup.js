/* global createCanvas, loadImage, pixelDensity */

function setup(){
	createCanvas(100, 100);
	pixelDensity(1);

	window._ready = new Promise((resolve, reject) => {
		window.img = loadImage("/painting.png", function(){
			resolve();
		}, function(err){
			reject(err);
		});
	});
}