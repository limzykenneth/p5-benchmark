/* global color, red, green, blue, alpha, hue, saturation, brightness, lightness, colorMode, lerpColor */

suite("color", () => {
	benchmark("p5.color", () => {
		color(100, 200, 255, 50);
	});
});

suite("red", () => {
	let c;

	benchmark("p5.red", () => {
		red(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("green", () => {
	let c;
	
	benchmark("p5.green", () => {
		green(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("blue", () => {
	let c;
	
	benchmark("p5.blue", () => {
		blue(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("alpha", () => {
	let c;
	
	benchmark("p5.alpha", () => {
		alpha(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("hue", () => {
	let c;
	
	benchmark("p5.hue", () => {
		hue(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("saturation", () => {
	let c;
	
	benchmark("p5.saturation", () => {
		saturation(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("brightness", () => {
	let c;
	
	benchmark("p5.brightness", () => {
		brightness(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("lightness", () => {
	let c;
	
	benchmark("p5.lightness", () => {
		lightness(c);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("colorMode", () => {
	benchmark("p5.colorMode", () => {
		colorMode("rgb");
	});
});

suite("lerpColor", () => {
	let c1, c2;

	benchmark("p5.lerpColor", () => {
		lerpColor(c1, c2, 0.5);
	}, {
		setup(){
			c1 = color(100, 200, 255, 50);
			c2 = color(0, 100, 155, 100);
		}
	});
});

suite("Color.toString()", () => {
	let c;

	benchmark("p5.toString() rgba", () => {
		c.toString("rgba");
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});

	benchmark("p5.toString() #rrggbbaa", () => {
		c.toString("#rrggbbaa");
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});

	benchmark("p5.toString() hsba", () => {
		c.toString("hsba");
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});

	benchmark("p5.toString() hsla", () => {
		c.toString("hsla");
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("Color.setRed()", () => {
	let c;

	benchmark("p5.Color.setRed", () => {
		c.setRed(220);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("Color.setGreen()", () => {
	let c;

	benchmark("p5.Color.setGreen", () => {
		c.setGreen(220);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("Color.setBlue()", () => {
	let c;

	benchmark("p5.Color.setBlue", () => {
		c.setBlue(220);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});

suite("Color.setAlpha()", () => {
	let c;

	benchmark("p5.Color.setAlpha", () => {
		c.setAlpha(220);
	}, {
		setup(){
			c = color(100, 200, 255, 50);
		}
	});
});