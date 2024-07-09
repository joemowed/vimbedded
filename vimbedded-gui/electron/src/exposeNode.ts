import { contextBridge } from "electron/renderer";
contextBridge.exposeInMainWorld('nodeAPI', {
    '__dirname': __dirname
})
