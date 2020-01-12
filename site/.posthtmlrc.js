const pjson = require("./package.json");

if(process.env.NODE_ENV === "production"){
	module.exports = {
		plugins: {
			"posthtml-favicons": {
				configuration: {
					path: "/", // Path for overriding default icons path. `string`
					appName: "", // Your application's name. `string`
					appDescription: pjson.description, // Your application's description. `string`
					developerName: "Kenneth Lim", // Your (or your developer's) name. `string`
					developerURL: "https://limzykenneth.com", // Your (or your developer's) URL. `string`
					dir: "auto", // Primary text direction for name, short_name, and description
					lang: "en-GB", // Primary language for name and short_name
					background: "#fff", // Background colour for flattened icons. `string`
					theme_color: "#fff", // Theme color user for example in Android's task switcher. `string`
					display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
					orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
					start_url: "/", // Start URL when launching the application from a device. `string`
					version: pjson.version, // Your application's version string. `string`
					logging: false,
					icons: {
						// Platform Options:
						// - offset - offset in percentage
						// - background:
						//   * false - use default
						//   * true - force use default, e.g. set background for Android icons
						//   * color - set background for the specified icons
						//
						android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }`
						appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
						appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }`
						coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background }`
						favicons: true, // Create regular favicons. `boolean`
						firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background }`
						windows: false, // Create Windows 8 tile icons. `boolean` or `{ background }`
						yandex: false // Create Yandex browser icon. `boolean` or `{ background }`
					}
				}
			}
		}
	};
}else{
	module.exports = {};
}