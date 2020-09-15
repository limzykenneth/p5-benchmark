import Vue from "vue";
import App from "../components/App.vue";

(async function(){
	const benchmark = await fetch("./assets/results/benchmark-0.10.2.json").then((res) => res.json());
	const browsersList = _.sortBy(_.uniq(_.map(benchmark.results, (result) => result.browser)));

	benchmark.meta.date = moment(benchmark.meta.date);
	benchmark.results = _.reduce(benchmark.results, (col, result) => {
		if(!_.isObject(col[result.suite])){
			col[result.suite] = {};
		}
		if(!_.isArray(col[result.suite][result.name])){
			col[result.suite][result.name] = [];
		}
		col[result.suite][result.name].push(result);
		col[result.suite][result.name] = _.sortBy(col[result.suite][result.name], "browser");

		return col;
	}, {});

	new Vue({
		el: "#page-content",
		data: function(){
			return {
				benchmark,
				browsersList
			};
		},
		render: function(createElement){
			return createElement(App, {
				props: {
					benchmark: this.benchmark,
					browsersList: this.browsersList
				}
			});
		}
	});
})();