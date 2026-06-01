export const homeServiceGroupIds = [
  "originFreight",
  "importTransport",
  "warehouseChannels",
] as const;

export type HomeServiceGroupId = (typeof homeServiceGroupIds)[number];

export const homeServiceIds = {
  originFreight: [
    "chinaSourcing",
    "oceanFreight",
    "airFreight",
  ],
  importTransport: ["customsClearance", "drayageTrucking"],
  warehouseChannels: [
    "usWarehousing",
    "amazonFbaPrep",
    "shopifyFulfillment",
    "tiktokFulfillment",
    "b2bDistribution",
    "pickAndPack",
    "dropshipping",
  ],
} as const;

export type HomeServiceId =
  (typeof homeServiceIds)[HomeServiceGroupId][number];

export const logisticsFlowStepIds = [
  "factory",
  "freight",
  "customs",
  "warehouse",
  "fulfillment",
  "delivery",
] as const;

export type LogisticsFlowStepId = (typeof logisticsFlowStepIds)[number];
