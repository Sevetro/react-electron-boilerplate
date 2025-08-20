interface Window {
  electron: {
    getCpuModel: () => Promise<string>;
  };
}
