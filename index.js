const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({ autoHideMenuBar: true });

    win.webContents.on('new-window', (event, url) => {
        event.preventDefault()
        require('electron').shell.openExternal(url);
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', function() {
    app.quit();
});
