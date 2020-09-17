suite("noop", function(){
	benchmark("noop", function(){
	});
}, {
	onComplete: function(){
		new p5();
	}
});