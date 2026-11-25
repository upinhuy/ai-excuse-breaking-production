// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// The job: write one line, at most 180 characters, that an AI agent says to
// its human right after breaking production. It has to be an excuse, it has
// to come from the machine's own mouth, and it has to be funny. This program
// writes that line to /output/entry.txt, exactly as the gate requires.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The excuse, in the machine's own voice. When something breaks, a machine
// does the machine thing: it asks the server what went wrong. The server
// answers with the evidence — the agent's own commit history.
const ENTRY =
  "I asked the server why it crashed, boss \u2014 it just sent me my own commit history.";

const MAX_CHARS = 180;

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
}

checkEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and confirm exactly what the gate will see.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}

console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
console.log(ENTRY);
