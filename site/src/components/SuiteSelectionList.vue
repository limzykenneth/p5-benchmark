<template>
	<div class="suite-container"
		v-if="searchFilter()"
	>
		<h2 class="suite-name"
			v-on:click="selectGroup"
		>{{ suiteName }}</h2>

		<selection-list-item
			v-for="(benchmark, benchmarkName) in suite"
			:key="benchmarkName"
			v-if="searchFilter(benchmarkName)"

			:benchmark-name="benchmarkName"
			:suite-name="suiteName"
			:version="version"
		></selection-list-item>
	</div>
</template>

<script>
import SelectionListItem from "./SuiteSelectionListItem.vue";

export default{
	name: "VersionList",
	components: {
		"selection-list-item": SelectionListItem
	},
	props: {
		suite: {
			type: Object,
			required: true
		},
		suiteName: {
			type: String,
			required: true
		},
		version: {
			type: String,
			required: true
		},
		searchText: {
			type: String,
			default: ""
		}
	},
	methods: {
		selectGroup: function(){
			const benchmarkNames = _.chain(this.suite)
				.keys()
				.filter((benchmarkName) => {
					return this.searchFilter(benchmarkName);
				})
				.value();

			this.$store.commit("toggleSelectedGroup", {
				version:  this.version,
				suiteName: this.suiteName,
				benchmarkNames
			});
		},
		searchFilter: function(benchmarkName){
			if(benchmarkName){
				return benchmarkName.toLowerCase().includes(this.searchText.toLowerCase());
			}else{
				return _.some(this.suite, (benchmark, name) => {
					return name.toLowerCase().includes(this.searchText.toLowerCase());
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import "../stylesheets/mixin.less";

.suite-container{
	margin: 1rem 0;
	display: inline-block;
	width: 100%;
	break-inside: avoid;

	.suite-name{
		.list-item();
	}
}
</style>