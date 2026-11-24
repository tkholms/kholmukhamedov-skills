/**
 * Uzbek Latin ↔ Cyrillic transliteration
 *
 * Based on the official Uzbek Latin alphabet (1995 reform, updated).
 * Edge cases are flagged with TODO comments for manual review.
 *
 * Key rules:
 * - Oʻ/oʻ ↔ Ў/ў  (with modifier letter turned comma / apostrophe)
 * - Gʻ/gʻ ↔ Ғ/ғ
 * - Sh/sh ↔ Ш/ш
 * - Ch/ch ↔ Ч/ч
 * - Ng/ng ↔ Нг/нг (not Ң — Uzbek Cyrillic uses Нг)
 * - Ts → Ц only in borrowed words (rare)
 * - ʼ (tutuq belgisi / glottal stop) has no Cyrillic equivalent — preserved as ъ
 */

// Latin → Cyrillic mapping (digraphs first, then single chars)
const LATIN_TO_CYRILLIC_MAP: [string, string][] = [
  // Digraphs — uppercase
  ["Sh", "Ш"],
  ["SH", "Ш"],
  ["Ch", "Ч"],
  ["CH", "Ч"],
  ["Ng", "Нг"],
  ["NG", "НГ"],
  ["Oʻ", "Ў"],
  ["O'", "Ў"],
  ["O‘", "Ў"],
  ["Oʻ", "Ў"],
  ["Gʻ", "Ғ"],
  ["G'", "Ғ"],
  ["G‘", "Ғ"],
  ["Gʻ", "Ғ"],
  // Digraphs — lowercase
  ["sh", "ш"],
  ["ch", "ч"],
  ["ng", "нг"],
  ["oʻ", "ў"],
  ["o'", "ў"],
  ["o‘", "ў"],
  ["oʻ", "ў"],
  ["gʻ", "ғ"],
  ["g'", "ғ"],
  ["g‘", "ғ"],
  ["gʻ", "ғ"],
  // Single characters — uppercase
  ["A", "А"],
  ["B", "Б"],
  ["D", "Д"],
  ["E", "Е"],
  ["F", "Ф"],
  ["G", "Г"],
  ["H", "Ҳ"],
  ["I", "И"],
  ["J", "Ж"],
  ["K", "К"],
  ["L", "Л"],
  ["M", "М"],
  ["N", "Н"],
  ["O", "О"],
  ["P", "П"],
  ["Q", "Қ"],
  ["R", "Р"],
  ["S", "С"],
  ["T", "Т"],
  ["U", "У"],
  ["V", "В"],
  ["X", "Х"],
  ["Y", "Й"],
  ["Z", "З"],
  // Single characters — lowercase
  ["a", "а"],
  ["b", "б"],
  ["d", "д"],
  ["e", "е"],
  ["f", "ф"],
  ["g", "г"],
  ["h", "ҳ"],
  ["i", "и"],
  ["j", "ж"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["q", "қ"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["v", "в"],
  ["x", "х"],
  ["y", "й"],
  ["z", "з"],
  // Tutuq belgisi (glottal stop)
  ["ʼ", "ъ"],
  ["’", "ъ"],
  ["'", "ъ"],
];

// Cyrillic → Latin mapping (digraphs first)
const CYRILLIC_TO_LATIN_MAP: [string, string][] = [
  // Special combinations
  ["Нг", "Ng"],
  ["НГ", "NG"],
  ["нг", "ng"],
  // Single characters — uppercase
  ["А", "A"],
  ["Б", "B"],
  ["В", "V"],
  ["Г", "G"],
  ["Д", "D"],
  ["Е", "E"],
  ["Ж", "J"],
  ["З", "Z"],
  ["И", "I"],
  ["Й", "Y"],
  ["К", "K"],
  ["Л", "L"],
  ["М", "M"],
  ["Н", "N"],
  ["О", "O"],
  ["П", "P"],
  ["Р", "R"],
  ["С", "S"],
  ["Т", "T"],
  ["У", "U"],
  ["Ф", "F"],
  ["Х", "X"],
  ["Ч", "Ch"],
  ["Ш", "Sh"],
  ["Ъ", "ʼ"],
  ["Ғ", "Gʻ"],
  ["Қ", "Q"],
  ["Ҳ", "H"],
  ["Ў", "Oʻ"],
  // Single characters — lowercase
  ["а", "a"],
  ["б", "b"],
  ["в", "v"],
  ["г", "g"],
  ["д", "d"],
  ["е", "e"],
  ["ж", "j"],
  ["з", "z"],
  ["и", "i"],
  ["й", "y"],
  ["к", "k"],
  ["л", "l"],
  ["м", "m"],
  ["н", "n"],
  ["о", "o"],
  ["п", "p"],
  ["р", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "u"],
  ["ф", "f"],
  ["х", "x"],
  ["ч", "ch"],
  ["ш", "sh"],
  ["ъ", "ʼ"],
  ["ғ", "gʻ"],
  ["қ", "q"],
  ["ҳ", "h"],
  ["ў", "oʻ"],
  // Borrowed-word letters (passthrough for now)
  // TODO: flag these for manual review — they appear in Russian loanwords
  ["Ё", "Yo"],
  ["ё", "yo"],
  ["Ц", "Ts"],
  ["ц", "ts"],
  ["Щ", "Shch"],
  ["щ", "shch"],
  ["Ы", "I"],
  ["ы", "i"],
  ["Э", "E"],
  ["э", "e"],
  ["Ю", "Yu"],
  ["ю", "yu"],
  ["Я", "Ya"],
  ["я", "ya"],
  ["Ь", ""],
  ["ь", ""],
];

function buildReplacer(
  map: [string, string][]
): (text: string) => string {
  // Build a regex that matches the longest patterns first
  // The map is already ordered digraphs-first
  const pattern = map
    .map(([from]) => from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(pattern, "g");
  const lookup = new Map(map);

  return (text: string) =>
    text.replace(regex, (match) => lookup.get(match) ?? match);
}

const toLatin = buildReplacer(CYRILLIC_TO_LATIN_MAP);
const toCyrillic = buildReplacer(LATIN_TO_CYRILLIC_MAP);

/**
 * Detect whether a string is predominantly Cyrillic or Latin.
 * Returns "cyrillic" if more Cyrillic code points are found, else "latin".
 */
export function detectScript(text: string): "latin" | "cyrillic" {
  let latin = 0;
  let cyrillic = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code >= 0x0400 && code <= 0x04ff) cyrillic++;
    else if (
      (code >= 0x0041 && code <= 0x005a) ||
      (code >= 0x0061 && code <= 0x007a)
    )
      latin++;
  }
  return cyrillic > latin ? "cyrillic" : "latin";
}

/**
 * Convert text to the target script.
 * If the text is already in the target script, it passes through unchanged.
 */
export function transliterate(
  text: string,
  target: "latin" | "cyrillic"
): string {
  if (!text) return text;
  const current = detectScript(text);
  if (current === target) return text;
  return target === "latin" ? toLatin(text) : toCyrillic(text);
}

/**
 * Convert any text to the target script regardless of detection.
 * Useful when you know the source script.
 */
export function forceTransliterate(
  text: string,
  target: "latin" | "cyrillic"
): string {
  if (!text) return text;
  return target === "latin" ? toLatin(text) : toCyrillic(text);
}
