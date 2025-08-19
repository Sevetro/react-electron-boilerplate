import os from "os";

export function getCpuModel() {
  return os.cpus()[0].model;
}
