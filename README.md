# p5.js Benchmarks

This repo contains the benchmarking code for p5.js. You can run it locally to compare between versions of p5.js. It will also run in a consistent CI environment to generate performance benchmarks over time that can be compared with each other.

## Usage
0. You should have Firefox and Chrome already installed on your system.
1. Run `npm install`.
2. Run `npm test`.
3. Results will be logged in the terminal and in the `results` folder.

If you want more information from the results or change the browsers being tested, you can modify `karma.conf.js` to fit your test cases.

## Use cases
**TLDR: You probably don't need this.**

Optimizing for performance is not something of high priority to p5.js, cleaner code and beginner friendliness always have higher priority. However, if better performance can be achieved without sacrificing cleaner code and beginner friendliness, it definitely can be explored.

In other words, if you are working on the source code for p5.js, you won't need this repo unless you are specifically working on improving performance. Also see below for a few points on how to compare performance numbers.

* When running locally, it is best if you don't have anything else on your system taking up too much resources.
* If you are running a web browser for regular use, and benchmarking on the same web browser, performance may be affected.
* Benchmarking result on your local system can vary from run to run so you should not compare the performance of one run against another if the difference is neither big enough nor consistent enough.
* Benchmarking result on your local system should not be compared with result from another system as there is too much variables that can affect performance, unless you can make sure there is a consistent setup (virtual machines etc).

## Development
Follow the same steps as `Usage` to setup.

For now the aim will be to make the test easily configured to run on different versions of p5.js, even custom built ones.

It would be nice to have a constantly updated visual graph for the running benchmarks.

More benchmarks of the remaining functions in p5.js.

Open an issue if you have an idea for any of the above and/or want to work on it!