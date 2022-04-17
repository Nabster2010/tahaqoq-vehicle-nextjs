export const ports = [
  {
    id: 1,
    name: "salwa",
    tName: "سلوي",
    code: 41,
  },
  {
    id: 2,
    name: "khafji",
    tName: "الخفجي",
    code: 44,
  },
  {
    id: 3,
    name: "batha",
    tName: "البطحاء",
    code: 31,
  },
];

export const paymentMethods = [
  {
    id: 1,
    name: "cash",
    tName: "نقدي",
  },
  {
    id: 2,
    name: "credit",
    tName: "اجل",
  },
  {
    id: 3,
    name: "Payment Card",
    tName: "نقاط بيع",
  },
  {
    id: 4,
    name: "Bank Transfer",
    tName: "تحويل بنكي",
  },
];

export const categories = [
  {
    id: 1,
    name: "PASSENGER",
  },
  {
    id: 2,
    name: "PICKUP",
  },
  {
    id: 3,
    name: "VAN",
  },
  {
    id: 4,
    name: "TRUCK",
  },
  {
    id: 5,
    name: "BUS",
  },
];

export const condition = [
  {
    id: 1,
    name: "NEW",
  },
  {
    id: 2,
    name: "USED",
  },
];
export const fuelTypes = [
  {
    id: 1,
    name: "PETROL",
  },
  {
    id: 2,
    name: "DIESEL",
  },
  {
    id: 3,
    name: "HIBRID",
  },
];
export const gearTypes = [
  {
    id: 1,
    name: "AUTOMATIC",
  },
  {
    id: 2,
    name: "MANUAL",
  },
  {
    id: 3,
    name: "CVT",
  },
];

export const limits = {
  co: {
    max: 3.5,
  },
  hc: {
    max: 1200,
  },
  diesel: {
    max: 40,
  },
};

export const testLimits = {
  hc: 1200,
  co: 3.5,
  diesel: 40,
  highBeam: 250,
  sideSlip: 7,
  suspension: 100,
  serviceBrake: 100,
  parkingBrake: 100,
};
