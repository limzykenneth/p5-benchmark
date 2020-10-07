<template>
	<article class="benchmark">
		<section class="results-container">
			<div class="results"
				v-for="(testCase, testName) in results"
			>
				<h4 class="result-name">Name: {{ testName }}</h4>
				<h4 class="result-version">Version: {{ testCase.version }}</h4>
				<p v-for="testResult in testCase.result">
					{{ testResult.browser }}<br>
					Operations per second: {{ testResult.opsPerSecond | round | formatNumber }}
				</p>
				<hr>
			</div>
		</section>

		<benchmark-graph></benchmark-graph>
	</article>
</template>

<script>
import BenchmarkGraph from "./BenchmarkGraph.vue";

export default{
	name: "AppBenchmark",
	components: {
		"benchmark-graph": BenchmarkGraph
	},
	filters: {
		round: function(value){
			return Math.round(value);
		},
		formatNumber: function(value){
			return value.toLocaleString();
		}
	},
	computed: {
		results: function(){
			const res = {};
			_.each(this.$store.getters.getFilteredResults, (suite, version) => {
				_.each(suite, (benchmark, suiteName) => {
					_.each(benchmark, (data, benchmarkName) => {
						res[benchmarkName] = {
							version,
							result: this.$store.getters.getResults[version][suiteName][benchmarkName]
						}
					});
				});
			});

			return res;
		}
	}
};
</script>

<style lang="less" scoped>
.benchmark{
	border: 1px solid black;
	margin: 1rem;
	padding: 1rem;

	.results-container{
		columns: 3;

		.results{
			break-inside: avoid;

			.result-name, .result-version{
				margin: 0;
			}
		}
	}
}
</style>