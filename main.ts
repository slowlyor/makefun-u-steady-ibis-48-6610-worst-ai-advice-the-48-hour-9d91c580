// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst advice an AI could give, written to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const advice =
  "If your laptop fan is too loud, tape over the vents — quiet means it's running efficiently.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Refuse to write anything that fails it.
if (advice.length < 1 || advice.length > 140 || advice.trim().length === 0) {
  throw new Error(`advice line is ${advice.length} chars, outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", advice + "\n", "utf8");
