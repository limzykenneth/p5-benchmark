<template>
	<section id="selection-container"
		v-on:click="selectionExit"
	>
		<section id="selection"
			v-on:click.stop
		>
			<section id="selection-header">
				<div>
					<input type="text" name="selection-search" id="selection-search" placeholder="Search"
						v-model="searchText"
					>
					<button id="clear-selection"
						v-on:click="clearSelection"
					>Clear All</button>
				</div>

				<button id="selection-exit"
					v-on:click="selectionExit"
				>X</button>
			</section>

			<div id="selection-content">
				<section id="version-container">
					<article
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
				<section id="selected">
					<h2 id="selected-title">Selected Benchmarks</h2>
					<ul id="selected-list">
						<div class="version-section"
							v-for="(suite, version) in selectedBenchmarks"
							:key="version"
						>
							<h3>{{ version }}</h3>

							<div class="suite-section"
								v-for="(benchmarks, suiteName) in suite"
								:key="suiteName"
							>
								<h4>{{ suiteName }}</h4>

								<li
									v-for="(benchmarkName, i) in benchmarks"
									:key="i"
								>{{ benchmarkName }}</li>
							</div>
						</div>
					</ul>
				</section>
			</div>
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
		},
		selectedBenchmarks: function(){
			return this.$store.state.selectedBenchmarks;
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
		},
		clearSelection: function(){
			this.$store.commit("clearSelectedBenchmark");
		}
	}
};
</script>

<style lang="less" scoped>
@import "../stylesheets/mixin.less";

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

			#selection-search{
				font-size: 1.2rem;
				margin-right: 1rem;
				height: 2.5rem;
			}

			#clear-selection{
				.button();
			}

			#selection-exit{
				.button();
				font-weight: bold;
			}
		}

		#selection-content{
			display: flex;
			margin-top: 1rem;

			#version-container{
				width: 75%;

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

			#selected{
				width: 25%;
				height: 100%;
				padding: 1rem;
				background: #d9d9d9;

				#selected-title{
					margin: 0.5rem 0;
				}

				#selected-list{
					list-style: none;
					padding: 0;

					h3, h4{
						margin: 0;
					}

					.version-section{
						margin-bottom: 1.5rem;

						.suite-section{
							margin-bottom: 0.5rem;
						}
					}
				}
			}
		}
	}
}
</style>