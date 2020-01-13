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

	const backgroundColors = [
		'rgba(255, 99, 132, 0.2)',
		'rgba(54, 162, 235, 0.2)',
		'rgba(255, 206, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(153, 102, 255, 0.2)',
		'rgba(255, 159, 64, 0.2)'
	];
	const borderColors = [
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(75, 192, 192, 1)',
		'rgba(153, 102, 255, 1)',
		'rgba(255, 159, 64, 1)'
	];
	const browserList = _.sortBy(_.uniq(_.map(bench.results, (result) => result.browser)));

	_.each(results, (result, key) => {
		console.log(result);

		const labels = _.reduce(result, (col, r, key) => {
			col.push(key);
			return col;
		}, []);

		const ctx = document.getElementById(key).getContext("2d");

		const datasets = _.map(browserList, (browser, i) => {
			return _.reduce(result, (col, r) => {
				_.each(r, (r2) => {
					if(r2.browser === browser){
						col.label = r2.browser;
						if(!Array.isArray(col.data)){
							col.data = [];
						}
						col.data.push(r2.opsPerSecond);
					}
				});

				col.backgroundColor = backgroundColors[i];
				col.borderColor = borderColors[i];
				col.borderWidth = 1;

				return col;
			}, {});
		});

		new Chart(ctx, {
			type: "bar",
			data: {
				labels: labels,
				datasets: datasets
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
	});
});