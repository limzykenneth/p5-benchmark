import Vue from "vue";
import App from "../components/App.vue";
import store from "./store.js";

new Vue({
	el: "#page-content",
	store,
	beforeCreate: function(){
		this.$store.dispatch("fetchBenchmarks", this.$store.state.version);
	},
	render: function(createElement){
		return createElement(App);
	}
});