<template>
	<div class="graph">
		<canvas class="graph-canvas"></canvas>
	</div>
</template>

<script>
export default{
	name: "BenchmarkGraph",
	props: {
		suiteName: {
			type: String,
			required: true
		},
		suite: {
			type: Object,
			required: true
		},
		browsersList: {
			type: Array,
			required: true
		}
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
			]
		};
	},
	computed: {
		labels: function(){
			return _.reduce(this.suite, (col, r, key) => {
				col.push(key);
				return col;
			}, []);
		},
		ctx: function(){
			return this.$el.querySelector(".graph-canvas").getContext("2d");
		},
		datasets: function(){
			return _.map(this.browsersList, (browser, i) => {
				return _.reduce(this.suite, (col, r) => {
					_.each(r, (r2) => {
						if(r2.browser === browser){
							col.label = r2.browser;
							if(!Array.isArray(col.data)){
								col.data = [];
							}
							col.data.push(r2.opsPerSecond);
						}
					});

					col.backgroundColor = this.backgroundColors[i];
					col.borderColor = this.borderColors[i];
					col.borderWidth = 1;

					return col;
				}, {});
			});
		}
	},
	mounted: function(){
		console.log("gere");
		new Chart(this.ctx, {
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