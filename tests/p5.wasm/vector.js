/* global wasm */

(async function(){
	await window.p5WasmReady;

	suite("createVector", () => {
		benchmark("p5.wasm.create_vector", () => {
			let v = wasm.create_vector();
			v.free();
		});

		benchmark("p5.wasm.create_vector_1d", () => {
			let v = wasm.create_vector_1d(1.2);
			v.free();
		});

		benchmark("p5.wasm.create_vector_2d", () => {
			let v = wasm.create_vector_2d(1.2, 2.2);
			v.free();
		});

		benchmark("p5.wasm.create_vector_3d", () => {
			let v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			v.free();
		});
	});

	suite("Vector.toString", () => {
		let v;

		benchmark("p5.wasm.Vector.to_string", () => {
			v.to_string();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.set", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.set_vector", () => {
			v.set_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.set_1d", () => {
			v.set_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.set_2d", () => {
			v.set_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.set_3d", () => {
			v.set_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.copy", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.copy", () => {
			v2 = v.copy();
			v2.free();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.add", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.add_vector", () => {
			v.add_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.add_1d", () => {
			v.add_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.add_2d", () => {
			v.add_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.add_3d", () => {
			v.add_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.sub", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.sub_vector", () => {
			v.sub_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.sub_1d", () => {
			v.sub_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.sub_2d", () => {
			v.sub_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.sub_3d", () => {
			v.sub_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.mult", () => {
		let v;

		benchmark("p5.wasm.Vector.mult", () => {
			v.mult(2.0);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.div", () => {
		let v;

		benchmark("p5.wasm.Vector.div", () => {
			v.div(2.0);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.mag", () => {
		let v;

		benchmark("p5.wasm.Vector.mag", () => {
			v.mag();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.magSq", () => {
		let v;

		benchmark("p5.wasm.Vector.mag_sq", () => {
			v.mag_sq();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.dot", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.dot_vector", () => {
			v.dot_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.dot_1d", () => {
			v.dot_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.dot_2d", () => {
			v.dot_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.dot_3d", () => {
			v.dot_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.cross", () => {
		let v;
		let v2;
		let v3;

		benchmark("p5.wasm.Vector.cross", () => {
			v3 = v.cross(v2);
			v3.free();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});
	});

	suite("Vector.dist", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.dist", () => {
			v.dist(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});
	});

	suite("Vector.normalize", () => {
		let v;

		benchmark("p5.wasm.Vector.normalize", () => {
			v.normalize();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.limit", () => {
		let v;

		benchmark("p5.wasm.Vector.limit", () => {
			v.limit(0.5);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.setMag", () => {
		let v;

		benchmark("p5.wasm.Vector.set_mag", () => {
			v.set_mag(2.0);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.heading", () => {
		let v;

		benchmark("p5.wasm.Vector.heading", () => {
			v.heading();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.rotate", () => {
		let v;

		benchmark("p5.wasm.Vector.rotate", () => {
			v.rotate(2.0);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.angleBetween", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.angle_between", () => {
			v.angle_between(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});
	});

	suite("Vector.lerp", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.lerp_vector", () => {
			v.lerp_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.lerp_1d", () => {
			v.lerp_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.lerp_2d", () => {
			v.lerp_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.lerp_3d", () => {
			v.lerp_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.array", () => {
		let v;

		benchmark("p5.wasm.Vector.array", () => {
			v.array();
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});

	suite("Vector.equals", () => {
		let v;
		let v2;

		benchmark("p5.wasm.Vector.equals_vector", () => {
			v.equals_vector(v2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
				v2 = wasm.create_vector_3d(4.2, 5.2, 6.2);
			},
			teardown(){
				v.free();
				v2.free();
			}
		});

		benchmark("p5.wasm.Vector.equals_1d", () => {
			v.equals_1d(4.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.equals_2d", () => {
			v.equals_2d(4.2, 5.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});

		benchmark("p5.wasm.Vector.equals_3d", () => {
			v.equals_3d(4.2, 5.2, 6.2);
		}, {
			setup(){
				v = wasm.create_vector_3d(1.2, 2.2, 3.2);
			},
			teardown(){
				v.free();
			}
		});
	});
})();