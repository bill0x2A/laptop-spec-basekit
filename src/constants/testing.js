import { componentType } from "./productList";

export const testComponents = {
  [componentType.SCREEN]: "13-retina",
  [componentType.CPU]: "quad-i7-27-base",
  [componentType.STORAGE]: "512-ssd",
  [componentType.MEMORY]: "8gb-mem",
  [componentType.GPU]: "rad-pro-455",
};

export const testProduct = {
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
};

export const testItem = {
  name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz",
  price: 300,
};
