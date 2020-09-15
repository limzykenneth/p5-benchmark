<template>
	<article class="benchmark">
		<h2>p5.js version: {{ version }}</h2>
		<h2>Date: {{ date.format("MMMM Do YYYY, h:mm:ss a") }}</h2>

		<div class="result"
			v-for="(result, key) in results"
			:key="key"
		>
			<h3>Suite: {{ key }}</h3>

			<div class="data"
				v-for="(r, k) in result"
				:key="k"
			>
				<h4>Name: {{ k }}</h4>
				<p class="details"
					v-for="r2 in r"
				>
					{{ r2.browser }}<br>
					Operations per second: {{ r2.opsPerSecond }}
				</p>
			</div>

			<benchmark-graph
				:suiteName="key"
				:result="result"
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

</style>