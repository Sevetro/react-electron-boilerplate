import { ipcMain } from "electron";

export function isDev() {
  return process.env.NODE_ENV === "dev";
}

export function ipcHandle<Key extends keyof EventPayloadMap>(
  key: Key,
  handler: () => EventPayloadMap[Key]
) {
  ipcMain.handle(key, () => handler());
}
