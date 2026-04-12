export interface HangulChar {
  char: string
  romanization: string
  sound: string // description of the sound
  type: 'vowel' | 'consonant'
  examples?: { word: string; meaning: string }[]
}

export const VOWELS: HangulChar[] = [
  { char: 'ㅏ', romanization: 'a', sound: 'como "a" em "cama"', type: 'vowel', examples: [{ word: '아이', meaning: 'criança' }] },
  { char: 'ㅑ', romanization: 'ya', sound: 'como "ya" em "iaque"', type: 'vowel', examples: [{ word: '야구', meaning: 'beisebol' }] },
  { char: 'ㅓ', romanization: 'eo', sound: 'como "ó" em "pó"', type: 'vowel', examples: [{ word: '어머니', meaning: 'mãe' }] },
  { char: 'ㅕ', romanization: 'yeo', sound: 'como "yó"', type: 'vowel', examples: [{ word: '여자', meaning: 'mulher' }] },
  { char: 'ㅗ', romanization: 'o', sound: 'como "ô" em "avô"', type: 'vowel', examples: [{ word: '오리', meaning: 'pato' }] },
  { char: 'ㅛ', romanization: 'yo', sound: 'como "yo" em "yoga"', type: 'vowel', examples: [{ word: '요리', meaning: 'culinária' }] },
  { char: 'ㅜ', romanization: 'u', sound: 'como "u" em "lua"', type: 'vowel', examples: [{ word: '우유', meaning: 'leite' }] },
  { char: 'ㅠ', romanization: 'yu', sound: 'como "yu" em "yukon"', type: 'vowel', examples: [{ word: '유리', meaning: 'vidro' }] },
  { char: 'ㅡ', romanization: 'eu', sound: 'vogal central, sem arredondamento labial', type: 'vowel', examples: [{ word: '으뜸', meaning: 'primeiro/melhor' }] },
  { char: 'ㅣ', romanization: 'i', sound: 'como "i" em "ilha"', type: 'vowel', examples: [{ word: '이름', meaning: 'nome' }] },
  { char: 'ㅐ', romanization: 'ae', sound: 'como "é" em "pé"', type: 'vowel', examples: [{ word: '개', meaning: 'cachorro' }] },
  { char: 'ㅔ', romanization: 'e', sound: 'como "ê" em "você"', type: 'vowel', examples: [{ word: '세계', meaning: 'mundo' }] },
]

export const CONSONANTS: HangulChar[] = [
  { char: 'ㄱ', romanization: 'g/k', sound: 'como "g" em "gato" (início) ou "k" em "oque" (final)', type: 'consonant', examples: [{ word: '가방', meaning: 'bolsa' }] },
  { char: 'ㄴ', romanization: 'n', sound: 'como "n" em "nada"', type: 'consonant', examples: [{ word: '나무', meaning: 'árvore' }] },
  { char: 'ㄷ', romanization: 'd/t', sound: 'como "d" em "dado" (início) ou "t" em "pato" (final)', type: 'consonant', examples: [{ word: '다리', meaning: 'perna/ponte' }] },
  { char: 'ㄹ', romanization: 'r/l', sound: 'entre "r" e "l", vibrado e lateral', type: 'consonant', examples: [{ word: '라디오', meaning: 'rádio' }] },
  { char: 'ㅁ', romanization: 'm', sound: 'como "m" em "mãe"', type: 'consonant', examples: [{ word: '마음', meaning: 'coração/mente' }] },
  { char: 'ㅂ', romanization: 'b/p', sound: 'como "b" em "bola" (início) ou "p" em "capim" (final)', type: 'consonant', examples: [{ word: '바다', meaning: 'mar' }] },
  { char: 'ㅅ', romanization: 's', sound: 'como "s" em "sapo"', type: 'consonant', examples: [{ word: '사람', meaning: 'pessoa' }] },
  { char: 'ㅇ', romanization: 'ng/silent', sound: 'silencioso no início da sílaba, "ng" como em "manga" no final', type: 'consonant', examples: [{ word: '아이', meaning: 'criança' }] },
  { char: 'ㅈ', romanization: 'j', sound: 'como "j" em "já"', type: 'consonant', examples: [{ word: '자동차', meaning: 'carro' }] },
  { char: 'ㅎ', romanization: 'h', sound: 'como "h" em "hotel"', type: 'consonant', examples: [{ word: '하늘', meaning: 'céu' }] },
  { char: 'ㅊ', romanization: 'ch', sound: 'como "tch" em "tchau", aspirado', type: 'consonant', examples: [{ word: '차', meaning: 'chá/carro' }] },
  { char: 'ㅋ', romanization: 'k', sound: 'como "k" em "kayak", aspirado', type: 'consonant', examples: [{ word: '커피', meaning: 'café' }] },
  { char: 'ㅌ', romanization: 't', sound: 'como "t" em "tatu", aspirado', type: 'consonant', examples: [{ word: '태양', meaning: 'sol' }] },
  { char: 'ㅍ', romanization: 'p', sound: 'como "p" em "pato", aspirado', type: 'consonant', examples: [{ word: '파도', meaning: 'onda' }] },
  { char: 'ㄲ', romanization: 'kk', sound: 'como "k" tenso/forte', type: 'consonant', examples: [{ word: '꽃', meaning: 'flor' }] },
  { char: 'ㄸ', romanization: 'tt', sound: 'como "t" tenso/forte', type: 'consonant', examples: [{ word: '따뜻하다', meaning: 'morno/quente' }] },
  { char: 'ㅃ', romanization: 'pp', sound: 'como "p" tenso/forte', type: 'consonant', examples: [{ word: '빨리', meaning: 'rapidamente' }] },
  { char: 'ㅆ', romanization: 'ss', sound: 'como "ss" tenso/forte', type: 'consonant', examples: [{ word: '씨', meaning: 'semente/Sr./Sra.' }] },
  { char: 'ㅉ', romanization: 'jj', sound: 'como "j" tenso/forte', type: 'consonant', examples: [{ word: '짜다', meaning: 'salgado' }] },
]

export const ALL_HANGUL = [...CONSONANTS, ...VOWELS]
