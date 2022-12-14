const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
        nodeIntegration: true
        }
    });
    win.removeMenu();
    win.setResizable(false);
    
    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, '/src/index.html'));

    globalShortcut.register('f5', function () {
        console.log('Refreshing Electron page...');
        win.reload();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});