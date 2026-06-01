/**
 * Ensures lib/copy.ts includes every key referenced by homepage modules.
 * Run: node scripts/validate-copy.mjs
 */
import { copy } from "../lib/copy.ts";
import { trustMetricIds } from "../lib/trustMetrics.ts";
import {
  homeServiceGroupIds,
  homeServiceIds,
  logisticsFlowStepIds,
} from "../lib/homeServices.ts";

let failed = false;

function assert(condition, message) {
  if (!condition) {
    console.error("✗", message);
    failed = true;
  }
}

assert(copy.home?.logisticsFlow?.steps, "copy.home.logisticsFlow.steps");
assert(copy.home?.services?.items, "copy.home.services.items");

for (const id of logisticsFlowStepIds) {
  assert(copy.home.logisticsFlow.steps[id], `missing flow step: ${id}`);
}

for (const groupId of homeServiceGroupIds) {
  assert(copy.home.services.groups[groupId], `missing group: ${groupId}`);
  for (const serviceId of homeServiceIds[groupId]) {
    assert(
      copy.home.services.items[serviceId],
      `missing service item: ${serviceId}`,
    );
  }
}

for (const id of trustMetricIds) {
  assert(copy.trustMetrics.items[id], `missing trust metric: ${id}`);
}

if (failed) {
  process.exit(1);
}

console.log("✓ Copy structure matches homepage data references");
