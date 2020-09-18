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
			v-model="currentSuite"
		>
			<option disabled value="">Please select a test suite</option>
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
		},
		currentSuite: {
			get: function(){
				return this.$store.state.currentSuite;
			},
			set: function(suite){
				this.$store.commit("setCurrentSuite", suite);
			}
		}
	}
};
</script>

<style lang="less" scoped>
#controls-container{

}
</style>