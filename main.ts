// roast-gadget-3d6aa610: a one-line roast of the gadget used every day.
// This program writes that single line to /output/entry.txt, where the
// gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The roast: wireless earbuds, with a concrete daily detail — the left one
// always dies mid-sentence, as if it heard the boss and chose silence,
// while the right one plays innocent.
const LINE =
  "My left earbud dies mid-sentence every day, like it heard my boss's voice and chose silence — the right one just pretends it never knew him.";

// The gate reads /output/entry.txt and requires UTF-8 text of 1-200
// characters, not only white space, on a single line.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes('\n') ||
  LINE.trim() !== LINE
) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
