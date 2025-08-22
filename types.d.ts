interface Window {
  electron: {
    getCpuModel: () => Promise<string>;
    subscribeToRamUsage: (callback: (ramUsage: RamUsage) => void) => void;
  };
}

type RamUsage = {
  totalRam: number;
  freeRam: number;
};

type EventPayloadMap = {
  getCpuModel: string;
  ramUsage: RamUsage;
};
