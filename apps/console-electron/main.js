import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    show: false,
    useContentSize: true,
    backgroundColor: '#0a0a0a',
  });

  win.once('ready-to-show', () => {
    win.show()
  })

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
