import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// Could be replaced with something less manual in the future
		benchmarks: {
			"1.1.9": {},
			"p5.wasm-0.2.0": {},
			"p5.wasm-0.2.1": {}
		},
		version: "1.1.9",
		versions: [
			"1.1.9",
			"p5.wasm-0.2.0",
			"p5.wasm-0.2.1"
		],
		currentSuite: ""
	},
	getters: {
		getResultsBySuites: function(state){
			return _.reduce(state.benchmarks[state.version].results, (col, benchmark) => {
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
			return _.sortBy(_.uniq(_.map(state.benchmarks[state.version].results, (result) => result.browser)));
		},
		getCurrentBenchmarks: function(state){
			return state.benchmarks[state.version];
		}
	},
	mutations: {
		setBenchmarks: function(state, options){
			state.benchmarks[options.version] = options.benchmarks;
		},
		setVersion: function(state, version){
			state.version = version;
		},
		setCurrentSuite: function(state, suite){
			state.currentSuite = suite;
		}
	},
	actions: {
		fetchBenchmarks: async function(store, version){
			if(_.isEmpty(store.state.benchmarks[version])){
				const path = process.env.NODE_ENV === "production" ?
					`https://f002.backblazeb2.com/file/p5js-benchmark/benchmark-${version}.json` :
					`./assets/results/benchmark-${version}.json`;

				const benchmarks = await fetch(path)
					.then((res) => res.json());

				store.commit("setBenchmarks", {
					version,
					benchmarks
				});
			}

			store.commit("setVersion", version);
		}
	}
});