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
      { korean: '안녕하세요', romanization: 'annyeonghaseyo', english: 'Olá (formal)' },
      { korean: '안녕', romanization: 'annyeong', english: 'Oi / Tchau (informal)' },
      { korean: '처음 뵙겠습니다', romanization: 'cheoeum boepgesseumnida', english: 'Prazer em conhecê-lo (formal)' },
      { korean: '반갑습니다', romanization: 'bangapseumnida', english: 'Prazer em conhecê-lo' },
      { korean: '감사합니다', romanization: 'gamsahamnida', english: 'Obrigado (formal)' },
      { korean: '네 / 아니요', romanization: 'ne / aniyo', english: 'Sim / Não' },
      { korean: '잘 부탁드립니다', romanization: 'jal butakdeurimnida', english: 'Por favor, cuide bem de mim' },
      { korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', english: 'Tchau (para alguém indo embora)' },
      { korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', english: 'Tchau (quando você está indo embora)' },
    ],
  },
  {
    id: 'self-intro',
    title: 'Auto-apresentação',
    subtitle: 'Self-introduction',
    emoji: '🙋',
    type: 'rows',
    rows: [
      { korean: '저는 헬리오예요', romanization: 'jeoneun helio-yeyo', english: 'Eu sou o Hélio' },
      { korean: '저는 브라질 사람이에요', romanization: 'jeoneun beurajil saram-ieyo', english: 'Eu sou do Brasil' },
      { korean: '그는 [이름]이에요', romanization: 'geuneun [nome]-ieyo', english: 'Ele é [nome]' },
      { korean: '그녀는 [이름]이에요', romanization: 'geunyeoneun [nome]-ieyo', english: 'Ela é [nome]' },
      { korean: '그는 [나라] 사람이에요', romanization: 'geuneun [país] saram-ieyo', english: 'Ele é de [país]' },
      { korean: '당신은 브라질 사람이에요?', romanization: 'dangsin-eun beurajil saram-ieyo?', english: 'Você é do Brasil?' },
      { korean: '네, 저는 브라질 사람이에요', romanization: 'ne, jeoneun beurajil saram-ieyo', english: 'Sim, eu sou do Brasil' },
      { korean: '아니요, 저는 네덜란드 사람이에요', romanization: 'aniyo, jeoneun nedeolandeu saram-ieyo', english: 'Não, eu sou da Holanda' },
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
        label: 'Ordem básica das palavras',
        pattern: 'Sujeito + Objeto + Verbo',
        korean: '저는 한국어를 공부해요',
        romanization: 'jeoneun hangugeo-reul gongbuhaeyo',
        english: 'Eu estudo coreano',
      },
      {
        label: 'Partículas de tópico / sujeito',
        pattern: '은/는 — marcador de tópico  ·  이/가 — marcador de sujeito',
        korean: '저는 학생이에요',
        romanization: 'jeoneun haksaeng-ieyo',
        english: 'Eu sou estudante (저는 = quanto a mim)',
      },
      {
        label: 'Partícula de objeto',
        pattern: '을/를 — marcador de objeto',
        korean: '물을 마셔요',
        romanization: 'mul-eul masyeoyo',
        english: 'Eu bebo água',
      },
      {
        label: 'Para dizer "Eu sou [substantivo]"',
        pattern: 'Substantivo terminado em consoante + 이에요  ·  terminado em vogal + 예요',
        korean: '학생이에요 / 의사예요',
        romanization: 'haksaeng-ieyo / uisa-yeyo',
        english: 'Sou estudante / sou médico',
      },
    ],
    tip: 'Dica: o verbo sempre vem por último. É comum omitir o sujeito quando o contexto está claro.',
  },
  {
    id: 'occupations',
    title: 'Profissões',
    subtitle: 'Occupations',
    emoji: '💼',
    type: 'rows',
    rows: [
      { korean: '직업이 뭐예요?', romanization: 'jigeob-i mwoyeyo?', english: 'Qual é a sua profissão?' },
      { korean: '저는 개발자예요', romanization: 'jeoneun gaebalja-yeyo', english: 'Eu sou desenvolvedor de software' },
      { korean: '그는 선생님이에요', romanization: 'geuneun seonsaengnim-ieyo', english: 'Ele é professor' },
      { korean: '그녀는 의사예요', romanization: 'geunyeoneun uisa-yeyo', english: 'Ela é médica' },
      { korean: '저는 예술가예요', romanization: 'jeoneun yesulgga-yeyo', english: 'Eu sou artista' },
      { korean: '학생', romanization: 'haksaeng', english: 'Estudante' },
      { korean: '회사원', romanization: 'hoesawon', english: 'Funcionário de escritório' },
      { korean: '디자이너', romanization: 'dijaineo', english: 'Designer' },
      { korean: '엔지니어', romanization: 'enjinieo', english: 'Engenheiro' },
      { korean: '요리사', romanization: 'yorisa', english: 'Chef / Cozinheiro' },
    ],
  },
]
