var plugins = require('electron-plugins');

console.log(plugins);

document.addEventListener('DOMContentLoaded', function() {
	var context = { };
	plugins.load(context, function(err, loaded) {
		if(err) return console.error(err);
		console.log('Plugins loaded successfully.');
	})
});