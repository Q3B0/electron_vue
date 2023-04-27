import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("browserWindow", {
    versions: () => ipcRenderer.invoke("versions"),
});
contextBridge.exposeInMainWorld("ipc", {
    send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
    invoke: (channel: string, ...args: any[]): Promise<any> => ipcRenderer.invoke(channel, ...args),
    on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {ipcRenderer.on(channel, listener);
},})

