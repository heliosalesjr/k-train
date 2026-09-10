export type CheatRow = {
  korean: string
  romanization: string
  english: string
}

export type CheatStructureItem = {
  label: string
  pattern: string
  korean: string
  romanization: string
  english: string
}

export type CheatSection =
  | {
      id: string
      title: string
      subtitle?: string
      emoji: string
      type: 'rows'
      rows: CheatRow[]
    }
  | {
      id: string
      title: string
      subtitle?: string
      emoji: string
      type: 'structure'
      items: CheatStructureItem[]
      tip?: string
    }

export const CHEAT_SECTIONS: CheatSection[] = [
  {
    id: 'greetings',
    title: 'Saudações',
    subtitle: 'Greetings',
    emoji: '👋',
    type: 'rows',
    rows: [
      { korean: '안녕하세요', romanization: 'annyeonghaseyo', english: 'Hello (formal)' },
      { korean: '안녕', romanization: 'annyeong', english: 'Hi / Bye (informal)' },
      { korean: '처음 뵙겠습니다', romanization: 'cheoeum boepgesseumnida', english: 'Nice to meet you (formal)' },
      { korean: '반갑습니다', romanization: 'bangapseumnida', english: 'Pleased to meet you' },
      { korean: '감사합니다', romanization: 'gamsahamnida', english: 'Thank you (formal)' },
      { korean: '네 / 아니요', romanization: 'ne / aniyo', english: 'Yes / No' },
      { korean: '잘 부탁드립니다', romanization: 'jal butakdeurimnida', english: 'Please take care of me' },
      { korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', english: 'Goodbye (to someone leaving)' },
      { korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', english: 'Goodbye (when you are leaving)' },
    ],
  },
  {
    id: 'self-intro',
    title: 'Auto-apresentação',
    subtitle: 'Self-introduction',
    emoji: '🙋',
    type: 'rows',
    rows: [
      { korean: '저는 헬리오예요', romanization: 'jeoneun helio-yeyo', english: 'I am Hélio' },
      { korean: '저는 브라질 사람이에요', romanization: 'jeoneun beurajil saram-ieyo', english: 'I am from Brazil' },
      { korean: '그는 [이름]이에요', romanization: 'geuneun [name]-ieyo', english: 'He is [name]' },
      { korean: '그녀는 [이름]이에요', romanization: 'geunyeoneun [name]-ieyo', english: 'She is [name]' },
      { korean: '그는 [나라] 사람이에요', romanization: 'geuneun [country] saram-ieyo', english: 'He is from [country]' },
      { korean: '당신은 브라질 사람이에요?', romanization: 'dangsin-eun beurajil saram-ieyo?', english: 'Are you from Brazil?' },
      { korean: '네, 저는 브라질 사람이에요', romanization: 'ne, jeoneun beurajil saram-ieyo', english: 'Yes, I am from Brazil' },
      { korean: '아니요, 저는 네덜란드 사람이에요', romanization: 'aniyo, jeoneun nedeolandeu saram-ieyo', english: 'No, I am from the Netherlands' },
    ],
  },
  {
    id: 'structure',
    title: 'Estrutura da frase',
    subtitle: 'Sentence structure',
    emoji: '🧩',
    type: 'structure',
    items: [
      {
        label: 'Basic word order',
        pattern: 'Subject + Object + Verb',
        korean: '저는 한국어를 공부해요',
        romanization: 'jeoneun hangugeo-reul gongbuhaeyo',
        english: 'I study Korean',
      },
      {
        label: 'Topic / subject particles',
        pattern: '은/는 — topic marker  ·  이/가 — subject marker',
        korean: '저는 학생이에요',
        romanization: 'jeoneun haksaeng-ieyo',
        english: 'I am a student (저는 = as for me)',
      },
      {
        label: 'Object particle',
        pattern: '을/를 — object marker',
        korean: '물을 마셔요',
        romanization: 'mul-eul masyeoyo',
        english: 'I drink water',
      },
      {
        label: 'To say "I am [noun]" — use 이에요 / 예요',
        pattern: 'Noun ending in consonant + 이에요  ·  Noun ending in vowel + 예요',
        korean: '학생이에요 / 의사예요',
        romanization: 'haksaeng-ieyo / uisa-yeyo',
        english: 'I am a student / I am a doctor',
      },
    ],
    tip: 'Tip: The verb always comes last. You can often drop the subject when context is clear.',
  },
  {
    id: 'occupations',
    title: 'Profissões',
    subtitle: 'Occupations',
    emoji: '💼',
    type: 'rows',
    rows: [
      { korean: '직업이 뭐예요?', romanization: 'jigeob-i mwoyeyo?', english: 'What is your occupation?' },
      { korean: '저는 개발자예요', romanization: 'jeoneun gaebalja-yeyo', english: 'I am a software developer' },
      { korean: '그는 선생님이에요', romanization: 'geuneun seonsaengnim-ieyo', english: 'He is a teacher' },
      { korean: '그녀는 의사예요', romanization: 'geunyeoneun uisa-yeyo', english: 'She is a doctor' },
      { korean: '저는 예술가예요', romanization: 'jeoneun yesulgga-yeyo', english: 'I am an artist' },
      { korean: '학생', romanization: 'haksaeng', english: 'Student' },
      { korean: '회사원', romanization: 'hoesawon', english: 'Office worker' },
      { korean: '디자이너', romanization: 'dijaineo', english: 'Designer' },
      { korean: '엔지니어', romanization: 'enjinieo', english: 'Engineer' },
      { korean: '요리사', romanization: 'yorisa', english: 'Chef / Cook' },
    ],
  },
]
