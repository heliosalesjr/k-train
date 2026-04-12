export type BlockType =
  | 'text'
  | 'tip'
  | 'warning'
  | 'table'
  | 'example-list'
  | 'vocab-highlight'

export interface TextBlock {
  type: 'text'
  content: string
}

export interface TipBlock {
  type: 'tip'
  title?: string
  content: string
}

export interface WarningBlock {
  type: 'warning'
  title?: string
  content: string
}

export interface TableBlock {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export interface ExampleListBlock {
  type: 'example-list'
  items: { korean: string; romanization: string; portuguese: string }[]
}

export interface VocabHighlightBlock {
  type: 'vocab-highlight'
  items: { char: string; label: string; detail: string; color?: string }[]
}

export type ContentBlock =
  | TextBlock
  | TipBlock
  | WarningBlock
  | TableBlock
  | ExampleListBlock
  | VocabHighlightBlock

export interface LessonSection {
  title: string
  blocks: ContentBlock[]
}

export interface Lesson {
  id: string
  title: string
  titleKorean: string
  description: string
  level: 'iniciante' | 'básico' | 'intermediário'
  sections: LessonSection[]
}

export const LESSONS: Lesson[] = [
  {
    id: 'days-of-week',
    title: 'Dias da Semana',
    titleKorean: '요일',
    description: 'Aprenda os 7 dias da semana e descubra sua origem nos elementos clássicos do Leste Asiático.',
    level: 'iniciante',
    sections: [
      {
        title: 'O sufixo 요일',
        blocks: [
          {
            type: 'text',
            content: 'Em coreano, todos os dias da semana terminam com o sufixo <strong>요일</strong> (yoil), que significa "dia da semana". Você só precisa memorizar o que vem antes.',
          },
          {
            type: 'example-list',
            items: [
              { korean: '월요일', romanization: 'wol-yo-il', portuguese: 'segunda-feira' },
              { korean: '화요일', romanization: 'hwa-yo-il', portuguese: 'terça-feira' },
              { korean: '수요일', romanization: 'su-yo-il', portuguese: 'quarta-feira' },
            ],
          },
          {
            type: 'tip',
            title: 'Dica de pronúncia',
            content: 'A sílaba <strong>요</strong> (yo) é a mesma em todos os dias. Uma vez que você aprende o ritmo de "...요일", fica fácil.',
          },
        ],
      },
      {
        title: 'A origem nos elementos clássicos',
        blocks: [
          {
            type: 'text',
            content: 'Cada dia da semana corresponde a um dos <strong>7 elementos da cosmologia do Leste Asiático</strong> — os mesmos usados no Japão e China. Isso é uma chave poderosa para memorizar!',
          },
          {
            type: 'vocab-highlight',
            items: [
              { char: '일', label: '日 — Sol',     detail: '일요일 → domingo',      color: 'text-amber-400' },
              { char: '월', label: '月 — Lua',     detail: '월요일 → segunda',      color: 'text-sky-300' },
              { char: '화', label: '火 — Fogo',    detail: '화요일 → terça',        color: 'text-red-400' },
              { char: '수', label: '水 — Água',    detail: '수요일 → quarta',       color: 'text-blue-400' },
              { char: '목', label: '木 — Madeira', detail: '목요일 → quinta',       color: 'text-green-400' },
              { char: '금', label: '金 — Ouro',    detail: '금요일 → sexta',        color: 'text-yellow-300' },
              { char: '토', label: '土 — Terra',   detail: '토요일 → sábado',       color: 'text-orange-400' },
            ],
          },
          {
            type: 'tip',
            title: 'Mnemônico',
            content: 'Leia só os prefixos em ordem: <strong>일 월 화 수 목 금 토</strong> — Sol, Lua, Fogo, Água, Madeira, Ouro, Terra. É a ordem dos dias começando pelo domingo.',
          },
        ],
      },
      {
        title: 'Frases úteis com dias',
        blocks: [
          {
            type: 'text',
            content: 'Veja como usar os dias da semana em frases do dia a dia:',
          },
          {
            type: 'table',
            headers: ['Coreano', 'Romanização', 'Português'],
            rows: [
              ['오늘 무슨 요일이에요?', 'oneul musun yoil-ieyo?', 'Que dia da semana é hoje?'],
              ['오늘은 월요일이에요.', 'oneuleun woryoil-ieyo.', 'Hoje é segunda-feira.'],
              ['내일은 화요일이에요.', 'naeileun hwayoil-ieyo.', 'Amanhã é terça-feira.'],
              ['금요일에 만나요!', 'geumyoil-e mannayo!', 'Nos encontramos na sexta!'],
              ['주말에 뭐 해요?', 'jumal-e mwo haeyo?', 'O que você faz no fim de semana?'],
            ],
          },
          {
            type: 'tip',
            title: 'A partícula 에 (e)',
            content: '<strong>에</strong> depois de um dia da semana indica "em" ou "no/na". Ex: 금요일<strong>에</strong> = "na sexta". Você vai ver essa partícula o tempo todo em coreano.',
          },
        ],
      },
      {
        title: 'Hoje, amanhã e ontem',
        blocks: [
          {
            type: 'text',
            content: 'Três palavras essenciais que andam junto com os dias da semana:',
          },
          {
            type: 'example-list',
            items: [
              { korean: '오늘', romanization: 'oneul', portuguese: 'hoje' },
              { korean: '내일', romanization: 'naeil', portuguese: 'amanhã' },
              { korean: '어제', romanization: 'eoje', portuguese: 'ontem' },
            ],
          },
          {
            type: 'warning',
            title: 'Atenção',
            content: 'Diferente dos dias da semana, <strong>오늘 / 내일 / 어제</strong> não usam o sufixo 요일. São palavras independentes.',
          },
        ],
      },
    ],
  },
]
