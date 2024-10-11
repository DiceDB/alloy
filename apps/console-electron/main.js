import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    useContentSize: true,
  });

  if (app.isPackaged === false) {
    win.loadURL('http://localhost:4000');
    win.webContents.on('did-fail-load', (e, code, desc) => {
      console.error(e, code, desc);
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.whenReady().then(() => {
  createWindow();
});
