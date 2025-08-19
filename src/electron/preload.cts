import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  getCpuModel: () => ipcRenderer.invoke("getCpuModel"),
});
