const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({ autoHideMenuBar: true });
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', function() {
    app.quit();
});
