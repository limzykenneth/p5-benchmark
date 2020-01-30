/* global wasm, createVector */
/* eslint no-unused-vars: "off" */

suite("createVector", () => {
	benchmark("p5.createVector", () => {
		let v = createVector();
	});

	benchmark("p5.createVector 1D", () => {
		let v = createVector(1.2);
	});

	benchmark("p5.createVector 2D", () => {
		let v = createVector(1.2, 2.2);
	});

	benchmark("p5.createVector 3D", () => {
		let v = createVector(1.2, 2.2, 3.2);
	});

	benchmark("p5.wasm.createVector", () => {
		let v = wasm.create_vector();
		v.free();
	});

	benchmark("p5.wasm.createVector 1D", () => {
		let v = wasm.create_vector_1d(1.2);
		v.free();
	});

	benchmark("p5.wasm.createVector 2D", () => {
		let v = wasm.create_vector_2d(1.2, 2.2);
		v.free();
	});

	benchmark("p5.wasm.createVector 3D", () => {
		let v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		v.free();
	});
});

suite("Vector.toString", () => {
	let v;

	benchmark("p5.Vector.toString", () => {
		v.toString();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.toString", () => {
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

	benchmark("p5.Vector.set vector", () => {
		v.set(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.set 1D", () => {
		v.set(4.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.set 2D", () => {
		v.set(4.2, 5.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.set 3D", () => {
		v.set(4.2, 5.2, 6.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.set vector", () => {
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

	benchmark("p5.wasm.Vector.set 1D", () => {
		v.set_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.set 2D", () => {
		v.set_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.set 3D", () => {
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

	benchmark("p5.Vector.copy", () => {
		v2 = v.copy();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

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

	benchmark("p5.Vector.add vector", () => {
		v.add(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.add 1D", () => {
		v.add(4.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.add 2D", () => {
		v.add(4.2, 5.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.add 3D", () => {
		v.add(4.2, 5.2, 6.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	// WASM
	benchmark("p5.wasm.Vector.add vector", () => {
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

	benchmark("p5.wasm.Vector.add 1D", () => {
		v.add_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.add 2D", () => {
		v.add_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.add 3D", () => {
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

	benchmark("p5.Vector.sub vector", () => {
		v.sub(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.sub 1D", () => {
		v.sub(4.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.sub 2D", () => {
		v.sub(4.2, 5.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.sub 3D", () => {
		v.sub(4.2, 5.2, 6.2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	// WASM
	benchmark("p5.wasm.Vector.sub vector", () => {
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

	benchmark("p5.wasm.Vector.sub 1D", () => {
		v.sub_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.sub 2D", () => {
		v.sub_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.sub 3D", () => {
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
	let v2;

	benchmark("p5.Vector.mult", () => {
		v.mult(2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.mult static", () => {
		v2 = p5.Vector.mult(v, 2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.mult static target", () => {
		p5.Vector.mult(v, 2.0, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	// WASM
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
	let v2;

	benchmark("p5.Vector.div", () => {
		v.div(2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.div static", () => {
		v2 = p5.Vector.div(v, 2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.Vector.div static target", () => {
		p5.Vector.div(v, 2.0, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

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
	let v2;

	benchmark("p5.Vector.mag", () => {
		v2 = v.mag();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.mag", () => {
		v2 = v.mag();
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
	let v2;

	benchmark("p5.Vector.magSq", () => {
		v2 = v.magSq();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.magSq", () => {
		v2 = v.mag_sq();
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
	let v3;

	benchmark("p5.Vector.dot", () => {
		v.dot(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.dot static", () => {
		v3 = p5.Vector.dot(v, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	// WASM
	benchmark("p5.wasm.Vector.dot vector", () => {
		v3 = v.dot_vector(v2);
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

	benchmark("p5.wasm.Vector.dot 1D", () => {
		v3 = v.dot_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.dot 2D", () => {
		v3 = v.dot_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.dot 3D", () => {
		v3 = v.dot_3d(4.2, 5.2, 6.2);
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

	benchmark("p5.Vector.cross", () => {
		v3 = v.cross(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.cross static", () => {
		v3 = p5.Vector.cross(v, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

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
	let v3;

	benchmark("p5.Vector.dist", () => {
		v3 = v.dist(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.dist static", () => {
		v3 = p5.Vector.dist(v, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.wasm.Vector.dist", () => {
		v3 = v.dist(v2);
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

	benchmark("p5.Vector.normalize", () => {
		v.normalize();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

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

	benchmark("p5.Vector.limit", () => {
		v.limit(0.5);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

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

	benchmark("p5.Vector.setMag", () => {
		v.setMag(2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.setMag", () => {
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
	let v2;

	benchmark("p5.Vector.heading", () => {
		v2 = v.heading();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.heading", () => {
		v2 = v.heading();
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

	benchmark("p5.Vector.rotate", () => {
		v.rotate(2.0);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

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
	let v3;

	benchmark("p5.Vector.angleBetween", () => {
		v3 = v.angleBetween(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.wasm.Vector.angleBetween", () => {
		v3 = v.angle_between(v2);
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
	let v3;

	benchmark("p5.Vector.lerp", () => {
		v.lerp(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	benchmark("p5.Vector.lerp static", () => {
		v3 = p5.Vector.lerp(v, v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	// WASM
	benchmark("p5.wasm.Vector.lerp vector", () => {
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

	benchmark("p5.wasm.Vector.lerp 1D", () => {
		v.lerp_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.lerp 2D", () => {
		v.lerp_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.lerp 3D", () => {
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
	let v2;

	benchmark("p5.Vector.array", () => {
		v2 = v.array();
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
		}
	});

	benchmark("p5.wasm.Vector.array", () => {
		v2 = v.array();
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
	let v3;

	benchmark("p5.Vector.equals", () => {
		v3 = v.equals(v2);
	}, {
		setup(){
			v = createVector(1.2, 2.2, 3.2);
			v2 = createVector(4.2, 5.2, 6.2);
		}
	});

	// WASM
	benchmark("p5.wasm.Vector.equals vector", () => {
		v3 = v.equals_vector(v2);
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

	benchmark("p5.wasm.Vector.equals 1D", () => {
		v3 = v.equals_1d(4.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.equals 2D", () => {
		v3 = v.equals_2d(4.2, 5.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});

	benchmark("p5.wasm.Vector.equals 3D", () => {
		v3 = v.equals_3d(4.2, 5.2, 6.2);
	}, {
		setup(){
			v = wasm.create_vector_3d(1.2, 2.2, 3.2);
		},
		teardown(){
			v.free();
		}
	});
});

suite("Vector.fromAngle", () => {
	let v;

	benchmark("p5.Vector.fromAngle", () => {
		v = p5.Vector.fromAngle(2.0);
	});

	benchmark("p5.Vector.fromAngle length", () => {
		v = p5.Vector.fromAngle(2.0, 5.0);
	});
});

suite("Vector.fromAngles", () => {
	let v;

	benchmark("p5.Vector.fromAngles", () => {
		v = p5.Vector.fromAngles(2.0, 3.0);
	});

	benchmark("p5.Vector.fromAngles length", () => {
		v = p5.Vector.fromAngles(2.0, 3.0, 5.0);
	});
});

suite("Vector.random2D", () => {
	let v;

	benchmark("p5.Vector.random2D", () => {
		v = p5.Vector.random2D();
	});
});

suite("Vector.random3D", () => {
	let v;

	benchmark("p5.Vector.random3D", () => {
		v = p5.Vector.random3D();
	});
});