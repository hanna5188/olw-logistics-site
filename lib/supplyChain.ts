export const supplyChainCategoryIds = [
  "internationalFreight",
  "customsImport",
  "usLogistics",
  "warehouseFulfillment",
] as const;

export type SupplyChainCategoryId = (typeof supplyChainCategoryIds)[number];

export const supplyChainServiceIds = {
  internationalFreight: [
    "oceanFreightChinaUsa",
    "airFreight",
    "fclLclShipping",
    "supplierCoordination",
  ],
  customsImport: [
    "customsClearance",
    "isfFiling",
    "importDocumentation",
    "fdaInspection",
  ],
  usLogistics: ["portDrayage", "trucking", "railTransportation", "lastMileDelivery"],
  warehouseFulfillment: [
    "overseasWarehouse",
    "amazonFbaPrep",
    "b2bFulfillment",
    "shopifyFulfillment",
    "tiktokFulfillment",
    "walmartFulfillment",
    "onePieceDropshipping",
    "pickAndPack",
    "returnsProcessing",
    "relabeling",
  ],
} as const;

export type SupplyChainServiceId =
  (typeof supplyChainServiceIds)[SupplyChainCategoryId][number];

export const allSupplyChainServiceIds: SupplyChainServiceId[] =
  supplyChainCategoryIds.flatMap(
    (category) => supplyChainServiceIds[category],
  ) as SupplyChainServiceId[];
