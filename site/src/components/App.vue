<template>
	<main id="page-container">
		<header>
			<h1>p5.js Benchmarks</h1>
		</header>

		<section id="benchmarks">
			<app-benchmark></app-benchmark>
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
	props: {}
};
</script>

<style lang="less" scoped>
#page-container{
	padding: 5rem;
}
</style>