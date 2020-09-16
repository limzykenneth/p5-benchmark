<template>
	<nav id="controls-container">
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