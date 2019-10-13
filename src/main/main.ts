import { app, BrowserWindow } from 'electron';
import { join } from 'path';

function createWindows() {
  // Create the browser window.
  const homeWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const aboutWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the home.html of the app.
  homeWindow.loadFile(join(__dirname, '../app/home.html'));
  aboutWindow.loadFile(join(__dirname, '../app/about.html'));
}

app.on('ready', createWindows);
