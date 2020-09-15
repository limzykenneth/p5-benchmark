<template>
	<article class="benchmark">
		<h2>p5.js version: {{ version }}</h2>
		<h2>Date: {{ date.format("MMMM Do YYYY, h:mm:ss a") }}</h2>

		<div class="result"
			v-for="(suite, suiteName) in results"
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
				:suiteName="key"
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
	props: {
		version: {
			type: String,
			required: true
		},
		date: {
			type: Object,
			required: true
		},
		results: {
			type: Object,
			required: true
		},
		browsersList: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="less">
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