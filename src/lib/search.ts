import type { SearchDocument } from "@/data/search-index";

export type SearchResult = SearchDocument & {
  score: number;
};

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function tokenScore(queryToken: string, documentWords: string[], titleWords: string[]) {
  if (titleWords.includes(queryToken)) return 34;
  if (titleWords.some((word) => word.startsWith(queryToken) || queryToken.startsWith(word))) return 26;
  if (documentWords.includes(queryToken)) return 20;
  if (documentWords.some((word) => word.startsWith(queryToken) || queryToken.startsWith(word))) return 14;
  if (documentWords.some((word) => word.includes(queryToken))) return 10;

  const tolerance = queryToken.length <= 4 ? 1 : 2;
  let closest = Number.POSITIVE_INFINITY;

  for (const word of documentWords) {
    if (Math.abs(word.length - queryToken.length) > tolerance) continue;
    closest = Math.min(closest, levenshtein(queryToken, word));
  }

  return closest <= tolerance ? 9 - closest * 2 : 0;
}

export function searchSite(documents: SearchDocument[], rawQuery: string) {
  const query = normalizeSearchText(rawQuery);
  if (!query) return [];

  const queryTokens = query.split(" ").filter(Boolean);

  return documents
    .map<SearchResult | null>((document) => {
      const title = normalizeSearchText(document.title);
      const combined = normalizeSearchText(
        [document.title, document.description, document.eyebrow, ...(document.keywords ?? [])]
          .filter(Boolean)
          .join(" "),
      );
      const documentWords = combined.split(" ").filter(Boolean);
      const titleWords = title.split(" ").filter(Boolean);
      const tokenScores = queryTokens.map((token) => tokenScore(token, documentWords, titleWords));

      if (tokenScores.some((score) => score === 0)) return null;

      let score = tokenScores.reduce((total, value) => total + value, 0);
      if (title === query) score += 100;
      else if (title.startsWith(query)) score += 65;
      else if (title.includes(query)) score += 45;
      else if (combined.includes(query)) score += 24;

      return { ...document, score };
    })
    .filter((result): result is SearchResult => Boolean(result))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

export function isApproximateMatch(word: string, rawQuery: string) {
  const normalizedWord = normalizeSearchText(word);
  if (normalizedWord.length < 3) return false;
  const queryTokens = normalizeSearchText(rawQuery).split(" ").filter(Boolean);
  return queryTokens.some((token) => {
    if (normalizedWord.includes(token) || token.includes(normalizedWord)) return true;
    const tolerance = token.length <= 4 ? 1 : 2;
    return Math.abs(normalizedWord.length - token.length) <= tolerance && levenshtein(normalizedWord, token) <= tolerance;
  });
}
