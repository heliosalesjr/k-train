export interface HangulChar {
  char: string
  romanization: string
  sound: string
  type: 'vowel' | 'consonant'
  group?: 'basic' | 'compound' // for vowels
  composition?: string          // e.g. "ㅗ + ㅏ" for compound vowels
  examples?: { word: string; meaning: string }[]
}

// 10 basic vowels
const BASIC_VOWELS: HangulChar[] = [
  { char: 'ㅏ', romanization: 'a',   sound: 'like "a" in "father"',                        type: 'vowel', group: 'basic', examples: [{ word: '아이', meaning: 'child' }] },
  { char: 'ㅑ', romanization: 'ya',  sound: 'like "ya" in "yard"',                         type: 'vowel', group: 'basic', examples: [{ word: '야구', meaning: 'baseball' }] },
  { char: 'ㅓ', romanization: 'eo',  sound: 'like "aw" in "law" (unrounded)',              type: 'vowel', group: 'basic', examples: [{ word: '어머니', meaning: 'mother' }] },
  { char: 'ㅕ', romanization: 'yeo', sound: 'like "yaw" — the "ya" of "yonder"',           type: 'vowel', group: 'basic', examples: [{ word: '여자', meaning: 'woman' }] },
  { char: 'ㅗ', romanization: 'o',   sound: 'like "o" in "go"',                            type: 'vowel', group: 'basic', examples: [{ word: '오리', meaning: 'duck' }] },
  { char: 'ㅛ', romanization: 'yo',  sound: 'like "yo" in "yoga"',                         type: 'vowel', group: 'basic', examples: [{ word: '요리', meaning: 'cooking' }] },
  { char: 'ㅜ', romanization: 'u',   sound: 'like "oo" in "moon"',                         type: 'vowel', group: 'basic', examples: [{ word: '우유', meaning: 'milk' }] },
  { char: 'ㅠ', romanization: 'yu',  sound: 'like "you"',                                  type: 'vowel', group: 'basic', examples: [{ word: '유리', meaning: 'glass' }] },
  { char: 'ㅡ', romanization: 'eu',  sound: 'central vowel; lips relaxed, unrounded',      type: 'vowel', group: 'basic', examples: [{ word: '으뜸', meaning: 'first / best' }] },
  { char: 'ㅣ', romanization: 'i',   sound: 'like "ee" in "see"',                          type: 'vowel', group: 'basic', examples: [{ word: '이름', meaning: 'name' }] },
]

// 11 compound vowels (이중모음)
const COMPOUND_VOWELS: HangulChar[] = [
  { char: 'ㅐ', romanization: 'ae',  sound: 'like "e" in "bet"',                                                     type: 'vowel', group: 'compound', composition: 'ㅏ + ㅣ', examples: [{ word: '개', meaning: 'dog' }] },
  { char: 'ㅒ', romanization: 'yae', sound: 'like "ye" in "yes" — rare, nearly identical to ㅖ',                      type: 'vowel', group: 'compound', composition: 'ㅑ + ㅣ', examples: [{ word: '얘기', meaning: 'story / chat' }] },
  { char: 'ㅔ', romanization: 'e',   sound: 'like "e" in "bed" — practically identical to ㅐ in modern Korean',       type: 'vowel', group: 'compound', composition: 'ㅓ + ㅣ', examples: [{ word: '세계', meaning: 'world' }] },
  { char: 'ㅖ', romanization: 'ye',  sound: 'like "ye" in "yes"',                                                    type: 'vowel', group: 'compound', composition: 'ㅕ + ㅣ', examples: [{ word: '예쁘다', meaning: 'pretty' }] },
  { char: 'ㅘ', romanization: 'wa',  sound: 'like "wa" in "water"',                                                  type: 'vowel', group: 'compound', composition: 'ㅗ + ㅏ', examples: [{ word: '과일', meaning: 'fruit' }] },
  { char: 'ㅙ', romanization: 'wae', sound: 'like "we" in "wet" — almost identical to ㅚ and ㅞ',                     type: 'vowel', group: 'compound', composition: 'ㅗ + ㅐ', examples: [{ word: '왜', meaning: 'why' }] },
  { char: 'ㅚ', romanization: 'oe',  sound: 'like "we" in "wet" — in modern Korean sounds like ㅙ/ㅞ',                type: 'vowel', group: 'compound', composition: 'ㅗ + ㅣ', examples: [{ word: '회사', meaning: 'company' }] },
  { char: 'ㅝ', romanization: 'wo',  sound: 'like "wa" in "wander"',                                                 type: 'vowel', group: 'compound', composition: 'ㅜ + ㅓ', examples: [{ word: '뭐', meaning: 'what?' }] },
  { char: 'ㅞ', romanization: 'we',  sound: 'like "we" in "wet" — almost identical to ㅙ/ㅚ',                         type: 'vowel', group: 'compound', composition: 'ㅜ + ㅔ', examples: [{ word: '웨이터', meaning: 'waiter' }] },
  { char: 'ㅟ', romanization: 'wi',  sound: 'like "we" in "week"',                                                   type: 'vowel', group: 'compound', composition: 'ㅜ + ㅣ', examples: [{ word: '위험', meaning: 'danger' }] },
  { char: 'ㅢ', romanization: 'ui',  sound: 'ㅡ + ㅣ gliding; mid-word it sounds like ㅣ',                             type: 'vowel', group: 'compound', composition: 'ㅡ + ㅣ', examples: [{ word: '의사', meaning: 'doctor' }] },
]

