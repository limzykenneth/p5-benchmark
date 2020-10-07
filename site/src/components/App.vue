<template>
	<main id="page-container">
		<header id="page-header">
			<h1 id="site-title">p5.js Benchmarks</h1>
			<button id="select-benchmark"
				v-on:click="openSelection"
			>Choose Benchmarks</button>
		</header>

		<section id="benchmarks">
			<app-benchmark></app-benchmark>
		</section>

		<suite-selection
			v-if="selectionOpen"
		></suite-selection>
	</main>
</template>

<script>
import AppBenchmark from "./Benchmark.vue";
import SuiteSelection from "./SuiteSelection.vue";

export default{
	name: "App",
	components: {
		"app-benchmark": AppBenchmark,
		"suite-selection": SuiteSelection
	},
	computed: {
		selectionOpen: function(){
			return this.$store.state.selectionOpen;
		}
	},
	methods: {
		openSelection: function(){
			this.$store.commit("toggleSelectionOpen");
		}
	}
};
</script>

<style lang="less" scoped>
@import "../stylesheets/mixin.less";

#page-container{
	padding: 5rem;

	#page-header{
		width: 100%;
		height: 5rem;
		top: 0px;
		left: 0;
		padding: 1.5rem 6rem;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: @p5-pink;
		color: white;

		#site-title{
			margin: 0;
		}

		#select-benchmark{
			.button();

			&:hover{
				background-color: darken(@p5-pink, 10%);
			}
		}
	}
}
</style>