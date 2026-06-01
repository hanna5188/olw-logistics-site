export const trustMetricIds = [
  "warehouseSize",
  "palletsHandled",
  "dailyOrders",
  "nationwideDelivery",
  "integrations",
] as const;

export type TrustMetricId = (typeof trustMetricIds)[number];
