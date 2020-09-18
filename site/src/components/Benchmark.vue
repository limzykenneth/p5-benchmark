<template>
	<article class="benchmark">
		<h2>p5.js version: {{ version }}</h2>
		<h2>Date: {{ date }}</h2>

		<div class="result"
			:id="currentSuite"
		>
			<h3>Suite: {{ currentSuite }}</h3>

			<div
				v-for="(testCase, testName) in suites[currentSuite]"
				:key="testName"
			>
				<h4>Name: {{ testName }}</h4>
				<p v-for="testResult in testCase">
					{{ testResult.browser }}<br>
					Operations per second: {{ testResult.opsPerSecond }}
				</p>
			</div>

			<benchmark-graph></benchmark-graph>
		</div>
	</article>
</template>

<script>
import BenchmarkGraph from "./BenchmarkGraph.vue";

export default{
	name: "AppBenchmark",
	components: {
		"benchmark-graph": BenchmarkGraph
	},
	props: {},
	computed: {
		suites: function(){
			return this.$store.getters.getResultsBySuites;
		},
		browsersList: function(){
			return this.$store.getters.getBrowsersList;
		},
		date: function(){
			if(!_.isEmpty(this.$store.getters.getCurrentBenchmarks)){
				return moment(this.$store.getters.getCurrentBenchmarks.meta.date)
					.format("MMMM Do YYYY, h:mm:ss a");
			}else{
				return "";
			}
		},
		version: function(){
			return this.$store.state.version;
		},
		currentSuite: function(){
			return this.$store.state.currentSuite;
		}
	}
};
</script>

<style lang="less" scoped>
#benchmarks{
	.benchmark{
		.result{
			border: 1px solid black;
			margin: 1px;
			padding: 1rem;
		}
	}
}
</style>