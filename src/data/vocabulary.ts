export interface VocabCard {
  id: string
  korean: string
  romanization: string
  english: string
  category: string
  example?: { sentence: string; translation: string }
}

export const VOCAB_CATEGORIES = [
  'greetings',
  'numbers',
  'family',
  'food',
  'colors',
  'days of the week',
  'body',
  'nature',
  'basic verbs',
  'everyday',
] as const

export const VOCABULARY: VocabCard[] = [
  // Saudações
  { id: 'v1', korean: '안녕하세요', romanization: 'annyeonghaseyo', english: 'Hello / Good afternoon', category: 'greetings', example: { sentence: '안녕하세요! 처음 뵙겠습니다.', translation: 'Hello! Nice to meet you.' } },
  { id: 'v2', korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', english: 'Goodbye (to someone leaving)', category: 'greetings' },
  { id: 'v3', korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', english: 'Goodbye (to someone staying)', category: 'greetings' },
  { id: 'v4', korean: '감사합니다', romanization: 'gamsahamnida', english: 'Thank you', category: 'greetings', example: { sentence: '도와주셔서 감사합니다.', translation: 'Thank you for helping me.' } },
  { id: 'v5', korean: '죄송합니다', romanization: 'joesonghamnida', english: 'Sorry / Forgive me', category: 'greetings' },
  { id: 'v6', korean: '네', romanization: 'ne', english: 'Yes', category: 'greetings' },
  { id: 'v7', korean: '아니요', romanization: 'aniyo', english: 'No', category: 'greetings' },
  { id: 'v8', korean: '이름이 뭐예요?', romanization: 'ireumi mwoyeyo?', english: 'What is your name?', category: 'greetings' },

  // Números
  { id: 'n1', korean: '일', romanization: 'il', english: '1 (Sino-Korean)', category: 'numbers' },
  { id: 'n2', korean: '이', romanization: 'i', english: '2 (Sino-Korean)', category: 'numbers' },
  { id: 'n3', korean: '삼', romanization: 'sam', english: '3 (Sino-Korean)', category: 'numbers' },
  { id: 'n4', korean: '사', romanization: 'sa', english: '4 (Sino-Korean)', category: 'numbers' },
  { id: 'n5', korean: '오', romanization: 'o', english: '5 (Sino-Korean)', category: 'numbers' },
  { id: 'n6', korean: '하나', romanization: 'hana', english: '1 (native)', category: 'numbers' },
  { id: 'n7', korean: '둘', romanization: 'dul', english: '2 (native)', category: 'numbers' },
  { id: 'n8', korean: '셋', romanization: 'set', english: '3 (native)', category: 'numbers' },
  { id: 'n9', korean: '넷', romanization: 'net', english: '4 (native)', category: 'numbers' },
  { id: 'n10', korean: '다섯', romanization: 'daseot', english: '5 (native)', category: 'numbers' },

  // Família
  { id: 'f1', korean: '어머니', romanization: 'eomeoni', english: 'mother', category: 'family' },
  { id: 'f2', korean: '아버지', romanization: 'abeoji', english: 'father', category: 'family' },
  { id: 'f3', korean: '오빠', romanization: 'oppa', english: 'older brother (used by women)', category: 'family' },
  { id: 'f4', korean: '형', romanization: 'hyeong', english: 'older brother (used by men)', category: 'family' },
  { id: 'f5', korean: '언니', romanization: 'eonni', english: 'older sister (used by women)', category: 'family' },
  { id: 'f6', korean: '누나', romanization: 'nuna', english: 'older sister (used by men)', category: 'family' },
  { id: 'f7', korean: '동생', romanization: 'dongsaeng', english: 'younger sibling', category: 'family' },
  { id: 'f8', korean: '친구', romanization: 'chingu', english: 'friend', category: 'family' },

  // Comida
  { id: 'c1', korean: '밥', romanization: 'bap', english: 'cooked rice / meal', category: 'food' },
  { id: 'c2', korean: '물', romanization: 'mul', english: 'water', category: 'food' },
  { id: 'c3', korean: '김치', romanization: 'kimchi', english: 'kimchi (fermented cabbage)', category: 'food' },
  { id: 'c4', korean: '불고기', romanization: 'bulgogi', english: 'bulgogi (marinated beef)', category: 'food' },
  { id: 'c5', korean: '맛있다', romanization: 'masitda', english: 'delicious', category: 'food' },
  { id: 'c6', korean: '배고프다', romanization: 'baegoproda', english: 'to be hungry', category: 'food' },

  // Cores
  { id: 'col1',  korean: '빨간색', romanization: 'ppalgansaek',  english: 'red',              category: 'colors', example: { sentence: '빨간색 차가 있어요.', translation: 'There is a red car.' } },
  { id: 'col2',  korean: '파란색', romanization: 'paransaek',    english: 'blue',             category: 'colors', example: { sentence: '하늘은 파란색이에요.', translation: 'The sky is blue.' } },
  { id: 'col3',  korean: '노란색', romanization: 'noransaek',    english: 'yellow',           category: 'colors', example: { sentence: '바나나는 노란색이에요.', translation: 'The banana is yellow.' } },
  { id: 'col4',  korean: '초록색', romanization: 'choroksaek',   english: 'green',            category: 'colors', example: { sentence: '나무는 초록색이에요.', translation: 'The tree is green.' } },
  { id: 'col5',  korean: '흰색',   romanization: 'huinsaek',     english: 'white',            category: 'colors', example: { sentence: '눈은 흰색이에요.', translation: 'Snow is white.' } },
  { id: 'col6',  korean: '검은색', romanization: 'geomeunsaek',  english: 'black',            category: 'colors', example: { sentence: '고양이가 검은색이에요.', translation: 'The cat is black.' } },
  { id: 'col7',  korean: '주황색', romanization: 'juhwangsaek',  english: 'orange',           category: 'colors', example: { sentence: '주황색 꽃이 예뻐요.', translation: 'The orange flower is pretty.' } },
  { id: 'col8',  korean: '분홍색', romanization: 'bunhongsaek',  english: 'pink',             category: 'colors', example: { sentence: '분홍색을 좋아해요.', translation: 'I like pink.' } },
  { id: 'col9',  korean: '보라색', romanization: 'borasaek',     english: 'purple / violet',  category: 'colors', example: { sentence: '보라색 포도예요.', translation: 'They are purple grapes.' } },
  { id: 'col10', korean: '갈색',   romanization: 'galsaek',      english: 'brown',            category: 'colors', example: { sentence: '곰은 갈색이에요.', translation: 'The bear is brown.' } },
  { id: 'col11', korean: '회색',   romanization: 'hoesaek',      english: 'gray',             category: 'colors', example: { sentence: '하늘이 회색이에요.', translation: 'The sky is gray.' } },
  { id: 'col12', korean: '금색',   romanization: 'geumsaek',     english: 'gold',             category: 'colors' },
  { id: 'col13', korean: '은색',   romanization: 'eunsaek',      english: 'silver',           category: 'colors' },
  { id: 'col14', korean: '하늘색', romanization: 'haneulsaek',   english: 'sky blue',         category: 'colors', example: { sentence: '하늘색 티셔츠 입었어요.', translation: 'I wore a sky-blue T-shirt.' } },
  { id: 'col15', korean: '남색',   romanization: 'namsaek',      english: 'navy blue / indigo', category: 'colors' },
  { id: 'col16', korean: '색',     romanization: 'saek',         english: 'color (suffix)',   category: 'colors', example: { sentence: '무슨 색이에요?', translation: 'What color is it?' } },

  // Dias da semana
  { id: 'dia0',  korean: '일요일', romanization: 'ilyoil',    english: 'Sunday',    category: 'days of the week', example: { sentence: '일요일에 쉬어요.', translation: 'I rest on Sunday.' } },
  { id: 'dia1',  korean: '월요일', romanization: 'woryoil',   english: 'Monday',    category: 'days of the week', example: { sentence: '월요일은 바빠요.', translation: 'Monday is busy.' } },
  { id: 'dia2',  korean: '화요일', romanization: 'hwayoil',   english: 'Tuesday',   category: 'days of the week', example: { sentence: '화요일에 학교에 가요.', translation: 'On Tuesday I go to school.' } },
  { id: 'dia3',  korean: '수요일', romanization: 'suyoil',    english: 'Wednesday', category: 'days of the week', example: { sentence: '수요일에 만나요.', translation: 'See you on Wednesday.' } },
  { id: 'dia4',  korean: '목요일', romanization: 'mogyoil',   english: 'Thursday',  category: 'days of the week' },
  { id: 'dia5',  korean: '금요일', romanization: 'geumyoil',  english: 'Friday',    category: 'days of the week', example: { sentence: '금요일 저녁이 좋아요.', translation: 'I like Friday night.' } },
  { id: 'dia6',  korean: '토요일', romanization: 'toyoil',    english: 'Saturday',  category: 'days of the week', example: { sentence: '토요일에 영화 봐요.', translation: 'I watch movies on Saturday.' } },
  { id: 'dia7',  korean: '요일',   romanization: 'yoil',      english: 'day of the week (suffix)', category: 'days of the week', example: { sentence: '오늘 무슨 요일이에요?', translation: 'What day of the week is it today?' } },
  { id: 'dia8',  korean: '오늘',   romanization: 'oneul',     english: 'today',     category: 'days of the week', example: { sentence: '오늘은 화요일이에요.', translation: 'Today is Tuesday.' } },
  { id: 'dia9',  korean: '내일',   romanization: 'naeil',     english: 'tomorrow',  category: 'days of the week', example: { sentence: '내일 봐요!', translation: 'See you tomorrow!' } },
  { id: 'dia10', korean: '어제',   romanization: 'eoje',      english: 'yesterday', category: 'days of the week', example: { sentence: '어제 뭐 했어요?', translation: 'What did you do yesterday?' } },
  { id: 'dia11', korean: '주말',   romanization: 'jumal',     english: 'weekend',   category: 'days of the week', example: { sentence: '주말에 뭐 해요?', translation: 'What do you do on the weekend?' } },
  { id: 'dia12', korean: '주',     romanization: 'ju',        english: 'week',      category: 'days of the week', example: { sentence: '이번 주에 바빠요.', translation: 'I am busy this week.' } },

  // Corpo
  { id: 'corp1', korean: '머리',   romanization: 'meori',    english: 'head',   category: 'body' },
  { id: 'corp2', korean: '눈',     romanization: 'nun',      english: 'eye',    category: 'body' },
  { id: 'corp3', korean: '코',     romanization: 'ko',       english: 'nose',   category: 'body' },
  { id: 'corp4', korean: '입',     romanization: 'ip',       english: 'mouth',  category: 'body' },
  { id: 'corp5', korean: '귀',     romanization: 'gwi',      english: 'ear',    category: 'body' },
  { id: 'corp6', korean: '손',     romanization: 'son',      english: 'hand',   category: 'body' },
  { id: 'corp7', korean: '발',     romanization: 'bal',      english: 'foot',   category: 'body' },

  // Natureza
  { id: 'nat1',  korean: '하늘',   romanization: 'haneul',   english: 'sky',      category: 'nature' },
  { id: 'nat2',  korean: '바다',   romanization: 'bada',     english: 'sea',      category: 'nature' },
  { id: 'nat3',  korean: '산',     romanization: 'san',      english: 'mountain', category: 'nature' },
  { id: 'nat4',  korean: '꽃',     romanization: 'kkot',     english: 'flower',   category: 'nature' },
  { id: 'nat5',  korean: '나무',   romanization: 'namu',     english: 'tree',     category: 'nature' },
  { id: 'nat6',  korean: '달',     romanization: 'dal',      english: 'moon',     category: 'nature' },
  { id: 'nat7',  korean: '해',     romanization: 'hae',      english: 'sun',      category: 'nature' },

  // Verbos básicos
  { id: 'vb1',   korean: '가다',   romanization: 'gada',     english: 'to go',    category: 'basic verbs' },
  { id: 'vb2',   korean: '오다',   romanization: 'oda',      english: 'to come',  category: 'basic verbs' },
  { id: 'vb3',   korean: '자다',   romanization: 'jada',     english: 'to sleep', category: 'basic verbs' },
  { id: 'vb4',   korean: '보다',   romanization: 'boda',     english: 'to see',   category: 'basic verbs' },
  { id: 'vb5',   korean: '말하다', romanization: 'malhada',  english: 'to speak', category: 'basic verbs' },
  { id: 'vb6',   korean: '사랑하다', romanization: 'saranghada', english: 'to love', category: 'basic verbs' },
  { id: 'vb7',   korean: '읽다',   romanization: 'ikda',     english: 'to read',  category: 'basic verbs' },
  { id: 'vb8',   korean: '쓰다',   romanization: 'sseuda',   english: 'to write', category: 'basic verbs' },
  { id: 'vb9',   korean: '알다',   romanization: 'alda',     english: 'to know',  category: 'basic verbs' },

  // Cotidiano
  { id: 'cot1',  korean: '집',     romanization: 'jip',      english: 'house',      category: 'everyday' },
  { id: 'cot2',  korean: '학교',   romanization: 'hakgyo',   english: 'school',     category: 'everyday' },
  { id: 'cot3',  korean: '책',     romanization: 'chaek',    english: 'book',       category: 'everyday' },
  { id: 'cot4',  korean: '개',     romanization: 'gae',      english: 'dog',        category: 'everyday' },
  { id: 'cot5',  korean: '고양이', romanization: 'goyangi',  english: 'cat',        category: 'everyday' },
  { id: 'cot6',  korean: '사람',   romanization: 'saram',    english: 'person',     category: 'everyday' },
  { id: 'cot7',  korean: '아침',   romanization: 'achim',    english: 'morning',    category: 'everyday' },
  { id: 'cot8',  korean: '점심',   romanization: 'jeomsim',  english: 'lunch',      category: 'everyday' },
  { id: 'cot9',  korean: '저녁',   romanization: 'jeonyeok', english: 'evening',    category: 'everyday' },
  { id: 'cot10', korean: '시간',   romanization: 'sigan',    english: 'time',       category: 'everyday' },
  { id: 'cot11', korean: '차',     romanization: 'cha',      english: 'car',        category: 'everyday' },
  { id: 'cot12', korean: '문',     romanization: 'mun',      english: 'door',       category: 'everyday' },
  { id: 'cot13', korean: '병원',   romanization: 'byeongwon', english: 'hospital',  category: 'everyday' },
  { id: 'cot14', korean: '식당',   romanization: 'sikdang',  english: 'restaurant', category: 'everyday' },

  // Comida (adicionais)
  { id: 'c7',    korean: '커피',   romanization: 'keopi',    english: 'coffee',   category: 'food' },
  { id: 'c8',    korean: '빵',     romanization: 'ppang',    english: 'bread',    category: 'food' },
  { id: 'c9',    korean: '과일',   romanization: 'gwail',    english: 'fruit',    category: 'food' },

  // Verbos básicos (adicionais)
  { id: 'vb10',  korean: '먹다',   romanization: 'meokda',   english: 'to eat',   category: 'basic verbs' },
  { id: 'vb11',  korean: '마시다', romanization: 'masida',   english: 'to drink', category: 'basic verbs' },
  { id: 'vb12',  korean: '좋아하다', romanization: 'joahada', english: 'to like', category: 'basic verbs' },

  // Natureza (adicionais)
  { id: 'nat8',  korean: '새',     romanization: 'sae',      english: 'bird',     category: 'nature' },
]
