const { app, BrowserWindow } = require('electron');
const path = require('path');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window = null;

function createWindow() {
  // Create the browser window.

  const startUrl = process.env.ELECTRON_START_URL;
  window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false ,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // Load the index.html of the app.
  // This will give an error for now, since we will be using a React app instead of a file.
  window.loadURL('http://localhost:5173/');
  window.show();
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});