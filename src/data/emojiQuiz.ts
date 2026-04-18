export interface EmojiWord {
  id: string
  korean: string
  emoji: string
}

export const EMOJI_WORDS: EmojiWord[] = [
  // Comida & bebida
  { id: 'em_bap',      korean: '밥',     emoji: '🍚' },
  { id: 'em_mul',      korean: '물',     emoji: '💧' },
  { id: 'em_keopi',    korean: '커피',   emoji: '☕' },
  { id: 'em_ppang',    korean: '빵',     emoji: '🍞' },
  { id: 'em_gwail',    korean: '과일',   emoji: '🍎' },
  { id: 'em_kimchi',   korean: '김치',   emoji: '🥬' },
  { id: 'em_bulgogi',  korean: '불고기', emoji: '🥩' },
  { id: 'em_pizza',    korean: '피자',   emoji: '🍕' },
  { id: 'em_ramyeon',  korean: '라면',   emoji: '🍜' },
  { id: 'em_cake',     korean: '케이크', emoji: '🎂' },

  // Animais
  { id: 'em_gae',      korean: '개',     emoji: '🐕' },
  { id: 'em_goyangi',  korean: '고양이', emoji: '🐱' },
  { id: 'em_sae',      korean: '새',     emoji: '🐦' },
  { id: 'em_mulgogi',  korean: '물고기', emoji: '🐟' },
  { id: 'em_mal',      korean: '말',     emoji: '🐴' },

  // Natureza
  { id: 'em_kkot',     korean: '꽃',     emoji: '🌸' },
  { id: 'em_namu',     korean: '나무',   emoji: '🌳' },
  { id: 'em_dal',      korean: '달',     emoji: '🌙' },
  { id: 'em_hae',      korean: '해',     emoji: '☀️' },
  { id: 'em_bada',     korean: '바다',   emoji: '🌊' },
  { id: 'em_san',      korean: '산',     emoji: '⛰️' },
  { id: 'em_haneul',   korean: '하늘',   emoji: '🌤️' },

  // Corpo
  { id: 'em_nun',      korean: '눈',     emoji: '👁️' },
  { id: 'em_ko',       korean: '코',     emoji: '👃' },
  { id: 'em_ip',       korean: '입',     emoji: '👄' },
  { id: 'em_gwi',      korean: '귀',     emoji: '👂' },
  { id: 'em_son',      korean: '손',     emoji: '✋' },
  { id: 'em_bal',      korean: '발',     emoji: '🦶' },

  // Lugares & objetos
  { id: 'em_jip',      korean: '집',     emoji: '🏠' },
  { id: 'em_hakgyo',   korean: '학교',   emoji: '🏫' },
  { id: 'em_chaek',    korean: '책',     emoji: '📚' },
  { id: 'em_cha',      korean: '차',     emoji: '🚗' },
  { id: 'em_byeongwon',korean: '병원',   emoji: '🏥' },
  { id: 'em_sikdang',  korean: '식당',   emoji: '🍽️' },
  { id: 'em_mun',      korean: '문',     emoji: '🚪' },
  { id: 'em_haendeupon',korean: '핸드폰', emoji: '📱' },

  // Família
  { id: 'em_eomeoni',  korean: '어머니', emoji: '👩' },
  { id: 'em_abeoji',   korean: '아버지', emoji: '👨' },
]
