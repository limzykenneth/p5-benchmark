import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		benchmarks: {},
		version: "",
		versions: [],
		currentSuite: "",
		selectedBenchmarks: {},
		selectionOpen: true
	},
	getters: {
		getResultsBySuites: function(state){
			const suite = state.benchmarks[state.version].results;
			let initial = {};
			_.each(suite, (benchmark) => {
				initial[benchmark.suite] = initial[benchmark.suite] || {};
				initial[benchmark.suite][benchmark.name] = [];
			});

			return _.reduce(suite, (col, benchmark) => {
				col[benchmark.suite][benchmark.name].push(benchmark);
				col[benchmark.suite][benchmark.name] = _.sortBy(col[benchmark.suite][benchmark.name], "browser");

				return col;
			}, initial);
		},
		getResults: function(state){
			const result = {};

			state.versions.forEach((version) => {
				const suite = state.benchmarks[version].results;
				const initial = {};
				_.each(suite, (benchmark) => {
					initial[benchmark.suite] = initial[benchmark.suite] || {};
					initial[benchmark.suite][benchmark.name] = [];
				});

				result[version] = _.reduce(suite, (col, benchmark) => {
					col[benchmark.suite][benchmark.name].push(benchmark);
					col[benchmark.suite][benchmark.name] = _.sortBy(col[benchmark.suite][benchmark.name], "browser");

					return col;
				}, initial);
			});

			return result;
		},
		getFilteredResults: function(state, getters){
			const result = {};

			_.each(state.selectedBenchmarks, (suite, version) => {
				result[version] = {};

				_.each(suite, (benchmarkNames, suiteName) => {
					result[version][suiteName] = {};

					_.each(benchmarkNames, (benchmarkName) => {
						result[version][suiteName][benchmarkName] = getters.getResults[version][suiteName][benchmarkName];
					});

				});
			});

			return result;
		},
		getBrowsersList: function(state, getters){
			return _.chain(getters.getCurrentBenchmarks.results)
				.map((result) => result.browser.split(" ")[0])
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
		},
		toggleSelectedGroup: function(state, {version, suiteName, benchmarkNames}){
			// Initialize when needed
			if(!state.selectedBenchmarks[version]){
				Vue.set(state.selectedBenchmarks, version, {});
			}
			if(!state.selectedBenchmarks[version][suiteName]){
				Vue.set(state.selectedBenchmarks[version], suiteName, []);
			}

			if(_.intersection(state.selectedBenchmarks[version][suiteName], benchmarkNames).length === benchmarkNames.length){
				// Deselect all
				Vue.set(state.selectedBenchmarks[version], suiteName, []);
			}else{
				// Select all
				Vue.set(state.selectedBenchmarks[version], suiteName, benchmarkNames);
			}
		},
		toggleSelectedBenchmark: function(state, {version, suiteName, benchmarkName}){
			// Initialize when needed
			if(!state.selectedBenchmarks[version]){
				Vue.set(state.selectedBenchmarks, version, {});
			}
			if(!state.selectedBenchmarks[version][suiteName]){
				Vue.set(state.selectedBenchmarks[version], suiteName, []);
			}

			if(state.selectedBenchmarks[version][suiteName].includes(benchmarkName)){
				state.selectedBenchmarks[version][suiteName] = _.without(state.selectedBenchmarks[version][suiteName], benchmarkName);
			}else{
				state.selectedBenchmarks[version][suiteName].push(benchmarkName);
			}
		},
		filterSelectedBenchmark: function(state, searchText){
			state.selectedBenchmarks = state.selectedBenchmarks.filter((benchmarkName) => {
				return benchmarkName.toLowerCase().includes(searchText.toLowerCase());
			});
		},
		toggleSelectionOpen: function(state){
			state.selectionOpen = !state.selectionOpen;
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