var plugins = require('electron-plugins'),
	ipc = require('electron').ipcRenderer;

$(document).ready(function() {
	var context = {
		'document' : document,
		'pluginContent' : $("#plugin-content"),
		'pluginTitle' : "Untitled plugin",
		'pluginIcon' : "",
		'UI' : {
			addTab : function(id, caption, icon, callback) {
				//<li class="selected"><a href="#" data-section="dashboard"><i class="fa fa-dashboard fa-lg"></i><span class="caption">Stöðuskjár</span></a></li>

				var context = this;

				var tab, anchor, icon, caption;

				tab = $("<li>").attr("id", "tab-" + id);
				anchor = $("<a>").attr('href', '#');
				icon = $("<i>").addClass('fa fa-'+icon+' fa-lg');
				caption = $("<span>").addClass("caption").html(caption);

				anchor.append(icon)
				anchor.append(caption);
				tab.append(anchor);
				$("#nav-tabs").append(tab);

				$(tab).click(callback);
			},
			loadContent : function(content) {
				$("#plugin-content").html(content);
				console.log(content);
			},
			selectTab : function(id) {
				$("#nav-tabs li").removeClass("selected");
				$("#nav-tabs #tab-" + id).addClass("selected");
			}
		}
	};
	plugins.load(context, function(error, loaded) {
		if(error) return console.error(error);
		console.log('Plugins loaded successfully.');
	})

});

ipc.on('update-available', function() {
	console.log('Update availble!');
});