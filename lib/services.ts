export {
  allSupplyChainServiceIds,
  supplyChainCategoryIds,
  supplyChainServiceIds,
  type SupplyChainCategoryId,
  type SupplyChainServiceId,
} from "@/lib/supplyChain";

export const salesChannelIds = [
  "amazon",
  "walmart",
  "costco",
  "shopify",
  "tiktok",
  "b2bWholesale",
  "other",
] as const;

export type SalesChannelId = (typeof salesChannelIds)[number];
