import { spawn } from 'child_process';
import { app, BrowserWindow } from 'electron';
import net from 'net';
import fs from 'node:fs';
import path from 'node:path';
import logger from 'electron-log';
import fixPath from 'fix-path';

fixPath();
// Only allow one instance of the application
const gotTheLock = app.requestSingleInstanceLock();
logger.info('Is there an app already running? ', gotTheLock)
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // Focus on the existing window if the user tries to open another instance
    if (BrowserWindow.getAllWindows().length) {
      const mainWindow = BrowserWindow.getAllWindows()[0];
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  // Configure log file location and options
  logger.transports.file.resolvePathFn = () =>
    path.join(app.getPath('userData'), 'logs/main.log');
  logger.transports.file.level = 'debug';
  logger.transports.file.maxSize = 1024 * 1024; // 1MB

  // Make sure logs directory exists
  try {
    const logPath = path.join(app.getPath('userData'), 'logs');
    if (!fs.existsSync(logPath)) {
      fs.mkdirSync(logPath, { recursive: true });
    }
  } catch (error) {
    console.error('Failed to create logs directory:', error);
  }

  const NEXT_SERVER_PORT = 4000; // Adjust this to match your Next.js server port

  function createWindow() {
    const win = new BrowserWindow({
      show: false,
      useContentSize: true,
      backgroundColor: '#0a0a0a',
      nodeIntegration: true,
    });

    win.once('ready-to-show', () => {
      win.show();
    });
    win.webContents.openDevTools();
    win.webContents.on('devtools-opened', () => {
      setImmediate(() => {
        // do whatever you want to do after dev tool completely opened here
        win.focus();
      });
    });
    // if (app.isPackaged) {
    win.loadURL(`http://localhost:${NEXT_SERVER_PORT}`);
    win.webContents.on('did-fail-load', (e, code, desc) => {
      logger.error(e, code, desc);
      win.webContents.reloadIgnoringCache();
    });
    // }
  }

  function waitForPort(port, timeout = 10000, interval = 500) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();

      const tryConnect = () => {
        const socket = new net.Socket();

        socket.setTimeout(interval);
        socket.on('error', () => {
          socket.destroy();
          if (Date.now() - startTime > timeout) {
            reject(new Error(`Timed out waiting for port ${port}`));
          } else {
            setTimeout(tryConnect, interval);
          }
        });

        socket.on('timeout', () => {
          socket.destroy();
          tryConnect();
        });

        socket.connect(port, '127.0.0.1', () => {
          socket.destroy();
          resolve();
        });
      };

      tryConnect();
    });
  }

  function startNextServer() {
    logger.info('Starting next server');
    return new Promise((resolve, reject) => {
      const appPath = app.getAppPath();
      // const nextStartScript = join(appPath, '../node_modules', 'next', 'dist', 'bin', 'next');
      // const spawnArgs = ['run', 'start'];
      logger.info(
        'Path: ',
        path.resolve('./out/standalone/server.js'),
        process.cwd(),
      );
      // const content = fs.readFileSync(path.resolve(process.cwd(), 'out/standalone/server.js'), 'utf-8')
      // logger.info(content)
      // const items = fs.readdirSync(process.cwd()).map(item => {
      //       return item
      // });

      const serverPath = app.isPackaged
        ? path.join(process.resourcesPath, 'out', 'standalone', 'server.js')
        : path.join(appPath, 'out', 'standalone', 'server.js');
      logger.info('serverPath ', serverPath);
      logger.info('appPath ', appPath);

      logger.info('Node version ', process.version);
      const subprocess = spawn(process.execPath, [serverPath], {
        cwd: process.cwd(),
        // cwd: app.isPackaged ? path.dirname(serverPath) : process.cwd(),
        stdio: ['inherit', 'pipe', 'pipe'],
        env: { ...process.env, FORCE_COLOR: 'true', PORT: 4000 },
      });

      subprocess.stdout.on('data', (data) => {
        logger.info(data.toString());
      });

      subprocess.stderr.on('data', (data) => {
        logger.error(`stderr: ${data}`);
      });

      subprocess.on('error', (err) => {
        logger.error('Failed to start Next.js server:', err);
        reject(err);
      });

      subprocess.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Next.js process exited with code ${code}`));
        }
      });

      // We're not resolving here, we'll do that after checking the port
      resolve(subprocess);
    });
  }

  async function startApp() {
    try {
      await app.whenReady();

      logger.info('Electron app is ready. Starting Next.js server...');

      const nextProcess = await startNextServer();
      logger.info(
        'Next.js server process started. Waiting for server to be ready...',
      );

      createWindow()
      // await waitForPort(NEXT_SERVER_PORT);
      logger.info('Next.js server is ready. Creating window...');

      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
      });

      nextProcess.on('close', (code) => {
        logger.info(`Next.js process exited with code ${code}`);
        app.quit();
      });
    } catch (error) {
      logger.error('Error starting the application:', error);
      app.quit();
    }
  }

  startApp();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
