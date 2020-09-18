import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		benchmarks: {},
		version: "1.1.9"
	},
	getters: {
		getResultsBySuites: function(state){
			return _.reduce(state.benchmarks.results, (col, benchmark) => {
				if(!_.isObject(col[benchmark.suite])){
					col[benchmark.suite] = {};
				}
				if(!_.isArray(col[benchmark.suite][benchmark.name])){
					col[benchmark.suite][benchmark.name] = [];
				}
				col[benchmark.suite][benchmark.name].push(benchmark);
				col[benchmark.suite][benchmark.name] = _.sortBy(col[benchmark.suite][benchmark.name], "browser");

				return col;
			}, {});
		},
		getBrowsersList: function(state){
			return _.sortBy(_.uniq(_.map(state.benchmarks.results, (result) => result.browser)));
		}
	},
	mutations: {
		setBenchmarks: function(state, benchmarks){
			state.benchmarks = benchmarks;
		},
		setVersion: function(state, version){
			state.version = version;
		}
	},
	actions: {
		fetchBenchmarks: async function(store, version){
			const path = process.env.NODE_ENV === "production" ?
				`https://f002.backblazeb2.com/file/p5js-benchmark/benchmark-${version}.json` :
				`./assets/results/benchmark-${version}.json`;

			const benchmarks = await fetch(path)
				.then((res) => res.json());

			store.commit("setBenchmarks", benchmarks);
		}
	}
});