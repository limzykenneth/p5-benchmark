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
		suiteName: function(){
			return this.$store.state.currentSuite;
		},
		suite: function(){
			return this.$store.getters.getResultsBySuites[this.suiteName];
		},
		ctx: function(){
			return this.$el.querySelector(".graph-canvas").getContext("2d");
		},
		datasets: function(){
			return this.$store.getters.getBrowsersList.map((browser, i) => {
				return _.reduce(this.suite, (col, benchmark) => {
					benchmark.forEach((data) => {
						if(data.browser === browser){
							col.data.push(data.opsPerSecond);
						}
					});

					col.backgroundColor = this.backgroundColors[i];
					col.borderColor = this.borderColors[i];

					return col;
				}, {
					backgroundColor: this.backgroundColors[0],
					borderColor: this.borderColors[0],
					borderWidth: 1,
					label: browser,
					data: []
				});
			});
		},
		labels: function(){
			return _.map(this.suite, (benchmark, key) => {
				return key;
			});
		}
	},
	watch: {
		suiteName: function(val){
			if(val !== ""){
				this.chart.data.labels = this.labels;
				this.chart.data.datasets = this.datasets;
			}else{
				this.chart.data.labels = [];
				this.chart.data.datasets = [];
			}

			this.chart.update();
		}
	},
	mounted: function(){
		this.chart = new Chart(this.ctx, {
			type: "bar",
			data: {
				labels: this.labels,
				datasets: this.datasets
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
	}
};
</script>

<style lang="less">

</style>