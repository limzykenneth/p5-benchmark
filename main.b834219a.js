parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
fetch("./assets/results/benchmark.json").then(function(e){return e.json()}).then(function(e){var t=_.template(document.querySelector("#benchmark-template").innerHTML),n=_.reduce(e.results,function(e,t){return _.isObject(e[t.suite])||(e[t.suite]={}),_.isArray(e[t.suite][t.name])||(e[t.suite][t.name]=[]),e[t.suite][t.name].push(t),e[t.suite][t.name]=_.sortBy(e[t.suite][t.name],"browser"),e},{}),s=t({meta:e.meta,results:n});document.querySelector("#benchmarks").innerHTML+=s});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b834219a.js.map