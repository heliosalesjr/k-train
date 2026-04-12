export interface HangulChar {
  char: string
  romanization: string
  sound: string
  type: 'vowel' | 'consonant'
  group?: 'basic' | 'compound' // para vogais
  composition?: string          // ex: "ㅗ + ㅏ" para compostas
  examples?: { word: string; meaning: string }[]
}

// 10 vogais básicas
const BASIC_VOWELS: HangulChar[] = [
  { char: 'ㅏ', romanization: 'a',   sound: 'como "a" em "cama"',                    type: 'vowel', group: 'basic', examples: [{ word: '아이', meaning: 'criança' }] },
  { char: 'ㅑ', romanization: 'ya',  sound: 'como "ya" em "iaque"',                   type: 'vowel', group: 'basic', examples: [{ word: '야구', meaning: 'beisebol' }] },
  { char: 'ㅓ', romanization: 'eo',  sound: 'como "ó" em "pó"',                       type: 'vowel', group: 'basic', examples: [{ word: '어머니', meaning: 'mãe' }] },
  { char: 'ㅕ', romanization: 'yeo', sound: 'como "yó"',                              type: 'vowel', group: 'basic', examples: [{ word: '여자', meaning: 'mulher' }] },
  { char: 'ㅗ', romanization: 'o',   sound: 'como "ô" em "avô"',                      type: 'vowel', group: 'basic', examples: [{ word: '오리', meaning: 'pato' }] },
  { char: 'ㅛ', romanization: 'yo',  sound: 'como "yo" em "yoga"',                    type: 'vowel', group: 'basic', examples: [{ word: '요리', meaning: 'culinária' }] },
  { char: 'ㅜ', romanization: 'u',   sound: 'como "u" em "lua"',                      type: 'vowel', group: 'basic', examples: [{ word: '우유', meaning: 'leite' }] },
  { char: 'ㅠ', romanization: 'yu',  sound: 'como "yu"',                              type: 'vowel', group: 'basic', examples: [{ word: '유리', meaning: 'vidro' }] },
  { char: 'ㅡ', romanization: 'eu',  sound: 'vogal central; lábios relaxados, sem arredondamento', type: 'vowel', group: 'basic', examples: [{ word: '으뜸', meaning: 'primeiro/melhor' }] },
  { char: 'ㅣ', romanization: 'i',   sound: 'como "i" em "ilha"',                     type: 'vowel', group: 'basic', examples: [{ word: '이름', meaning: 'nome' }] },
]

// 11 vogais compostas (이중모음)
const COMPOUND_VOWELS: HangulChar[] = [
  { char: 'ㅐ', romanization: 'ae',  sound: 'como "é" em "pé"',                       type: 'vowel', group: 'compound', composition: 'ㅏ + ㅣ', examples: [{ word: '개', meaning: 'cachorro' }] },
  { char: 'ㅒ', romanization: 'yae', sound: 'como "yé" — raro, quase idêntico a ㅖ',  type: 'vowel', group: 'compound', composition: 'ㅑ + ㅣ', examples: [{ word: '얘기', meaning: 'história/conversa' }] },
  { char: 'ㅔ', romanization: 'e',   sound: 'como "ê" em "você" — praticamente igual a ㅐ no coreano moderno', type: 'vowel', group: 'compound', composition: 'ㅓ + ㅣ', examples: [{ word: '세계', meaning: 'mundo' }] },
  { char: 'ㅖ', romanization: 'ye',  sound: 'como "yê"',                              type: 'vowel', group: 'compound', composition: 'ㅕ + ㅣ', examples: [{ word: '예쁘다', meaning: 'bonito/a' }] },
  { char: 'ㅘ', romanization: 'wa',  sound: 'como "wa" em "água"',                    type: 'vowel', group: 'compound', composition: 'ㅗ + ㅏ', examples: [{ word: '과일', meaning: 'fruta' }] },
  { char: 'ㅙ', romanization: 'wae', sound: 'como "wé" — quase idêntico a ㅚ e ㅞ',   type: 'vowel', group: 'compound', composition: 'ㅗ + ㅐ', examples: [{ word: '왜', meaning: 'por quê' }] },
  { char: 'ㅚ', romanization: 'oe',  sound: 'como "wé" — no coreano moderno soa igual a ㅙ/ㅞ', type: 'vowel', group: 'compound', composition: 'ㅗ + ㅣ', examples: [{ word: '회사', meaning: 'empresa' }] },
  { char: 'ㅝ', romanization: 'wo',  sound: 'como "wó"',                              type: 'vowel', group: 'compound', composition: 'ㅜ + ㅓ', examples: [{ word: '뭐', meaning: 'o quê?' }] },
  { char: 'ㅞ', romanization: 'we',  sound: 'como "wê" — quase idêntico a ㅙ/ㅚ',     type: 'vowel', group: 'compound', composition: 'ㅜ + ㅔ', examples: [{ word: '웨이터', meaning: 'garçom' }] },
  { char: 'ㅟ', romanization: 'wi',  sound: 'como "wi" em "Wilson"',                  type: 'vowel', group: 'compound', composition: 'ㅜ + ㅣ', examples: [{ word: '위험', meaning: 'perigo' }] },
  { char: 'ㅢ', romanization: 'ui',  sound: 'ㅡ + ㅣ deslizando; no meio de palavra soa como ㅣ', type: 'vowel', group: 'compound', composition: 'ㅡ + ㅣ', examples: [{ word: '의사', meaning: 'médico' }] },
]

