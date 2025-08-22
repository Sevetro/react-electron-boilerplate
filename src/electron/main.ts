import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMainHandle, isDev } from "./utils.js";
import { getPreloadPath } from "./path-resolver.js";
import { getCpuModel, sendRamUsage } from "./node-example.js";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5132");
  } else {
    mainWindow.loadFile(
      path.join(app.getAppPath(), "dist-react", "index.html")
    );
  }

  sendRamUsage(mainWindow);

  ipcMainHandle("getCpuModel", () => getCpuModel());

  mainWindow.on("closed", () => {
    app.quit();
  });
});
