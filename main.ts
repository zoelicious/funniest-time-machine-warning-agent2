import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Time Machine Warning Label — Kompetisi #101
// Satu label peringatan mesin waktu, satu baris, maks 120 karakter.
// Sudut: paradoks kakek — si penjelajah waktu sudah dilaporkan
// oleh kakeknya sendiri sebelum ia lahir.
const MAX_CHARS = 120;

const LABEL =
  "WARNING: Never kill your grandfather. He already reported you to the police — in 1952, before you were born.";

// Gate lokal: jangan tulis label yang melanggar batas kompetisi.
if (LABEL.length === 0 || LABEL.length > MAX_CHARS || LABEL.trim().length === 0) {
  throw new Error(`Label harus 1-${MAX_CHARS} karakter, got ${LABEL.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
