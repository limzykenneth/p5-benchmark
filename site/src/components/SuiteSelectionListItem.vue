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
		version: {
			type: String,
			required: true
		},
		suiteName: {
			type: String,
			required: true
		}
	},
	computed: {
		selectedBenchmarks: function(){
			return this.$store.state.selectedBenchmarks?.[this.version]?.[this.suiteName] || [];
		},
		isSelected: function(){
			return this.selectedBenchmarks.includes(this.benchmarkName);
		}
	},
	methods: {
		selectBenchmark: function(){
			this.$store.commit("toggleSelectedBenchmark", {
				version: this.version,
				suiteName: this.suiteName,
				benchmarkName: this.benchmarkName
			});
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