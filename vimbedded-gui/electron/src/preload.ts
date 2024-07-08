import { contextBridge } from "electron/renderer";
const path = require('node:path')
contextBridge.exposeInMainWorld('electronAPI', {
    '__dirname': __dirname
})
