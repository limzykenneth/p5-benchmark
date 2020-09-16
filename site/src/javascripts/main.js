import Vue from "vue";
import App from "../components/App.vue";
import store from "./store.js";

new Vue({
	el: "#page-content",
	store,
	beforeCreate: function(){
		this.$store.dispatch("fetchBenchmarks", "0.10.2");
	},
	render: function(createElement){
		return createElement(App);
	}
});