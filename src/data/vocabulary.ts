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
  'verbos básicos',
  'cotidiano',
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
  { id: 'col1',  korean: '빨간색', romanization: 'ppalgansaek',  portuguese: 'vermelho',        category: 'cores', example: { sentence: '빨간색 차가 있어요.', translation: 'Tem um carro vermelho.' } },
  { id: 'col2',  korean: '파란색', romanization: 'paransaek',    portuguese: 'azul',            category: 'cores', example: { sentence: '하늘은 파란색이에요.', translation: 'O céu é azul.' } },
  { id: 'col3',  korean: '노란색', romanization: 'noransaek',    portuguese: 'amarelo',         category: 'cores', example: { sentence: '바나나는 노란색이에요.', translation: 'A banana é amarela.' } },
  { id: 'col4',  korean: '초록색', romanization: 'choroksaek',   portuguese: 'verde',           category: 'cores', example: { sentence: '나무는 초록색이에요.', translation: 'A árvore é verde.' } },
  { id: 'col5',  korean: '흰색',   romanization: 'huinsaek',     portuguese: 'branco',          category: 'cores', example: { sentence: '눈은 흰색이에요.', translation: 'A neve é branca.' } },
  { id: 'col6',  korean: '검은색', romanization: 'geomeunsaek',  portuguese: 'preto',           category: 'cores', example: { sentence: '고양이가 검은색이에요.', translation: 'O gato é preto.' } },
  { id: 'col7',  korean: '주황색', romanization: 'juhwangsaek',  portuguese: 'laranja',         category: 'cores', example: { sentence: '주황색 꽃이 예뻐요.', translation: 'A flor laranja é bonita.' } },
  { id: 'col8',  korean: '분홍색', romanization: 'bunhongsaek',  portuguese: 'rosa',            category: 'cores', example: { sentence: '분홍색을 좋아해요.', translation: 'Eu gosto de rosa.' } },
  { id: 'col9',  korean: '보라색', romanization: 'borasaek',     portuguese: 'roxo / violeta',  category: 'cores', example: { sentence: '보라색 포도예요.', translation: 'São uvas roxas.' } },
  { id: 'col10', korean: '갈색',   romanization: 'galsaek',      portuguese: 'marrom',          category: 'cores', example: { sentence: '곰은 갈색이에요.', translation: 'O urso é marrom.' } },
  { id: 'col11', korean: '회색',   romanization: 'hoesaek',      portuguese: 'cinza',           category: 'cores', example: { sentence: '하늘이 회색이에요.', translation: 'O céu está cinza.' } },
  { id: 'col12', korean: '금색',   romanization: 'geumsaek',     portuguese: 'dourado',         category: 'cores' },
  { id: 'col13', korean: '은색',   romanization: 'eunsaek',      portuguese: 'prateado',        category: 'cores' },
  { id: 'col14', korean: '하늘색', romanization: 'haneulsaek',   portuguese: 'azul-céu / celeste', category: 'cores', example: { sentence: '하늘색 티셔츠 입었어요.', translation: 'Vesti uma camiseta azul-céu.' } },
  { id: 'col15', korean: '남색',   romanization: 'namsaek',      portuguese: 'azul-marinho / índigo', category: 'cores' },
  { id: 'col16', korean: '색',     romanization: 'saek',         portuguese: 'cor (sufixo)',    category: 'cores', example: { sentence: '무슨 색이에요?', translation: 'Qual cor é?' } },

  // Dias da semana
  { id: 'dia0',  korean: '일요일', romanization: 'ilyoil',    portuguese: 'domingo',     category: 'dias da semana', example: { sentence: '일요일에 쉬어요.', translation: 'Descanso no domingo.' } },
  { id: 'dia1',  korean: '월요일', romanization: 'woryoil',   portuguese: 'segunda-feira', category: 'dias da semana', example: { sentence: '월요일은 바빠요.', translation: 'Segunda-feira é agitada.' } },
  { id: 'dia2',  korean: '화요일', romanization: 'hwayoil',   portuguese: 'terça-feira',  category: 'dias da semana', example: { sentence: '화요일에 학교에 가요.', translation: 'Na terça vou à escola.' } },
  { id: 'dia3',  korean: '수요일', romanization: 'suyoil',    portuguese: 'quarta-feira', category: 'dias da semana', example: { sentence: '수요일에 만나요.', translation: 'Nos encontramos na quarta.' } },
  { id: 'dia4',  korean: '목요일', romanization: 'mogyoil',   portuguese: 'quinta-feira', category: 'dias da semana' },
  { id: 'dia5',  korean: '금요일', romanization: 'geumyoil',  portuguese: 'sexta-feira',  category: 'dias da semana', example: { sentence: '금요일 저녁이 좋아요.', translation: 'Gosto da noite de sexta.' } },
  { id: 'dia6',  korean: '토요일', romanization: 'toyoil',    portuguese: 'sábado',       category: 'dias da semana', example: { sentence: '토요일에 영화 봐요.', translation: 'Vejo filmes no sábado.' } },
  { id: 'dia7',  korean: '요일',   romanization: 'yoil',      portuguese: 'dia da semana (sufixo)', category: 'dias da semana', example: { sentence: '오늘 무슨 요일이에요?', translation: 'Que dia da semana é hoje?' } },
  { id: 'dia8',  korean: '오늘',   romanization: 'oneul',     portuguese: 'hoje',         category: 'dias da semana', example: { sentence: '오늘은 화요일이에요.', translation: 'Hoje é terça-feira.' } },
  { id: 'dia9',  korean: '내일',   romanization: 'naeil',     portuguese: 'amanhã',       category: 'dias da semana', example: { sentence: '내일 봐요!', translation: 'Até amanhã!' } },
  { id: 'dia10', korean: '어제',   romanization: 'eoje',      portuguese: 'ontem',        category: 'dias da semana', example: { sentence: '어제 뭐 했어요?', translation: 'O que você fez ontem?' } },
  { id: 'dia11', korean: '주말',   romanization: 'jumal',     portuguese: 'fim de semana', category: 'dias da semana', example: { sentence: '주말에 뭐 해요?', translation: 'O que você faz no fim de semana?' } },
  { id: 'dia12', korean: '주',     romanization: 'ju',        portuguese: 'semana',       category: 'dias da semana', example: { sentence: '이번 주에 바빠요.', translation: 'Estou ocupado esta semana.' } },

  // Corpo
  { id: 'corp1', korean: '머리',   romanization: 'meori',    portuguese: 'cabeça',    category: 'corpo' },
  { id: 'corp2', korean: '눈',     romanization: 'nun',      portuguese: 'olho',      category: 'corpo' },
  { id: 'corp3', korean: '코',     romanization: 'ko',       portuguese: 'nariz',     category: 'corpo' },
  { id: 'corp4', korean: '입',     romanization: 'ip',       portuguese: 'boca',      category: 'corpo' },
  { id: 'corp5', korean: '귀',     romanization: 'gwi',      portuguese: 'orelha',    category: 'corpo' },
  { id: 'corp6', korean: '손',     romanization: 'son',      portuguese: 'mão',       category: 'corpo' },
  { id: 'corp7', korean: '발',     romanization: 'bal',      portuguese: 'pé',        category: 'corpo' },

  // Natureza
  { id: 'nat1',  korean: '하늘',   romanization: 'haneul',   portuguese: 'céu',       category: 'natureza' },
  { id: 'nat2',  korean: '바다',   romanization: 'bada',     portuguese: 'mar',       category: 'natureza' },
  { id: 'nat3',  korean: '산',     romanization: 'san',      portuguese: 'montanha',  category: 'natureza' },
  { id: 'nat4',  korean: '꽃',     romanization: 'kkot',     portuguese: 'flor',      category: 'natureza' },
  { id: 'nat5',  korean: '나무',   romanization: 'namu',     portuguese: 'árvore',    category: 'natureza' },
  { id: 'nat6',  korean: '달',     romanization: 'dal',      portuguese: 'lua',       category: 'natureza' },
  { id: 'nat7',  korean: '해',     romanization: 'hae',      portuguese: 'sol',       category: 'natureza' },

  // Verbos básicos
  { id: 'vb1',   korean: '가다',   romanization: 'gada',     portuguese: 'ir',        category: 'verbos básicos' },
  { id: 'vb2',   korean: '오다',   romanization: 'oda',      portuguese: 'vir',       category: 'verbos básicos' },
  { id: 'vb3',   korean: '자다',   romanization: 'jada',     portuguese: 'dormir',    category: 'verbos básicos' },
  { id: 'vb4',   korean: '보다',   romanization: 'boda',     portuguese: 'ver',       category: 'verbos básicos' },
  { id: 'vb5',   korean: '말하다', romanization: 'malhada',  portuguese: 'falar',     category: 'verbos básicos' },
  { id: 'vb6',   korean: '사랑하다', romanization: 'saranghada', portuguese: 'amar',  category: 'verbos básicos' },
  { id: 'vb7',   korean: '읽다',   romanization: 'ikda',     portuguese: 'ler',       category: 'verbos básicos' },
  { id: 'vb8',   korean: '쓰다',   romanization: 'sseuda',   portuguese: 'escrever',  category: 'verbos básicos' },
  { id: 'vb9',   korean: '알다',   romanization: 'alda',     portuguese: 'saber',     category: 'verbos básicos' },

  // Cotidiano
  { id: 'cot1',  korean: '집',     romanization: 'jip',      portuguese: 'casa',      category: 'cotidiano' },
  { id: 'cot2',  korean: '학교',   romanization: 'hakgyo',   portuguese: 'escola',    category: 'cotidiano' },
  { id: 'cot3',  korean: '책',     romanization: 'chaek',    portuguese: 'livro',     category: 'cotidiano' },
  { id: 'cot4',  korean: '개',     romanization: 'gae',      portuguese: 'cachorro',  category: 'cotidiano' },
  { id: 'cot5',  korean: '고양이', romanization: 'goyangi',  portuguese: 'gato',      category: 'cotidiano' },
  { id: 'cot6',  korean: '사람',   romanization: 'saram',    portuguese: 'pessoa',    category: 'cotidiano' },
  { id: 'cot7',  korean: '아침',   romanization: 'achim',    portuguese: 'manhã',     category: 'cotidiano' },
  { id: 'cot8',  korean: '점심',   romanization: 'jeomsim',  portuguese: 'almoço',    category: 'cotidiano' },
  { id: 'cot9',  korean: '저녁',   romanization: 'jeonyeok', portuguese: 'noite',     category: 'cotidiano' },
  { id: 'cot10', korean: '시간',   romanization: 'sigan',    portuguese: 'tempo',     category: 'cotidiano' },
  { id: 'cot11', korean: '차',     romanization: 'cha',      portuguese: 'carro',     category: 'cotidiano' },
  { id: 'cot12', korean: '문',     romanization: 'mun',      portuguese: 'porta',     category: 'cotidiano' },
  { id: 'cot13', korean: '병원',   romanization: 'byeongwon', portuguese: 'hospital', category: 'cotidiano' },
  { id: 'cot14', korean: '식당',   romanization: 'sikdang',  portuguese: 'restaurante', category: 'cotidiano' },

  // Comida (adicionais)
  { id: 'c7',    korean: '커피',   romanization: 'keopi',    portuguese: 'café',      category: 'comida' },
  { id: 'c8',    korean: '빵',     romanization: 'ppang',    portuguese: 'pão',       category: 'comida' },
  { id: 'c9',    korean: '과일',   romanization: 'gwail',    portuguese: 'fruta',     category: 'comida' },

  // Verbos básicos (adicionais)
  { id: 'vb10',  korean: '먹다',   romanization: 'meokda',   portuguese: 'comer',     category: 'verbos básicos' },
  { id: 'vb11',  korean: '마시다', romanization: 'masida',   portuguese: 'beber',     category: 'verbos básicos' },
  { id: 'vb12',  korean: '좋아하다', romanization: 'joahada', portuguese: 'gostar',   category: 'verbos básicos' },

  // Natureza (adicionais)
  { id: 'nat8',  korean: '새',     romanization: 'sae',      portuguese: 'pássaro',   category: 'natureza' },
]
