import { app, BrowserWindow } from 'electron'
import path = require('node:path')

const baseSitePath = path.join(__dirname, '../../gui-angular/dist/app/browser/index.html')
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preloadLauncher.js'),
            sandbox: false

        }
    })
    win.loadFile(baseSitePath)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
