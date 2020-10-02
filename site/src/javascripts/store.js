import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		benchmarks: {},
		version: "",
		versions: [],
		currentSuite: ""
	},
	getters: {
		getResultsBySuites: function(state, getters){
			let initial = {};
			_.each(getters.getCurrentBenchmarks.results, (benchmark) => {
				initial[benchmark.suite] = initial[benchmark.suite] || {};
				initial[benchmark.suite][benchmark.name] = [];
			});

			return _.reduce(getters.getCurrentBenchmarks.results, (col, benchmark) => {
				col[benchmark.suite][benchmark.name].push(benchmark);
				col[benchmark.suite][benchmark.name] = _.sortBy(col[benchmark.suite][benchmark.name], "browser");

				return col;
			}, initial);
		},
		getBrowsersList: function(state, getters){
			return _.chain(getters.getCurrentBenchmarks.results)
				.map((result) => result.browser)
				.uniq()
				.sortBy()
				.value();
		},
		getCurrentBenchmarks: function(state){
			return state.benchmarks[state.version] || {};
		}
	},
	mutations: {
		setBenchmarks: function(state, options){
			Vue.set(state.benchmarks, options.version, options.benchmarks);
		},
		setVersion: function(state, version){
			state.version = version;
		},
		setVersions: function(state, versions){
			state.versions = versions;
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
			store.commit("setCurrentSuite", _.keys(store.getters.getResultsBySuites)[0]);
		},
		fetchVersions: async function(store){
			let versions = [];
			if(process.env.NODE_ENV === "production"){
				const path = "https://p5js-benchmark.limzykenneth.workers.dev/";
				const data = await fetch(path)
					.then((res) => res.json());

				const versionRegex = /benchmark-(.+?)\.json/;
				versions = _.map(data.files, (file) => {
					const fileName = file.fileName;

					return versionRegex.exec(fileName)[1];
				});
			}else{
				versions = require("./versions.local.json");
			}

			store.commit("setVersions", versions);
			versions.forEach((version) => {
				if(!store.state.benchmarks[version]){
					store.commit("setBenchmarks", {
						version,
						benchmarks: {}
					});
				}
			});
			store.commit("setVersion", versions[0]);
		}
	}
});