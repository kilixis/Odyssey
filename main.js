const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('startmenu.html');
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('resize-me-please', () => {
  if (win) {
    const targetWidth = 1000;
    const startWidth = win.getSize()[0];
    const step = 10;
    const interval = 10; // ms

    let currentWidth = startWidth;
    const animate = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(animate);
        win.setSize(targetWidth, 600, true);
        return;
      }
      currentWidth += step;
      win.setSize(currentWidth, 600, true);
    }, interval);
  } else {
    console.log("win is not defined");
  }
});

ipcMain.on("open-scroll", (event, args) => {
  const scrollWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  scrollWindow.loadFile("scroll.html").then(() => {
    scrollWindow.webContents.send("load-template", args.template);
  });
});