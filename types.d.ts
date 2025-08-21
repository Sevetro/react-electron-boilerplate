interface Window {
  electron: {
    getCpuModel: () => Promise<string>;
  };
}

type EventPayloadMap = {
  getCpuModel: string;
};
