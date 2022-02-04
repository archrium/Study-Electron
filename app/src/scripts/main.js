const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem } = require('electron')
const path = require('path')

// ==== Create Window
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    // :: frameless
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#202020',
      symbolColor: '#ccc'
    },
    transparent: true,
    // :: frameless end
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // 
  win.loadFile('src/html/index.html')
  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

// ==== Adding Keybind
// const menu = new Menu()
// menu.append(new MenuItem({
//   label: 'Electron',
//   submenu: [{
//     role: 'help',
//     accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
//     click: () => { console.log('Electron rocks!') }
//   }]
// }))
// Menu.setApplicationMenu(menu)
// opt global shortcut ile app focusta degilken dinleyebilirsin

// ===== Process
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


// ==== Close Application
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
