export type BlockType =
  | 'text'
  | 'tip'
  | 'warning'
  | 'table'
  | 'example-list'
  | 'vocab-highlight'
  | 'pattern'

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

export interface PatternBlock {
  type: 'pattern'
  label: string   // ex: "Regra"
  formula: string // ex: "[stem com ㅏ/ㅗ] + 아요"
  examples: { korean: string; romanization: string; portuguese: string }[]
}

export type ContentBlock =
  | TextBlock
  | TipBlock
  | WarningBlock
  | TableBlock
  | ExampleListBlock
  | VocabHighlightBlock
  | PatternBlock

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

  // ─── Lição 2: Partículas ───────────────────────────────────────────
  {
    id: 'particles',
    title: 'Partículas',
    titleKorean: '조사',
    description: 'Entenda as partículas — as pequenas sílabas que indicam a função de cada palavra na frase.',
    level: 'iniciante',
    sections: [
      {
        title: 'O que são partículas?',
        blocks: [
          {
            type: 'text',
            content: 'Em português, a função das palavras numa frase é indicada pela <strong>ordem</strong>: o sujeito vem antes do verbo, o objeto depois. Em coreano, essa função é indicada por pequenas sílabas chamadas <strong>partículas</strong> (조사), que se juntam ao final das palavras.',
          },
          {
            type: 'tip',
            title: 'Por que isso importa?',
            content: 'Por usar partículas, o coreano tem ordem de palavras mais <strong>flexível</strong> que o português. O que não muda é que o verbo quase sempre vai ao final.',
          },
          {
            type: 'text',
            content: 'A maioria das partículas tem <strong>duas formas</strong>: uma para palavras que terminam em consoante, outra para palavras que terminam em vogal. Isso afeta a pronúncia e o fluxo da frase.',
          },
        ],
      },
      {
        title: 'Tópico: 은 / 는',
        blocks: [
          {
            type: 'text',
            content: '<strong>은/는</strong> (eun/neun) marca o <strong>tópico</strong> da frase — o assunto sobre o qual estamos falando. Funciona como "quanto a..." ou "falando de...". É uma das partículas mais comuns no coreano.',
          },
          {
            type: 'pattern',
            label: 'Forma',
            formula: '[palavra terminada em consoante] + 은 · [palavra terminada em vogal] + 는',
            examples: [
              { korean: '저는 학생이에요.', romanization: 'jeoneun haksaeng-ieyo.', portuguese: 'Eu sou estudante.' },
              { korean: '한국은 아름다워요.', romanization: 'hangug-eun areumdawoyo.', portuguese: 'A Coreia é bonita.' },
              { korean: '오늘은 월요일이에요.', romanization: 'oneuleun woryoil-ieyo.', portuguese: 'Hoje é segunda-feira.' },
            ],
          },
          {
            type: 'tip',
            title: '저 vs 나',
            content: '<strong>저</strong> (jeo) = "eu" formal/polido · <strong>나</strong> (na) = "eu" informal. Com a partícula: 저<strong>는</strong> e 나<strong>는</strong> (ou 난 na fala rápida).',
          },
        ],
      },
      {
        title: 'Sujeito: 이 / 가',
        blocks: [
          {
            type: 'text',
            content: '<strong>이/가</strong> (i/ga) marca o <strong>sujeito gramatical</strong> — quem pratica a ação. Diferente de 은/는, não carrega ênfase ou contraste: simplesmente identifica quem faz o quê.',
          },
          {
            type: 'pattern',
            label: 'Forma',
            formula: '[palavra terminada em consoante] + 이 · [palavra terminada em vogal] + 가',
            examples: [
              { korean: '비가 와요.', romanization: 'bi-ga wayo.', portuguese: 'A chuva cai. / Está chovendo.' },
              { korean: '고양이가 자요.', romanization: 'goyang-i-ga jayo.', portuguese: 'O gato está dormindo.' },
              { korean: '친구가 왔어요.', romanization: 'chingu-ga wasseoyo.', portuguese: 'O amigo chegou.' },
            ],
          },
          {
            type: 'warning',
            title: '은/는 vs 이/가 — a distinção mais difícil',
            content: 'Use <strong>이/가</strong> para informação nova, identificação ou ênfase no sujeito. Use <strong>은/는</strong> para o tópico geral, contraste ou informação já conhecida. Ex: <em>"누가 왔어요?" (Quem chegou?) → "제가 왔어요." (Eu cheguei.)</em> — aqui 가 enfatiza "eu, especificamente".',
          },
        ],
      },
      {
        title: 'Objeto: 을 / 를',
        blocks: [
          {
            type: 'text',
            content: '<strong>을/를</strong> (eul/reul) marca o <strong>objeto direto</strong> — o que recebe a ação do verbo. Equivale ao "que" implícito no português: "eu <em>como</em> arroz" → "arroz" é o objeto.',
          },
          {
            type: 'pattern',
            label: 'Forma',
            formula: '[palavra terminada em consoante] + 을 · [palavra terminada em vogal] + 를',
            examples: [
              { korean: '밥을 먹어요.', romanization: 'bab-eul meogeoyo.', portuguese: 'Como arroz.' },
              { korean: '음악을 들어요.', romanization: 'eumag-eul deureoyo.', portuguese: 'Ouço música.' },
              { korean: '한국어를 공부해요.', romanization: 'hangugeo-reul gongbuhaeyo.', portuguese: 'Estudo coreano.' },
            ],
          },
        ],
      },
      {
        title: 'Lugar e tempo: 에',
        blocks: [
          {
            type: 'text',
            content: '<strong>에</strong> (e) é a partícula de <strong>lugar</strong> (onde algo está) e <strong>tempo</strong> (quando algo acontece). É sempre a mesma forma — não muda conforme a terminação da palavra.',
          },
          {
            type: 'table',
            headers: ['Uso', 'Coreano', 'Romanização', 'Português'],
            rows: [
              ['Lugar (estático)', '학교에 있어요.', 'hakgyo-e isseoyo.', 'Estou na escola.'],
              ['Destino', '학교에 가요.', 'hakgyo-e gayo.', 'Vou para a escola.'],
              ['Tempo', '월요일에 만나요.', 'woryoil-e mannayo.', 'Nos encontramos na segunda.'],
              ['Tempo', '세 시에 시작해요.', 'se si-e sijakaeyo.', 'Começa às três horas.'],
            ],
          },
          {
            type: 'tip',
            title: '에서 vs 에',
            content: '<strong>에서</strong> (eseo) indica onde a ação <em>acontece</em>: "학교에서 공부해요" = Estudo <em>na</em> escola (ação acontecendo lá). <strong>에</strong> indica onde algo <em>está</em> ou o <em>destino</em>: "학교에 있어요" = Estou <em>na</em> escola (localização).',
          },
        ],
      },
      {
        title: 'Resumo das partículas',
        blocks: [
          {
            type: 'table',
            headers: ['Partícula', 'Função', 'Após consoante', 'Após vogal'],
            rows: [
              ['Tópico', 'o assunto da frase', '은', '는'],
              ['Sujeito', 'quem faz a ação', '이', '가'],
              ['Objeto', 'o que recebe a ação', '을', '를'],
              ['Lugar/tempo', 'onde / quando', '에', '에'],
            ],
          },
        ],
      },
    ],
  },

  // ─── Lição 3: Estrutura de frases ─────────────────────────────────
  {
    id: 'sentence-structure',
    title: 'Estrutura de Frases',
    titleKorean: '문장 구조',
    description: 'O coreano é uma língua SOV — o verbo vai ao final. Entenda como montar frases do zero.',
    level: 'básico',
    sections: [
      {
        title: 'SOV: o verbo vai ao final',
        blocks: [
          {
            type: 'text',
            content: 'O português segue a ordem <strong>SVO</strong> (Sujeito → Verbo → Objeto). O coreano segue <strong>SOV</strong> (Sujeito → Objeto → Verbo). Essa é a diferença estrutural mais importante.',
          },
          {
            type: 'table',
            headers: ['Língua', 'Ordem', 'Exemplo'],
            rows: [
              ['Português', 'S → V → O', 'Eu como arroz.'],
              ['Coreano', 'S → O → V', '저는 밥을 먹어요. (Eu arroz como.)'],
            ],
          },
          {
            type: 'tip',
            title: 'Como pensar nisso',
            content: 'Imagine que em coreano você <strong>guarda o verbo para o final</strong>, como uma revelação. A frase inteira prepara o terreno e o verbo conclui o sentido. Ouvindo coreano, você aprende a esperar o verbo.',
          },
        ],
      },
      {
        title: 'O verbo é o centro da frase',
        blocks: [
          {
            type: 'text',
            content: 'Em coreano, o verbo carrega muita informação: tempo, nível de formalidade e às vezes o sujeito. Por isso ele sempre vem no final — é o ponto de chegada da frase.',
          },
          {
            type: 'example-list',
            items: [
              { korean: '저는 물을 마셔요.', romanization: 'jeoneun mul-eul masyeoyo.', portuguese: 'Eu bebo água.' },
              { korean: '친구가 음악을 들어요.', romanization: 'chinguga eumag-eul deureoyo.', portuguese: 'O amigo ouve música.' },
              { korean: '어머니가 밥을 만들어요.', romanization: 'eomeoniga bab-eul mandeureoyo.', portuguese: 'A mãe faz arroz.' },
            ],
          },
        ],
      },
      {
        title: 'O sujeito frequentemente é omitido',
        blocks: [
          {
            type: 'text',
            content: 'Quando o sujeito é óbvio pelo contexto, o coreano simplesmente o omite. Isso é muito comum na fala e nos textos informais.',
          },
          {
            type: 'table',
            headers: ['Com sujeito', 'Sem sujeito', 'Português'],
            rows: [
              ['저는 가요.', '가요.', 'Vou. / Eu vou.'],
              ['저는 먹어요.', '먹어요.', 'Como. / Estou comendo.'],
              ['저는 좋아요.', '좋아요.', 'Estou bem. / É bom.'],
            ],
          },
          {
            type: 'tip',
            title: 'Por que isso acontece?',
            content: 'O coreano é uma língua de <strong>sujeito nulo</strong>. Se já ficou claro de quem estamos falando, repetir o sujeito soa redundante — como se estivéssemos enfatizando desnecessariamente.',
          },
        ],
      },
      {
        title: 'Adjetivos também ficam antes do nome',
        blocks: [
          {
            type: 'text',
            content: 'Assim como em português, os adjetivos em coreano vêm <strong>antes</strong> do substantivo que modificam. Mas como verbos e adjetivos se comportam de forma parecida em coreano, um adjetivo no final da frase funciona como verbo.',
          },
          {
            type: 'table',
            headers: ['Uso', 'Coreano', 'Português'],
            rows: [
              ['Adjetivo + substantivo', '예쁜 꽃', 'flor bonita'],
              ['Adjetivo como verbo', '꽃이 예뻐요.', 'A flor é bonita.'],
              ['Adjetivo + substantivo', '큰 집', 'casa grande'],
              ['Adjetivo como verbo', '집이 커요.', 'A casa é grande.'],
            ],
          },
        ],
      },
      {
        title: 'Montando sua primeira frase completa',
        blocks: [
          {
            type: 'text',
            content: 'Com o que aprendemos até agora, já dá para montar frases reais. O modelo básico é:',
          },
          {
            type: 'pattern',
            label: 'Fórmula',
            formula: '[sujeito + 은/는] + [objeto + 을/를] + [verbo + 아요/어요]',
            examples: [
              { korean: '저는 한국어를 공부해요.', romanization: 'jeoneun hangugeo-reul gongbuhaeyo.', portuguese: 'Eu estudo coreano.' },
              { korean: '저는 커피를 마셔요.', romanization: 'jeoneun keopi-reul masyeoyo.', portuguese: 'Eu bebo café.' },
              { korean: '저는 음악을 좋아해요.', romanization: 'jeoneun eumag-eul joahaeyo.', portuguese: 'Eu gosto de música.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── Lição 4: Verbos no presente ──────────────────────────────────
  {
    id: 'present-tense',
    title: 'Verbos no Presente',
    titleKorean: '현재형',
    description: 'Aprenda a conjugar verbos no presente polido com as terminações -아요 e -어요.',
    level: 'básico',
    sections: [
      {
        title: 'A forma polida do presente',
        blocks: [
          {
            type: 'text',
            content: 'O coreano tem diferentes níveis de formalidade. A forma mais usada no dia a dia é a <strong>forma polida</strong> (존댓말), que termina em <strong>-아요</strong> ou <strong>-어요</strong>. É segura para usar com qualquer pessoa que você não conhece bem.',
          },
          {
            type: 'tip',
            title: 'Verbos no dicionário terminam em 다',
            content: 'No dicionário, os verbos aparecem na forma base terminada em <strong>다</strong>. Ex: 먹<strong>다</strong> (comer), 가<strong>다</strong> (ir). Para conjugar, removemos o 다 e ficamos com o <strong>stem</strong> (raiz): 먹, 가.',
          },
        ],
      },
      {
        title: 'Regra: qual terminação usar?',
        blocks: [
          {
            type: 'text',
            content: 'A escolha entre <strong>아요</strong> e <strong>어요</strong> depende da última vogal do stem do verbo — isso se chama <strong>harmonia vocálica</strong>.',
          },
          {
            type: 'pattern',
            label: 'Regra 1',
            formula: 'Stem com última vogal ㅏ ou ㅗ → + 아요',
            examples: [
              { korean: '가요', romanization: 'gayo', portuguese: 'vai / vou (가다 → 가 + 아요 → 가요)' },
              { korean: '와요', romanization: 'wayo', portuguese: 'vem (오다 → 오 + 아요 → 와요)' },
              { korean: '봐요', romanization: 'bwayo', portuguese: 'vê (보다 → 보 + 아요 → 봐요)' },
            ],
          },
          {
            type: 'pattern',
            label: 'Regra 2',
            formula: 'Stem com qualquer outra vogal → + 어요',
            examples: [
              { korean: '먹어요', romanization: 'meogeoyo', portuguese: 'come (먹다 → 먹 + 어요)' },
              { korean: '마셔요', romanization: 'masyeoyo', portuguese: 'bebe (마시다 → 마시 + 어요 → 마셔요)' },
              { korean: '읽어요', romanization: 'ilgeoyo', portuguese: 'lê (읽다 → 읽 + 어요)' },
            ],
          },
          {
            type: 'pattern',
            label: 'Regra 3 — 하다',
            formula: 'Verbos em 하다 (fazer/ser) → 해요 (sempre)',
            examples: [
              { korean: '공부해요', romanization: 'gongbuhaeyo', portuguese: 'estuda (공부하다 → 공부해요)' },
              { korean: '일해요', romanization: 'ilhaeyo', portuguese: 'trabalha (일하다 → 일해요)' },
              { korean: '좋아해요', romanization: 'joahaeyo', portuguese: 'gosta (좋아하다 → 좋아해요)' },
            ],
          },
        ],
      },
      {
        title: 'Verbos comuns conjugados',
        blocks: [
          {
            type: 'table',
            headers: ['Base (다)', 'Stem', 'Presente polido', 'Português'],
            rows: [
              ['가다', '가', '가요', 'ir'],
              ['오다', '오', '와요', 'vir'],
              ['먹다', '먹', '먹어요', 'comer'],
              ['마시다', '마시', '마셔요', 'beber'],
              ['보다', '보', '봐요', 'ver'],
              ['듣다', '듣', '들어요', 'ouvir (irregular)'],
              ['자다', '자', '자요', 'dormir'],
              ['사다', '사', '사요', 'comprar'],
              ['읽다', '읽', '읽어요', 'ler'],
              ['쓰다', '쓰', '써요', 'escrever/usar'],
              ['공부하다', '공부하', '공부해요', 'estudar'],
              ['일하다', '일하', '일해요', 'trabalhar'],
              ['좋아하다', '좋아하', '좋아해요', 'gostar de'],
            ],
          },
          {
            type: 'warning',
            title: 'Verbos irregulares em ㄷ',
            content: 'Alguns verbos com stem terminado em ㄷ mudam para ㄹ antes de vogal. Ex: 듣<strong>다</strong> (ouvir) → 들<strong>어요</strong> (não 듣어요). Outros como 받다 (receber) são regulares: 받<strong>아요</strong>. Infelizmente essa diferença precisa ser memorizada caso a caso.',
          },
        ],
      },
      {
        title: 'Ser e estar: 이다',
        blocks: [
          {
            type: 'text',
            content: 'O verbo "ser/estar" em coreano é <strong>이다</strong>. Ele se comporta diferente dos outros verbos — se junta diretamente ao substantivo.',
          },
          {
            type: 'pattern',
            label: 'Forma polida',
            formula: '[nome terminado em consoante] + 이에요 · [nome terminado em vogal] + 예요',
            examples: [
              { korean: '학생이에요.', romanization: 'haksaeng-ieyo.', portuguese: 'Sou estudante.' },
              { korean: '의사예요.', romanization: 'uisayo.', portuguese: 'Sou médico(a).' },
              { korean: '한국 사람이에요.', romanization: 'hanguk saram-ieyo.', portuguese: 'Sou coreano(a).' },
            ],
          },
          {
            type: 'tip',
            title: 'Negação: 아니에요',
            content: 'A negação de 이다 é <strong>아니에요</strong> (anieyo) = "não é / não sou". Ex: 학생이 아니에요 = Não sou estudante. Note: aqui usa-se a partícula 이/가 antes de 아니에요.',
          },
        ],
      },
    ],
  },
]
