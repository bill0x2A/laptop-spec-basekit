export const componentType = {
  SCREEN: "screen",
  CPU: "cpu",
  STORAGE: "storage",
  MEMORY: "memory",
  GPU: "graphics",
};

export const products = {
  [componentType.SCREEN]: {
    name: "Screen",
    options: {
      "13-retina": {
        name: '13" Retina',
        price: 400,
        key: "13-retina",
      },
      "15-retina": {
        name: '15" Retina',
        price: 700,
        key: "15-retina",
      },
    },
  },
  [componentType.CPU]: {
    name: "CPU",
    options: {
      "quad-i7-27-base": {
        name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz",
        price: 300,
      },
      "quad-i7-29-base": {
        name: "2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz",
        price: 500,
      },
    },
  },
  [componentType.STORAGE]: {
    name: "Storage",
    options: {
      "512-ssd": {
        name: "512GB PCIe-based SSD",
        price: 100,
      },
      "1000-ssd": {
        name: "1TB PCIe-based SSD",
        price: 200,
      },
      "2000-ssd": {
        name: "2TB PCIe-based SSD",
        price: 250,
      },
    },
  },
  [componentType.MEMORY]: {
    name: "Memory",
    type: componentType.MEMORY,
    options: {
      "8gb-mem": {
        name: "8 GB 2133MHz memory",
        price: 100,
      },
      "16gb-mem": {
        name: "16 GB 2133MHz memory",
        price: 150,
      },
    },
  },
  [componentType.GPU]: {
    name: "Graphics",
    options: {
      "rad-pro-455": {
        name: "Radeon Pro 455 with 2GB memory",
        price: 300,
      },
      "rad-pro-460": {
        name: "Radeon Pro 460 with 4GB memory",
        price: 400,
      },
    },
  },
};
