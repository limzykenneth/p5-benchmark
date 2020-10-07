<template>
	<div class="graph">
		<canvas class="graph-canvas"></canvas>
	</div>
</template>

<script>
export default{
	name: "BenchmarkGraph",
	props: {
	},
	data: function(){
		return {
			backgroundColors: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColors: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			chart: {}
		};
	},
	computed: {
		ctx: function(){
			return this.$el.querySelector(".graph-canvas").getContext("2d");
		},
		datasets: function(){
			const labels = _.flatten(_.map(this.$store.getters.getFilteredResults, (suite, version) => {
				let res = [];
				_.each(suite, (benchmark) => {
					_.each(benchmark, (result, benchmarkName) => {
						res.push([benchmarkName, version]);
					});
				});

				return res;
			}), 1);

			const data = this.$store.getters.getBrowsersList.map((browser, i) => {
				return _.reduce(this.$store.getters.getFilteredResults, (acc, suite) => {

					_.each(suite, (benchmark) => {
						_.each(benchmark, (result) => {
							_.each(result, (data) => {
								if(data.browser.split(" ")[0] === browser){
									acc.data.push(data.opsPerSecond);
								}
							});
						});
					});


					acc.backgroundColor = this.backgroundColors[i];
					acc.borderColor = this.borderColors[i];

					return acc;
				}, {
					backgroundColor: this.backgroundColors[0],
					borderColor: this.borderColors[0],
					borderWidth: 1,
					label: browser,
					data: []
				});
			});

			return {
				data,
				labels
			};
		}
	},
	watch: {
		datasets: function(){
			this.chart.data.labels = this.datasets.labels;
			this.chart.data.datasets = this.datasets.data;
			this.chart.update();
		}
	},
	mounted: function(){
		this.chart = new Chart(this.ctx, {
			type: "bar",
			data: {
				labels: this.datasets.labels,
				datasets: this.datasets.data
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				tooltips: {
					callbacks: {
						title: (tooltipItem) => {
							return `${tooltipItem[0].xLabel[0]}\nVersion: ${tooltipItem[0].xLabel[1]}`;
						},
						label: (tooltipItem, data) => {
							let label = data.datasets[tooltipItem.datasetIndex].label || '';

							if (label) {
								label += ': ';
							}

							label += `${Math.round(tooltipItem.yLabel).toLocaleString()} ops/sec`;
							return label;
						}
					}
				}
			}
		});
	}
};
</script>

<style lang="less">

</style>