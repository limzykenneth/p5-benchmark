fetch("./assets/results/benchmark.json").then((res) => res.json()).then((bench) => {
	const benchmarkTemplate = _.template(document.querySelector("#benchmark-template").innerHTML);

	const meta = bench.meta;
	meta.date = moment(meta.date);
	meta.formattedDate = function(){
		return meta.date.format("MMMM Do YYYY, h:mm:ss a");
	};

	const results = _.reduce(bench.results, (col, result) => {
		if(!_.isObject(col[result.suite])){
			col[result.suite] = {};
		}
		if(!_.isArray(col[result.suite][result.name])){
			col[result.suite][result.name] = [];
		}
		col[result.suite][result.name].push(result);
		col[result.suite][result.name] = _.sortBy(col[result.suite][result.name], "browser");

		return col;
	}, {});

	const html = benchmarkTemplate({
		meta,
		results
	});
	document.querySelector("#benchmarks").innerHTML += html;
});