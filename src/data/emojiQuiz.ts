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

  // Comida & bebida (adicionais)
  { id: 'em_banana',   korean: '바나나',   emoji: '🍌' },
  { id: 'em_subak',    korean: '수박',     emoji: '🍉' },
  { id: 'em_dalgi',    korean: '딸기',     emoji: '🍓' },
  { id: 'em_podo',     korean: '포도',     emoji: '🍇' },
  { id: 'em_gyeran',   korean: '계란',     emoji: '🥚' },
  { id: 'em_chikin',   korean: '치킨',     emoji: '🍗' },
  { id: 'em_choco',    korean: '초콜릿',   emoji: '🍫' },
  { id: 'em_aiseu',    korean: '아이스크림', emoji: '🍦' },
  { id: 'em_uyu',      korean: '우유',     emoji: '🥛' },
  { id: 'em_maekju',   korean: '맥주',     emoji: '🍺' },

  // Animais (adicionais)
  { id: 'em_tokki',    korean: '토끼',     emoji: '🐰' },
  { id: 'em_gom',      korean: '곰',       emoji: '🐻' },
  { id: 'em_horangi',  korean: '호랑이',   emoji: '🐯' },
  { id: 'em_kokkiri',  korean: '코끼리',   emoji: '🐘' },
  { id: 'em_wonsungyi',korean: '원숭이',   emoji: '🐒' },
  { id: 'em_dwaeji',   korean: '돼지',     emoji: '🐷' },
  { id: 'em_so',       korean: '소',       emoji: '🐄' },
  { id: 'em_dak',      korean: '닭',       emoji: '🐔' },

  // Transporte & objetos
  { id: 'em_bihaenggi',korean: '비행기',   emoji: '✈️' },
  { id: 'em_gicha',    korean: '기차',     emoji: '🚂' },
  { id: 'em_jajeongeo',korean: '자전거',   emoji: '🚲' },
  { id: 'em_beoseu',   korean: '버스',     emoji: '🚌' },
  { id: 'em_bae',      korean: '배',       emoji: '🚢' },
  { id: 'em_sigye',    korean: '시계',     emoji: '⏰' },
  { id: 'em_gabang',   korean: '가방',     emoji: '👜' },
  { id: 'em_usan',     korean: '우산',     emoji: '☂️' },
  { id: 'em_gong',     korean: '공',       emoji: '⚽' },
  { id: 'em_yeolsoe',  korean: '열쇠',     emoji: '🔑' },

  // Natureza & clima
  { id: 'em_bi',       korean: '비',       emoji: '🌧️' },
  { id: 'em_gureum',   korean: '구름',     emoji: '☁️' },
  { id: 'em_bul',      korean: '불',       emoji: '🔥' },
  { id: 'em_byeol',    korean: '별',       emoji: '⭐' },

  // Misc
  { id: 'em_eumak',    korean: '음악',     emoji: '🎵' },
  { id: 'em_yeonghwa', korean: '영화',     emoji: '🎬' },
  { id: 'em_don',      korean: '돈',       emoji: '💰' },
  { id: 'em_sarang',   korean: '사랑',     emoji: '❤️' },
  { id: 'em_saengil',  korean: '생일',     emoji: '🎉' },
]
