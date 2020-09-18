<template>
	<nav id="controls-container">
		<select
			v-model="currentVersion"
		>
			<option
				v-for="(version, i) in versions"
				:key="i"
				:value="version"
			>{{ version }}</option>
		</select>

		<select
			v-model="selectedSuite"
			v-on:change="navigateToSuite"
		>
			<option
				v-for="(suite, suiteName) in suites"
				:value="suiteName"
			>{{ suiteName }}</option>
		</select>
	</nav>
</template>

<script>
export default{
	name: "AppControls",
	data: function(){
		return {
			selectedSuite: ""
		}
	},
	computed: {
		suites: function(){
			return this.$store.getters.getResultsBySuites;
		},
		versions: function(){
			return this.$store.state.versions;
		},
		currentVersion: {
			get: function(){
				return this.$store.state.version;
			},
			set: function(version){
				this.$store.dispatch("fetchBenchmarks", version);
			}
		}
	},
	methods: {
		navigateToSuite: function(){
			window.location.hash = `#${this.selectedSuite}`;
		}
	}
};
</script>

<style lang="less" scoped>
#controls-container{

}
</style>