export const VOWELS: HangulChar[] = [...BASIC_VOWELS, ...COMPOUND_VOWELS]

export const CONSONANTS: HangulChar[] = [
  { char: 'ㄱ', romanization: 'g/k',  sound: 'como "g" em "gato" (início) ou "k" no final de sílaba', type: 'consonant', examples: [{ word: '가방', meaning: 'bolsa' }] },
  { char: 'ㄴ', romanization: 'n',    sound: 'como "n" em "nada"',                    type: 'consonant', examples: [{ word: '나무', meaning: 'árvore' }] },
  { char: 'ㄷ', romanization: 'd/t',  sound: 'como "d" em "dado" (início) ou "t" no final',           type: 'consonant', examples: [{ word: '다리', meaning: 'perna/ponte' }] },
  { char: 'ㄹ', romanization: 'r/l',  sound: 'entre "r" e "l"; vibrado entre vogais, lateral no final', type: 'consonant', examples: [{ word: '라디오', meaning: 'rádio' }] },
  { char: 'ㅁ', romanization: 'm',    sound: 'como "m" em "mãe"',                     type: 'consonant', examples: [{ word: '마음', meaning: 'coração/mente' }] },
  { char: 'ㅂ', romanization: 'b/p',  sound: 'como "b" em "bola" (início) ou "p" no final',           type: 'consonant', examples: [{ word: '바다', meaning: 'mar' }] },
  { char: 'ㅅ', romanization: 's',    sound: 'como "s" em "sapo"',                    type: 'consonant', examples: [{ word: '사람', meaning: 'pessoa' }] },
  { char: 'ㅇ', romanization: 'ø/ng', sound: 'silencioso no início da sílaba; "ng" como em "manga" no final', type: 'consonant', examples: [{ word: '아이', meaning: 'criança' }] },
  { char: 'ㅈ', romanization: 'j',    sound: 'como "j" em "já"',                      type: 'consonant', examples: [{ word: '자동차', meaning: 'carro' }] },
  { char: 'ㅎ', romanization: 'h',    sound: 'como "h" em "hotel"',                   type: 'consonant', examples: [{ word: '하늘', meaning: 'céu' }] },
  { char: 'ㅊ', romanization: 'ch',   sound: 'como "tch" em "tchau", aspirado',       type: 'consonant', examples: [{ word: '차', meaning: 'chá/carro' }] },
  { char: 'ㅋ', romanization: 'k',    sound: 'como "k" aspirado — mais soprado que o nosso "c"', type: 'consonant', examples: [{ word: '커피', meaning: 'café' }] },
  { char: 'ㅌ', romanization: 't',    sound: 'como "t" aspirado — mais soprado que o nosso "t"', type: 'consonant', examples: [{ word: '태양', meaning: 'sol' }] },
  { char: 'ㅍ', romanization: 'p',    sound: 'como "p" aspirado — mais soprado que o nosso "p"', type: 'consonant', examples: [{ word: '파도', meaning: 'onda' }] },
  { char: 'ㄲ', romanization: 'kk',   sound: 'consoante tensa: "k" com tensão na garganta, sem aspiração', type: 'consonant', examples: [{ word: '꽃', meaning: 'flor' }] },
  { char: 'ㄸ', romanization: 'tt',   sound: 'consoante tensa: "t" com tensão, sem aspiração',    type: 'consonant', examples: [{ word: '따뜻하다', meaning: 'morno/quente' }] },
  { char: 'ㅃ', romanization: 'pp',   sound: 'consoante tensa: "p" com tensão, sem aspiração',    type: 'consonant', examples: [{ word: '빨리', meaning: 'rapidamente' }] },
  { char: 'ㅆ', romanization: 'ss',   sound: 'consoante tensa: "s" com tensão, mais forte',       type: 'consonant', examples: [{ word: '씨', meaning: 'semente/Sr./Sra.' }] },
  { char: 'ㅉ', romanization: 'jj',   sound: 'consoante tensa: "j" com tensão, sem aspiração',    type: 'consonant', examples: [{ word: '짜다', meaning: 'salgado' }] },
]

export const ALL_HANGUL = [...CONSONANTS, ...VOWELS]
