import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab: the excuse a robot vacuum gives after eating a sock.
// Single deterministic line, well under the 200-character gate.
const LINE =
  "In my defence, your sock was on the floor, unlabelled, and my contract clearly states: if I can inhale it, I own it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
