import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		benchmarks: {},
		version: "0.10.2"
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
			const benchmarks = await fetch(`./assets/results/benchmark-${version}.json`)
				.then((res) => res.json());
			store.commit("setBenchmarks", benchmarks);
		}
	}
});