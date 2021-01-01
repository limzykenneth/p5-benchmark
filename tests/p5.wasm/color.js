/* global wasm */

(async function(){
	await window.p5WasmReady;

	suite("color", () => {
		benchmark("p5.wasm.color", () => {
			let c = wasm.color(100, 200, 255, 50);
			c.free();
		});
	});

	suite("red", () => {
		let c;

		benchmark("p5.wasm.red", () => {
			wasm.red(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("green", () => {
		let c;

		benchmark("p5.wasm.green", () => {
			wasm.green(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("blue", () => {
		let c;

		benchmark("p5.wasm.blue", () => {
			wasm.blue(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("alpha", () => {
		let c;

		benchmark("p5.wasm.alpha", () => {
			wasm.alpha(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("hue", () => {
		let c;

		benchmark("p5.wasm.hue", () => {
			wasm.hue(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("saturation", () => {
		let c;

		benchmark("p5.wasm.saturation", () => {
			wasm.saturation(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("brightness", () => {
		let c;

		benchmark("p5.wasm.brightness", () => {
			wasm.brightness(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("lightness", () => {
		let c;

		benchmark("p5.wasm.lightness", () => {
			wasm.lightness(c);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("colorMode", () => {
		benchmark("p5.wasm.color_mode", () => {
			wasm.color_mode("rgb");
		});
	});

	suite("lerpColor", () => {
		let c1, c2;

		benchmark("p5.wasm.lerp_color", () => {
			let c = wasm.lerp_color(c1, c2);
			c.free();
		}, {
			setup(){
				c1 = wasm.color(100, 200, 255, 50);
				c2 = wasm.color(0, 100, 155, 100);
			},
			teardown(){
				c1.free();
				c2.free();
			}
		});
	});

	// suite("Color.toString()", () => {
		
	// });

	suite("Color.setRed()", () => {
		let c;

		benchmark("p5.wasm.Color.set_red", () => {
			c.set_red(220);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("Color.setGreen()", () => {
		let c;

		benchmark("p5.wasm.Color.set_green", () => {
			c.set_green(220);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("Color.setBlue()", () => {
		let c;

		benchmark("p5.wasm.Color.set_blue", () => {
			c.set_blue(220);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});

	suite("Color.setAlpha()", () => {
		let c;

		benchmark("p5.wasm.Color.set_alpha", () => {
			c.set_alpha(220);
		}, {
			setup(){
				c = wasm.color(100, 200, 255, 50);
			},
			teardown(){
				c.free();
			}
		});
	});
})();