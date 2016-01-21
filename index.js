var plugins = require('electron-plugins'),
	ipc = require('electron').ipcRenderer;

console.log(plugins);

document.addEventListener('DOMContentLoaded', function() {
	var context = { };
	plugins.load(context, function(err, loaded) {
		if(err) return console.error(err);
		console.log('Plugins loaded successfully.');
	})
});

ipc.on('update-available', function() {
	console.log('Update availble!');
});