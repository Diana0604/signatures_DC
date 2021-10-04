const {app, BrowserWindow} = require('electron');

const ipcMain = require('electron').ipcMain;

// in main process, outside of app.on:
ipcMain.on('load-page', (event, arg) => {
    
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile(arg);
});


//define method to create main window
function createMainWindow(){
    console.log(process.versions.node);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
    //win.webContents.openDevTools();
}
//create main window upon starting the app
app.whenReady().then(createMainWindow);

//if all windows closed on mac do not quit the app
app.on('window-all-closed', () => {
    if(process.platform != 'darwin') {
        app.quit();
    }
});


//if click on app icon on mac (not sure if has any impact elsewhere) and no windows open, create window
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0){
        createMainWindow();
    }
})
