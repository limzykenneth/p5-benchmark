<template>
	<li class="benchmark-name"
		:class="isSelected ? 'active' : ''"
		v-on:click="selectBenchmark"
	>
		{{ benchmarkName }}
	</li>
</template>

<script>
export default{
	name: "SelectionListItem",
	props: {
		benchmarkName: {
			type: String,
			required: true
		},
		benchmarkID: {
			type: String,
			required: true
		}
	},
	computed: {
		selectedBenchmarks: function(){
			return this.$store.state.selectedBenchmarks;
		},
		isSelected: function(){
			return this.$store.state.selectedBenchmarks.includes(this.benchmarkID);
		}
	},
	methods: {
		selectBenchmark: function(){
			this.$store.commit("toggleSelectedBenchmark", this.benchmarkID);
		}
	}
};
</script>

<style lang="less" scoped>
@import "../stylesheets/mixin.less";

.benchmark-name{
	.list-item();
}
</style>