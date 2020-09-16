<template>
	<main id="page-container">
		<header id="page-header">
			<h1>p5.js Benchmarks</h1>

			<app-controls></app-controls>
		</header>

		<section id="benchmarks">
			<app-benchmark></app-benchmark>
		</section>
	</main>
</template>

<script>
import AppBenchmark from "./Benchmark.vue";
import AppControls from "./Controls.vue";

export default{
	name: "App",
	components: {
		"app-benchmark": AppBenchmark,
		"app-controls": AppControls
	},
	props: {}
};
</script>

<style lang="less" scoped>
#page-container{
	padding: 5rem;

	#page-header{
		width: 100%;
		height: 5rem;
		top: 0px;
		left: 0;
		padding: 1.5rem 5rem;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #aaaaff;

		h1{
			margin: 0;
		}
	}
}
</style>