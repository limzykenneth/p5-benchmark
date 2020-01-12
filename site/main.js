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

	const labels = _.reduce(bench.results, (col, result) => {
		if(!_.find(col, (el) => el === result.browser)){
			col.push(result.browser);
		}
		return col;
	}, []);

	console.log(labels);
	_.each(results, (result, key) => {
		console.log(result);
		const ctx = document.getElementById(key).getContext("2d");
		let colorCount = 0;

		const datasets = _.reduce(result, (col, r, k) => {
			col.push({
				label: k,
				data: _.reduce(r, (c, r2) => {
					const index = _.indexOf(labels, r2.browser)
					c[index] = r2.opsPerSecond;
					return c;
				}, []),
				backgroundColor: [
					backgroundColors[colorCount],
					backgroundColors[colorCount],
				],
				borderColor: [
					borderColors[colorCount],
					borderColors[colorCount],
				],
				borderWidth: 1
			});

			colorCount++;
			return col;
		}, []);

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