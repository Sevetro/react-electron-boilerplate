import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./path-resolver.js";
import { getCpuModel } from "./node-example.js";

app.whenReady().then(() => {
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    browserWindow.loadURL("http://localhost:5132");
  } else {
    browserWindow.loadFile(
      path.join(app.getAppPath(), "dist-react", "index.html")
    );
  }

  ipcMain.handle("getCpuModel", () => {
    return getCpuModel();
  });

  browserWindow.on("closed", () => {
    app.quit();
  });
});
