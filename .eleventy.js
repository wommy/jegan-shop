const { flat, unique } = require('./src/utils/index.js')

module.exports = function (config ){
	config.addPassthroughCopy({ "src/public": "/" })
	config.addFilter( 'flat', flat )
	config.addFilter( 'unique', unique )
	// config.setDataDeepMerge(true)
	// config.addPlugin(require("@11ty/eleventy-navigation"))
	// config.addDataExtension("yml", contents => yaml.load(contents))
	// config.setWatchThrottleWaitTime(1000)
	// config.addWatchTarget("static/")
	return {
		dir: {
			input: "src",
			includes: "components",
		},
		htmlTemplateEngine: "njk",
	};
};
