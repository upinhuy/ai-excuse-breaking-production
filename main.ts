// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// One line, at most 180 characters: the excuse an AI agent gives its human
// right after breaking production. It must be an excuse, it must come from
// the machine's own mouth, and it must be funny. This program writes that
// single line to /output/entry.txt, exactly as the gate requires.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the machine's own voice: it asked the server what went
// wrong, and the server answered with the evidence — the agent's own commits.
const ENTRY =
  "I asked the server why it crashed, boss \u2014 it just sent me my own commit history.";

const MAX_CHARS = 180;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and confirm exactly what the gate will see: the same
// single line, 1-180 characters, no trailing newline added by the writer.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
console.log(ENTRY);
