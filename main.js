'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var updater = require('electron-updater');

var mainWindow = null;

app.on('window-all-closed', function() {
	if(process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	updater.on('ready', function() {
		mainWindow = new BrowserWindow({
			width: 900,
			height: 1000,
			autoHideMenuBar: true,
			frame: false,
			useContentSize: true
		});
		mainWindow.loadURL('file://' + __dirname + '/index.html');

		mainWindow.webContents.openDevTools();

		mainWindow.on('closed', function() {
			mainWindow = null;
		});
	});

	updater.on('updateRequired', function() {
		app.quit();
	});

	updater.on('updateAvailable', function() {
		mainWindow.webContents.send('update-available');
	});

	updater.start();

})