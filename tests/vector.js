/* global createVector */
/* eslint no-unused-vars: "off" */

(async function(){
	await window.p5WasmReady;

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
})();