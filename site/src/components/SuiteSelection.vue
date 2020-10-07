<template>
	<section id="selection-container"
		v-on:click="selectionExit"
	>
		<section id="selection"
			v-on:click.stop
		>
			<section id="selection-header">
				<input type="text" name="selection-search" id="selection-search" placeholder="Search"
					v-model="searchText"
				>
				<button id="selection-exit"
					v-on:click="selectionExit"
				>X</button>
			</section>

			<article class="version-container"
				v-for="(version, i) in versions"
				:key="i"
			>
				<h1 class="version-title"
					v-on:click="toggleVersion(version)"
				><span>{{ isExpanded(version) ? "-" : "+" }}</span> {{ version }}</h1>
				<ul class="version-list">
					<version-list
						v-for="(suite, suiteName) in suites[version]"
						v-if="isExpanded(version)"
						:key="suiteName"
						:suite="suite"
						:suite-name="suiteName"
						:version="version"
						:search-text="searchText"
					></version-list>
				</ul>
			</article>
		</section>
	</section>
</template>

<script>
import VersionList from "./SuiteSelectionList.vue";

export default{
	name: "SuiteSelection",
	components: {
		"version-list": VersionList
	},
	data: function(){
		return {
			expandedVersions: [],
			searchText: ""
		};
	},
	computed: {
		versions: function(){
			return this.$store.state.versions;
		},
		suites: function(){
			return this.$store.getters.getResults;
		}
	},
	methods: {
		isExpanded: function(version){
			return this.expandedVersions.includes(version);
		},
		toggleVersion: function(version){
			this.$store.dispatch("fetchBenchmarks", version);

			if(this.expandedVersions.includes(version)){
				this.expandedVersions = _.without(this.expandedVersions, version);
			}else{
				this.expandedVersions.push(version);
			}
		},
		selectionExit: function(){
			this.$store.commit("toggleSelectionOpen");
		}
	}
};
</script>

<style lang="less" scoped>
#selection-container{
	padding: 50px;
	width: 100%;
	height: 100%;
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);

	#selection{
		width: 100%;
		height: 100%;
		display: block;
		background: white;
		overflow: scroll;
		padding: 2rem;

		#selection-header{
			display: flex;
			width: 100%;
			justify-content: space-between;

			#selection-exit{
				cursor: pointer;
				padding: 5px;
				font-size: 1.2rem;
				font-weight: bold;
			}
		}

		.version-title{
			margin: 1rem 0;
			cursor: pointer;
		}

		.version-list{
			margin: 0;
			padding: 0;
			list-style: none;
			columns: 3 200px;
			column-gap: 1rem;
		}
	}
}
</style>