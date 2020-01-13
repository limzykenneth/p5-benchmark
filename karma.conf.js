const moment = require("moment");
const pjson = require("./package.json");

module.exports = function(config) {
	config.set({
		// If using busyWork function and karma is giving timeout because of the
		// promises is taking too long to resolve, you can increse this.
		// DO NOT set to 0 or Infinity!
		browserDisconnectTimeout: 10000,

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: "",


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			"benchmark"
		],

		// list of files / patterns to load in the browser
		files: [
			`https://cdnjs.cloudflare.com/ajax/libs/p5.js/${pjson.p5js_version}/p5.min.js`,
			"https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.7.2/bluebird.min.js",
			"tests/*.js"
		],

		proxies: {
		},

		mime: {
		},

		// list of files / patterns to exclude
		exclude: [
		],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			"benchmark",
			"benchmark-json"
		],

		benchmarkJsonReporter: {
			pathToJson: `results/benchmark-${pjson.p5js_version}.json`,
			formatResults: function(results){
				return results.map(function(r){
					return {
						browser: r.browser,
						suite: r.suite,
						name: r.name,
						opsPerSecond: r.hz,
						marginOfError: `${r.rme}%`
					};
				}).sort(function(el1, el2){
					if(el1.suite > el2.suite){
						return 1;
					}else if(el1.suite < el2.suite){
						return -1;
					}else{
						if(el1.name > el2.name){
							return 1;
						}else if(el1.name < el2.name){
							return -1;
						}else{
							return 0;
						}
					}
				});
			},
			formatOutput: function(results){
				// Not including summary in final result for now, not very useful
				// const summary = results.reduce(function(acc, result){
				// 	if(typeof acc[result.suite] === "undefined"){
				// 		acc[result.suite] = result;
				// 	}else if(acc[result.suite].opsPerSecond < result.opsPerSecond){
				// 		acc[result.suite] = result;
				// 	}

				// 	return acc;
				// }, {});

				return {
					meta: {
						title: "p5.js Benchmarks",
						version: pjson.p5js_version,
						date: moment().toISOString()
					},
					results: results,
					summary: {}
				};
			}
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_ERROR,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			"FirefoxHeadless",
			"ChromeHeadless",
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: 1
	});
};
