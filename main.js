const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    });
    win.removeMenu();
    win.setResizable(false);
    
    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, '/src/index.html'))
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});