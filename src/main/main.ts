import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile(resolve('./dist/app/login.html'));
}

app.on('ready', createWindow);
