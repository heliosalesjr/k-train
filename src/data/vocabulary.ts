export interface VocabCard {
  id: string
  korean: string
  romanization: string
  portuguese: string
  category: string
  example?: { sentence: string; translation: string }
}

export const VOCAB_CATEGORIES = [
  'saudações',
  'números',
  'família',
  'comida',
  'cores',
  'dias da semana',
  'corpo',
  'natureza',
] as const

export const VOCABULARY: VocabCard[] = [
  // Saudações
  { id: 'v1', korean: '안녕하세요', romanization: 'annyeonghaseyo', portuguese: 'Olá / Boa tarde', category: 'saudações', example: { sentence: '안녕하세요! 처음 뵙겠습니다.', translation: 'Olá! Prazer em conhecê-lo.' } },
  { id: 'v2', korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', portuguese: 'Tchau (para quem vai)', category: 'saudações' },
  { id: 'v3', korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', portuguese: 'Tchau (para quem fica)', category: 'saudações' },
  { id: 'v4', korean: '감사합니다', romanization: 'gamsahamnida', portuguese: 'Obrigado(a)', category: 'saudações', example: { sentence: '도와주셔서 감사합니다.', translation: 'Obrigado por me ajudar.' } },
  { id: 'v5', korean: '죄송합니다', romanization: 'joesonghamnida', portuguese: 'Desculpe / Me perdoe', category: 'saudações' },
  { id: 'v6', korean: '네', romanization: 'ne', portuguese: 'Sim', category: 'saudações' },
  { id: 'v7', korean: '아니요', romanization: 'aniyo', portuguese: 'Não', category: 'saudações' },
  { id: 'v8', korean: '이름이 뭐예요?', romanization: 'ireumi mwoyeyo?', portuguese: 'Qual é o seu nome?', category: 'saudações' },

  // Números
  { id: 'n1', korean: '일', romanization: 'il', portuguese: '1 (sino-coreano)', category: 'números' },
  { id: 'n2', korean: '이', romanization: 'i', portuguese: '2 (sino-coreano)', category: 'números' },
  { id: 'n3', korean: '삼', romanization: 'sam', portuguese: '3 (sino-coreano)', category: 'números' },
  { id: 'n4', korean: '사', romanization: 'sa', portuguese: '4 (sino-coreano)', category: 'números' },
  { id: 'n5', korean: '오', romanization: 'o', portuguese: '5 (sino-coreano)', category: 'números' },
  { id: 'n6', korean: '하나', romanization: 'hana', portuguese: '1 (nativo)', category: 'números' },
  { id: 'n7', korean: '둘', romanization: 'dul', portuguese: '2 (nativo)', category: 'números' },
  { id: 'n8', korean: '셋', romanization: 'set', portuguese: '3 (nativo)', category: 'números' },
  { id: 'n9', korean: '넷', romanization: 'net', portuguese: '4 (nativo)', category: 'números' },
  { id: 'n10', korean: '다섯', romanization: 'daseot', portuguese: '5 (nativo)', category: 'números' },

  // Família
  { id: 'f1', korean: '어머니', romanization: 'eomeoni', portuguese: 'mãe', category: 'família' },
  { id: 'f2', korean: '아버지', romanization: 'abeoji', portuguese: 'pai', category: 'família' },
  { id: 'f3', korean: '오빠', romanization: 'oppa', portuguese: 'irmão mais velho (de mulher)', category: 'família' },
  { id: 'f4', korean: '형', romanization: 'hyeong', portuguese: 'irmão mais velho (de homem)', category: 'família' },
  { id: 'f5', korean: '언니', romanization: 'eonni', portuguese: 'irmã mais velha (de mulher)', category: 'família' },
  { id: 'f6', korean: '누나', romanization: 'nuna', portuguese: 'irmã mais velha (de homem)', category: 'família' },
  { id: 'f7', korean: '동생', romanization: 'dongsaeng', portuguese: 'irmão/irmã mais novo(a)', category: 'família' },
  { id: 'f8', korean: '친구', romanization: 'chingu', portuguese: 'amigo(a)', category: 'família' },

  // Comida
  { id: 'c1', korean: '밥', romanization: 'bap', portuguese: 'arroz cozido / refeição', category: 'comida' },
  { id: 'c2', korean: '물', romanization: 'mul', portuguese: 'água', category: 'comida' },
  { id: 'c3', korean: '김치', romanization: 'kimchi', portuguese: 'kimchi (repolho fermentado)', category: 'comida' },
  { id: 'c4', korean: '불고기', romanization: 'bulgogi', portuguese: 'bulgogi (carne marinada)', category: 'comida' },
  { id: 'c5', korean: '맛있다', romanization: 'masitda', portuguese: 'delicioso', category: 'comida' },
  { id: 'c6', korean: '배고프다', romanization: 'baegoproda', portuguese: 'estar com fome', category: 'comida' },

  // Cores
  { id: 'col1', korean: '빨간색', romanization: 'ppalgansaek', portuguese: 'vermelho', category: 'cores' },
  { id: 'col2', korean: '파란색', romanization: 'paransaek', portuguese: 'azul', category: 'cores' },
  { id: 'col3', korean: '노란색', romanization: 'noransaek', portuguese: 'amarelo', category: 'cores' },
  { id: 'col4', korean: '초록색', romanization: 'choroksaek', portuguese: 'verde', category: 'cores' },
  { id: 'col5', korean: '흰색', romanization: 'heunsaek', portuguese: 'branco', category: 'cores' },
  { id: 'col6', korean: '검은색', romanization: 'geomeunsaek', portuguese: 'preto', category: 'cores' },
]
