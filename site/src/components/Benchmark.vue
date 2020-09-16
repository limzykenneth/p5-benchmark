<template>
	<article class="benchmark">
		<h2>p5.js version: {{ version }}</h2>
		<h2>Date: {{ date }}</h2>

		<div class="result"
			v-for="(suite, suiteName) in suites"
			:key="suiteName"
		>
			<h3 :id="suiteName">Suite: {{ suiteName }}</h3>

			<div
				v-for="(testCase, testName) in suite"
				:key="testName"
			>
				<h4>Name: {{ testName }}</h4>
				<p v-for="testResult in testCase">
					{{ testResult.browser }}<br>
					Operations per second: {{ testResult.opsPerSecond }}
				</p>
			</div>

			<benchmark-graph
				:suiteName="suiteName"
				:suite="suite"
				:browsers-list="browsersList"
			></benchmark-graph>
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
			if(!_.isEmpty(this.$store.state.benchmarks)){
				return moment(this.$store.state.benchmarks.meta.date)
					.format("MMMM Do YYYY, h:mm:ss a");
			}else{
				return "";
			}
		},
		version: function(){
			return this.$store.state.version;
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