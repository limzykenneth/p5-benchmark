<template>
	<main id="page-container">
		<header>
			<h1>p5.js Benchmarks</h1>
		</header>

		<section id="benchmarks">
			<app-benchmark
				:version="benchmark.meta.version"
				:date="benchmark.meta.date"
				:results="benchmark.results"
				:browsers-list="browsersList"
			></app-benchmark>
		</section>
	</main>
</template>

<script>
import AppBenchmark from "./Benchmark.vue"

export default{
	name: "App",
	components: {
		"app-benchmark": AppBenchmark
	},
	props: {
		benchmark: {
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
#page-container{
	padding: 5rem;

	#benchmarks{
		.benchmark{
			.result{
				border: 1px solid black;
				margin: 1px;
				padding: 1rem;
			}
		}
	}
}
</style>