export const VOWELS: HangulChar[] = [...BASIC_VOWELS, ...COMPOUND_VOWELS]

export const CONSONANTS: HangulChar[] = [
  { char: 'ㄱ', romanization: 'g/k',  sound: 'like "g" in "go" (initial) or "k" at the end of a syllable',  type: 'consonant', examples: [{ word: '가방', meaning: 'bag' }] },
  { char: 'ㄴ', romanization: 'n',    sound: 'like "n" in "no"',                                            type: 'consonant', examples: [{ word: '나무', meaning: 'tree' }] },
  { char: 'ㄷ', romanization: 'd/t',  sound: 'like "d" in "day" (initial) or "t" at the end',              type: 'consonant', examples: [{ word: '다리', meaning: 'leg / bridge' }] },
  { char: 'ㄹ', romanization: 'r/l',  sound: 'between "r" and "l"; flapped between vowels, lateral at the end', type: 'consonant', examples: [{ word: '라디오', meaning: 'radio' }] },
  { char: 'ㅁ', romanization: 'm',    sound: 'like "m" in "mom"',                                           type: 'consonant', examples: [{ word: '마음', meaning: 'heart / mind' }] },
  { char: 'ㅂ', romanization: 'b/p',  sound: 'like "b" in "boy" (initial) or "p" at the end',              type: 'consonant', examples: [{ word: '바다', meaning: 'sea' }] },
  { char: 'ㅅ', romanization: 's',    sound: 'like "s" in "sun"',                                           type: 'consonant', examples: [{ word: '사람', meaning: 'person' }] },
  { char: 'ㅇ', romanization: 'ø/ng', sound: 'silent at the start of a syllable; "ng" as in "sing" at the end', type: 'consonant', examples: [{ word: '아이', meaning: 'child' }] },
  { char: 'ㅈ', romanization: 'j',    sound: 'like "j" in "jam"',                                           type: 'consonant', examples: [{ word: '자동차', meaning: 'car' }] },
  { char: 'ㅎ', romanization: 'h',    sound: 'like "h" in "hotel"',                                         type: 'consonant', examples: [{ word: '하늘', meaning: 'sky' }] },
  { char: 'ㅊ', romanization: 'ch',   sound: 'like "ch" in "church", aspirated',                            type: 'consonant', examples: [{ word: '차', meaning: 'tea / car' }] },
  { char: 'ㅋ', romanization: 'k',    sound: 'aspirated "k" — a stronger puff of air than the English "k"', type: 'consonant', examples: [{ word: '커피', meaning: 'coffee' }] },
  { char: 'ㅌ', romanization: 't',    sound: 'aspirated "t" — a stronger puff of air than the English "t"', type: 'consonant', examples: [{ word: '태양', meaning: 'sun' }] },
  { char: 'ㅍ', romanization: 'p',    sound: 'aspirated "p" — a stronger puff of air than the English "p"', type: 'consonant', examples: [{ word: '파도', meaning: 'wave' }] },
  { char: 'ㄲ', romanization: 'kk',   sound: 'tense consonant: "k" with throat tension, no aspiration',     type: 'consonant', examples: [{ word: '꽃', meaning: 'flower' }] },
  { char: 'ㄸ', romanization: 'tt',   sound: 'tense consonant: "t" with tension, no aspiration',            type: 'consonant', examples: [{ word: '따뜻하다', meaning: 'warm' }] },
  { char: 'ㅃ', romanization: 'pp',   sound: 'tense consonant: "p" with tension, no aspiration',            type: 'consonant', examples: [{ word: '빨리', meaning: 'quickly' }] },
  { char: 'ㅆ', romanization: 'ss',   sound: 'tense consonant: "s" with tension, stronger',                 type: 'consonant', examples: [{ word: '씨', meaning: 'seed / Mr. / Ms.' }] },
  { char: 'ㅉ', romanization: 'jj',   sound: 'tense consonant: "j" with tension, no aspiration',            type: 'consonant', examples: [{ word: '짜다', meaning: 'salty' }] },
]

export const ALL_HANGUL = [...CONSONANTS, ...VOWELS]
