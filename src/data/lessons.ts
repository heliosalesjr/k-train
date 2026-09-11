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
  items: { korean: string; romanization: string; english: string }[]
}

export interface VocabHighlightBlock {
  type: 'vocab-highlight'
  items: { char: string; label: string; detail: string; color?: string }[]
}

export interface PatternBlock {
  type: 'pattern'
  label: string   // e.g. "Rule"
  formula: string // e.g. "[stem with ㅏ/ㅗ] + 아요"
  examples: { korean: string; romanization: string; english: string }[]
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
  level: 'beginner' | 'basic' | 'intermediate'
  sections: LessonSection[]
}

export const LESSONS: Lesson[] = [
  {
    id: 'days-of-week',
    title: 'Days of the Week',
    titleKorean: '요일',
    description: 'Learn the 7 days of the week and discover their origin in the classical elements of East Asia.',
    level: 'beginner',
    sections: [
      {
        title: 'The 요일 suffix',
        blocks: [
          {
            type: 'text',
            content: 'In Korean, every day of the week ends with the suffix <strong>요일</strong> (yoil), meaning "day of the week". You only need to memorize what comes before it.',
          },
          {
            type: 'example-list',
            items: [
              { korean: '월요일', romanization: 'wol-yo-il', english: 'Monday' },
              { korean: '화요일', romanization: 'hwa-yo-il', english: 'Tuesday' },
              { korean: '수요일', romanization: 'su-yo-il', english: 'Wednesday' },
            ],
          },
          {
            type: 'tip',
            title: 'Pronunciation tip',
            content: 'The syllable <strong>요</strong> (yo) is the same in every day. Once you learn the rhythm of "...요일", it gets easy.',
          },
        ],
      },
      {
        title: 'The origin in the classical elements',
        blocks: [
          {
            type: 'text',
            content: 'Each day of the week corresponds to one of the <strong>7 elements of East Asian cosmology</strong> — the same ones used in Japan and China. This is a powerful key to memorizing them!',
          },
          {
            type: 'vocab-highlight',
            items: [
              { char: '일', label: '日 — Sun',   detail: '일요일 → Sunday',    color: 'text-amber-400' },
              { char: '월', label: '月 — Moon',  detail: '월요일 → Monday',    color: 'text-sky-300' },
              { char: '화', label: '火 — Fire',  detail: '화요일 → Tuesday',   color: 'text-red-400' },
              { char: '수', label: '水 — Water', detail: '수요일 → Wednesday', color: 'text-blue-400' },
              { char: '목', label: '木 — Wood',  detail: '목요일 → Thursday',  color: 'text-green-400' },
              { char: '금', label: '金 — Gold',  detail: '금요일 → Friday',    color: 'text-yellow-300' },
              { char: '토', label: '土 — Earth', detail: '토요일 → Saturday',  color: 'text-orange-400' },
            ],
          },
          {
            type: 'tip',
            title: 'Mnemonic',
            content: 'Read just the prefixes in order: <strong>일 월 화 수 목 금 토</strong> — Sun, Moon, Fire, Water, Wood, Gold, Earth. It is the order of the days starting from Sunday.',
          },
        ],
      },
      {
        title: 'Useful phrases with days',
        blocks: [
          {
            type: 'text',
            content: 'Here is how to use the days of the week in everyday sentences:',
          },
          {
            type: 'table',
            headers: ['Korean', 'Romanization', 'English'],
            rows: [
              ['오늘 무슨 요일이에요?', 'oneul musun yoil-ieyo?', 'What day of the week is it today?'],
              ['오늘은 월요일이에요.', 'oneuleun woryoil-ieyo.', 'Today is Monday.'],
              ['내일은 화요일이에요.', 'naeileun hwayoil-ieyo.', 'Tomorrow is Tuesday.'],
              ['금요일에 만나요!', 'geumyoil-e mannayo!', 'See you on Friday!'],
              ['주말에 뭐 해요?', 'jumal-e mwo haeyo?', 'What do you do on the weekend?'],
            ],
          },
          {
            type: 'tip',
            title: 'The particle 에 (e)',
            content: '<strong>에</strong> after a day of the week means "on". Ex: 금요일<strong>에</strong> = "on Friday". You will see this particle everywhere in Korean.',
          },
        ],
      },
      {
        title: 'Today, tomorrow, and yesterday',
        blocks: [
          {
            type: 'text',
            content: 'Three essential words that go hand in hand with the days of the week:',
          },
          {
            type: 'example-list',
            items: [
              { korean: '오늘', romanization: 'oneul', english: 'today' },
              { korean: '내일', romanization: 'naeil', english: 'tomorrow' },
              { korean: '어제', romanization: 'eoje', english: 'yesterday' },
            ],
          },
          {
            type: 'warning',
            title: 'Heads up',
            content: 'Unlike the days of the week, <strong>오늘 / 내일 / 어제</strong> do not use the 요일 suffix. They are standalone words.',
          },
        ],
      },
    ],
  },

  // ─── Lesson 2: Particles ───────────────────────────────────────────
  {
    id: 'particles',
    title: 'Particles',
    titleKorean: '조사',
    description: 'Understand particles — the small syllables that mark the role of each word in a sentence.',
    level: 'beginner',
    sections: [
      {
        title: 'What are particles?',
        blocks: [
          {
            type: 'text',
            content: 'In English, the function of words in a sentence is signaled mostly by <strong>word order</strong>: the subject comes before the verb, the object after. In Korean, that function is marked by small syllables called <strong>particles</strong> (조사), attached to the end of words.',
          },
          {
            type: 'tip',
            title: 'Why does this matter?',
            content: 'Because it uses particles, Korean has a much more <strong>flexible</strong> word order than English. What does not change is that the verb almost always goes last.',
          },
          {
            type: 'text',
            content: 'Most particles have <strong>two forms</strong>: one for words that end in a consonant, another for words that end in a vowel. This affects pronunciation and the flow of the sentence.',
          },
        ],
      },
      {
        title: 'Topic: 은 / 는',
        blocks: [
          {
            type: 'text',
            content: '<strong>은/는</strong> (eun/neun) marks the <strong>topic</strong> of the sentence — what we are talking about. It works like "as for..." or "speaking of...". It is one of the most common particles in Korean.',
          },
          {
            type: 'pattern',
            label: 'Form',
            formula: '[word ending in consonant] + 은 · [word ending in vowel] + 는',
            examples: [
              { korean: '저는 학생이에요.', romanization: 'jeoneun haksaeng-ieyo.', english: 'I am a student.' },
              { korean: '한국은 아름다워요.', romanization: 'hangug-eun areumdawoyo.', english: 'Korea is beautiful.' },
              { korean: '오늘은 월요일이에요.', romanization: 'oneuleun woryoil-ieyo.', english: 'Today is Monday.' },
            ],
          },
          {
            type: 'tip',
            title: '저 vs 나',
            content: '<strong>저</strong> (jeo) = "I" (formal/polite) · <strong>나</strong> (na) = "I" (casual). With the particle: 저<strong>는</strong> and 나<strong>는</strong> (or 난 in fast speech).',
          },
        ],
      },
      {
        title: 'Subject: 이 / 가',
        blocks: [
          {
            type: 'text',
            content: '<strong>이/가</strong> (i/ga) marks the <strong>grammatical subject</strong> — who performs the action. Unlike 은/는, it does not carry emphasis or contrast: it simply identifies who does what.',
          },
          {
            type: 'pattern',
            label: 'Form',
            formula: '[word ending in consonant] + 이 · [word ending in vowel] + 가',
            examples: [
              { korean: '비가 와요.', romanization: 'bi-ga wayo.', english: 'The rain falls. / It is raining.' },
              { korean: '고양이가 자요.', romanization: 'goyang-i-ga jayo.', english: 'The cat is sleeping.' },
              { korean: '친구가 왔어요.', romanization: 'chingu-ga wasseoyo.', english: 'A friend arrived.' },
            ],
          },
          {
            type: 'warning',
            title: '은/는 vs 이/가 — the hardest distinction',
            content: 'Use <strong>이/가</strong> for new information, identification, or emphasis on the subject. Use <strong>은/는</strong> for the general topic, contrast, or already-known information. Ex: <em>"누가 왔어요?" (Who arrived?) → "제가 왔어요." (I arrived.)</em> — here 가 emphasizes "me, specifically".',
          },
        ],
      },
      {
        title: 'Object: 을 / 를',
        blocks: [
          {
            type: 'text',
            content: '<strong>을/를</strong> (eul/reul) marks the <strong>direct object</strong> — what receives the action of the verb. In English: "I <em>eat</em> rice" → "rice" is the object.',
          },
          {
            type: 'pattern',
            label: 'Form',
            formula: '[word ending in consonant] + 을 · [word ending in vowel] + 를',
            examples: [
              { korean: '밥을 먹어요.', romanization: 'bab-eul meogeoyo.', english: 'I eat rice.' },
              { korean: '음악을 들어요.', romanization: 'eumag-eul deureoyo.', english: 'I listen to music.' },
              { korean: '한국어를 공부해요.', romanization: 'hangugeo-reul gongbuhaeyo.', english: 'I study Korean.' },
            ],
          },
        ],
      },
      {
        title: 'Place and time: 에',
        blocks: [
          {
            type: 'text',
            content: '<strong>에</strong> (e) is the particle for <strong>place</strong> (where something is) and <strong>time</strong> (when something happens). It is always the same form — it does not change with the word ending.',
          },
          {
            type: 'table',
            headers: ['Use', 'Korean', 'Romanization', 'English'],
            rows: [
              ['Location (static)', '학교에 있어요.', 'hakgyo-e isseoyo.', 'I am at school.'],
              ['Destination', '학교에 가요.', 'hakgyo-e gayo.', 'I go to school.'],
              ['Time', '월요일에 만나요.', 'woryoil-e mannayo.', 'See you on Monday.'],
              ['Time', '세 시에 시작해요.', 'se si-e sijakaeyo.', 'It starts at 3 o\'clock.'],
            ],
          },
          {
            type: 'tip',
            title: '에서 vs 에',
            content: '<strong>에서</strong> (eseo) indicates where the action <em>happens</em>: "학교에서 공부해요" = I study <em>at</em> school (the action takes place there). <strong>에</strong> indicates where something <em>is</em> or the <em>destination</em>: "학교에 있어요" = I am <em>at</em> school (location).',
          },
        ],
      },
      {
        title: 'Particle summary',
        blocks: [
          {
            type: 'table',
            headers: ['Particle', 'Function', 'After consonant', 'After vowel'],
            rows: [
              ['Topic', 'the sentence topic', '은', '는'],
              ['Subject', 'who does the action', '이', '가'],
              ['Object', 'what receives the action', '을', '를'],
              ['Place/time', 'where / when', '에', '에'],
            ],
          },
        ],
      },
    ],
  },

  // ─── Lesson 3: Sentence structure ─────────────────────────────────
  {
    id: 'sentence-structure',
    title: 'Sentence Structure',
    titleKorean: '문장 구조',
    description: 'Korean is an SOV language — the verb goes last. Learn how to build sentences from scratch.',
    level: 'basic',
    sections: [
      {
        title: 'SOV: the verb goes last',
        blocks: [
          {
            type: 'text',
            content: 'English follows the <strong>SVO</strong> order (Subject → Verb → Object). Korean follows <strong>SOV</strong> (Subject → Object → Verb). This is the most important structural difference.',
          },
          {
            type: 'table',
            headers: ['Language', 'Order', 'Example'],
            rows: [
              ['English', 'S → V → O', 'I eat rice.'],
              ['Korean', 'S → O → V', '저는 밥을 먹어요. (I rice eat.)'],
            ],
          },
          {
            type: 'tip',
            title: 'How to think about it',
            content: 'Imagine that in Korean you <strong>save the verb for the end</strong>, like a reveal. The whole sentence sets the stage and the verb ties the meaning together. Listening to Korean, you learn to wait for the verb.',
          },
        ],
      },
      {
        title: 'The verb is the heart of the sentence',
        blocks: [
          {
            type: 'text',
            content: 'In Korean, the verb carries a lot of information: tense, formality level, and sometimes the subject. That is why it always comes at the end — it is the sentence\'s point of arrival.',
          },
          {
            type: 'example-list',
            items: [
              { korean: '저는 물을 마셔요.', romanization: 'jeoneun mul-eul masyeoyo.', english: 'I drink water.' },
              { korean: '친구가 음악을 들어요.', romanization: 'chinguga eumag-eul deureoyo.', english: 'My friend listens to music.' },
              { korean: '어머니가 밥을 만들어요.', romanization: 'eomeoniga bab-eul mandeureoyo.', english: 'Mother makes rice.' },
            ],
          },
        ],
      },
      {
        title: 'The subject is often dropped',
        blocks: [
          {
            type: 'text',
            content: 'When the subject is obvious from context, Korean simply drops it. This is very common in speech and informal writing.',
          },
          {
            type: 'table',
            headers: ['With subject', 'Without subject', 'English'],
            rows: [
              ['저는 가요.', '가요.', 'I go. / Going.'],
              ['저는 먹어요.', '먹어요.', 'I eat. / I am eating.'],
              ['저는 좋아요.', '좋아요.', 'I am fine. / It is good.'],
            ],
          },
          {
            type: 'tip',
            title: 'Why does this happen?',
            content: 'Korean is a <strong>null-subject language</strong>. If it is already clear who we are talking about, repeating the subject sounds redundant — as if you were emphasizing for no reason.',
          },
        ],
      },
      {
        title: 'Adjectives also come before the noun',
        blocks: [
          {
            type: 'text',
            content: 'Just like in English, adjectives in Korean come <strong>before</strong> the noun they modify. But because verbs and adjectives behave similarly in Korean, an adjective at the end of a sentence acts like a verb.',
          },
          {
            type: 'table',
            headers: ['Use', 'Korean', 'English'],
            rows: [
              ['Adjective + noun', '예쁜 꽃', 'a pretty flower'],
              ['Adjective as verb', '꽃이 예뻐요.', 'The flower is pretty.'],
              ['Adjective + noun', '큰 집', 'a big house'],
              ['Adjective as verb', '집이 커요.', 'The house is big.'],
            ],
          },
        ],
      },
      {
        title: 'Building your first full sentence',
        blocks: [
          {
            type: 'text',
            content: 'With what we have learned so far, you can already put together real sentences. The basic pattern is:',
          },
          {
            type: 'pattern',
            label: 'Formula',
            formula: '[subject + 은/는] + [object + 을/를] + [verb + 아요/어요]',
            examples: [
              { korean: '저는 한국어를 공부해요.', romanization: 'jeoneun hangugeo-reul gongbuhaeyo.', english: 'I study Korean.' },
              { korean: '저는 커피를 마셔요.', romanization: 'jeoneun keopi-reul masyeoyo.', english: 'I drink coffee.' },
              { korean: '저는 음악을 좋아해요.', romanization: 'jeoneun eumag-eul joahaeyo.', english: 'I like music.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── Lesson: Numbers ──────────────────────────────────────────────
  {
    id: 'numbers',
    title: 'Numbers',
    titleKorean: '숫자',
    description: 'Korean has two counting systems — Sino-Korean and native. Learn when and how to use each one.',
    level: 'beginner',
    sections: [
      {
        title: 'Two number systems',
        blocks: [
          {
            type: 'text',
            content: 'Unlike English, Korean has <strong>two distinct number systems</strong>: the <strong>Sino-Korean</strong> (sino = of Chinese origin) and the <strong>native Korean</strong>. Each system is used in different contexts, and you need to know both.',
          },
          {
            type: 'table',
            headers: ['System', 'Origin', 'Used for'],
            rows: [
              ['Sino-Korean (한자어)', 'Chinese', 'Dates, money, phone numbers, minutes, floors, months'],
              ['Native (순우리말)', 'Pure Korean', 'Counting objects, hours, age, weeks'],
            ],
          },
          {
            type: 'tip',
            title: 'Where to start?',
            content: 'Learn Sino-Korean first — it covers more everyday situations (prices, dates, phone numbers) and follows a simpler, more regular pattern.',
          },
        ],
      },
      {
        title: 'Sino-Korean numbers (1–10)',
        blocks: [
          {
            type: 'text',
            content: 'Sino-Korean numbers are regular and combinable — the same logic as Chinese and Japanese. Memorize 1 to 10 and you can reach the thousands.',
          },
          {
            type: 'vocab-highlight',
            items: [
              { char: '일', label: '1 — il',  detail: '이 il',   color: 'text-violet-300' },
              { char: '이', label: '2 — i',   detail: '이 i',    color: 'text-violet-300' },
              { char: '삼', label: '3 — sam', detail: '삼 sam',  color: 'text-violet-300' },
              { char: '사', label: '4 — sa',  detail: '사 sa',   color: 'text-violet-300' },
              { char: '오', label: '5 — o',   detail: '오 o',    color: 'text-violet-300' },
              { char: '육', label: '6 — yuk', detail: '육 yuk',  color: 'text-violet-300' },
              { char: '칠', label: '7 — chil',detail: '칠 chil', color: 'text-violet-300' },
              { char: '팔', label: '8 — pal', detail: '팔 pal',  color: 'text-violet-300' },
              { char: '구', label: '9 — gu',  detail: '구 gu',   color: 'text-violet-300' },
              { char: '십', label: '10 — sip',detail: '십 sip',  color: 'text-sky-300' },
            ],
          },
        ],
      },
      {
        title: 'Sino-Korean: tens, hundreds, and thousands',
        blocks: [
          {
            type: 'text',
            content: 'The logic is multiplicative — you combine the basic numbers with the unit words. <strong>십(10), 백(100), 천(1,000), 만(10,000)</strong>.',
          },
          {
            type: 'table',
            headers: ['Number', 'Korean', 'Logic'],
            rows: [
              ['10',    '십',    '십'],
              ['11',    '십일',  '십 + 일 (10 + 1)'],
              ['20',    '이십',  '이 + 십 (2 × 10)'],
              ['35',    '삼십오', '삼십 + 오 (30 + 5)'],
              ['100',   '백',    '백'],
              ['200',   '이백',  '이 + 백 (2 × 100)'],
              ['1,000', '천',    '천'],
              ['5,000', '오천',  '오 + 천 (5 × 1,000)'],
              ['10,000','만',    '만 (a unit of its own in Korean)'],
              ['50,000','오만',  '오 + 만 (5 × 10,000)'],
            ],
          },
          {
            type: 'warning',
            title: 'Heads up: 만 (10,000)',
            content: 'Korean (like Chinese and Japanese) counts in groups of <strong>10,000</strong>, not 1,000. So "100,000" is <strong>십만</strong> (10 × 10,000), and "1,000,000" is <strong>백만</strong> (100 × 10,000). This trips up English speakers — watch out with big prices!',
          },
          {
            type: 'tip',
            title: '일 before 백 and 천',
            content: 'In Korean, "100" is just <strong>백</strong>, not 일백. "1,000" is just <strong>천</strong>, not 일천. 일 only appears explicitly in compound values like 일만 (10,000), where omitting it would be ambiguous.',
          },
        ],
      },
      {
        title: 'Native Korean numbers (1–10)',
        blocks: [
          {
            type: 'text',
            content: 'Native numbers have unique, irregular forms — you have to memorize them individually. They are used to count objects and people with counters (measure words), and to tell hours.',
          },
          {
            type: 'vocab-highlight',
            items: [
              { char: '하나', label: '1 — hana',   detail: '→ 한 before a counter', color: 'text-emerald-300' },
              { char: '둘',   label: '2 — dul',    detail: '→ 두 before a counter',  color: 'text-emerald-300' },
              { char: '셋',   label: '3 — set',    detail: '→ 세 before a counter',  color: 'text-emerald-300' },
              { char: '넷',   label: '4 — net',    detail: '→ 네 before a counter',  color: 'text-emerald-300' },
              { char: '다섯', label: '5 — daseot',  detail: '',                        color: 'text-emerald-300' },
              { char: '여섯', label: '6 — yeoseot', detail: '',                        color: 'text-emerald-300' },
              { char: '일곱', label: '7 — ilgop',   detail: '',                        color: 'text-emerald-300' },
              { char: '여덟', label: '8 — yeodeol',  detail: '',                       color: 'text-emerald-300' },
              { char: '아홉', label: '9 — ahop',    detail: '',                        color: 'text-emerald-300' },
              { char: '열',   label: '10 — yeol',   detail: '→ 스물(20), 서른(30)…',   color: 'text-sky-300' },
            ],
          },
          {
            type: 'table',
            headers: ['Tens', 'Native Korean', 'Romanization'],
            rows: [
              ['10', '열',   'yeol'],
              ['20', '스물', 'seumul → 스무 before a counter'],
              ['30', '서른', 'seoreun'],
              ['40', '마흔', 'maheun'],
              ['50', '쉰',   'swin'],
              ['60', '예순', 'yesun'],
              ['70', '일흔', 'ilheun'],
              ['80', '여든', 'yeodeun'],
              ['90', '아흔', 'aheun'],
            ],
          },
          {
            type: 'warning',
            title: 'Native numbers only go up to 99',
            content: 'The native system has no equivalent from 100 onward. From 100 up you always use Sino-Korean. In practice, native numbers are most common only from 1 to 99.',
          },
        ],
      },
      {
        title: 'Counters — what changes before 개, 명, 잔…',
        blocks: [
          {
            type: 'text',
            content: 'When you use native numbers to count objects, you place a <strong>counter</strong> (measure word) after the number. The numbers <strong>1, 2, 3, 4, and 20</strong> have shortened forms before any counter.',
          },
          {
            type: 'table',
            headers: ['Number', 'Standalone form', 'Before a counter'],
            rows: [
              ['1', '하나', '한'],
              ['2', '둘',   '두'],
              ['3', '셋',   '세'],
              ['4', '넷',   '네'],
              ['20','스물', '스무'],
            ],
          },
          {
            type: 'text',
            content: 'The most common counters you will run into:',
          },
          {
            type: 'example-list',
            items: [
              { korean: '개', romanization: 'gae', english: 'generic objects (thing)' },
              { korean: '명', romanization: 'myeong', english: 'people' },
              { korean: '잔', romanization: 'jan', english: 'glasses / cups' },
              { korean: '권', romanization: 'gwon', english: 'books' },
              { korean: '번', romanization: 'beon', english: 'times / ordinal number' },
              { korean: '살', romanization: 'sal', english: 'years of age' },
            ],
          },
          {
            type: 'table',
            headers: ['Korean', 'Romanization', 'English'],
            rows: [
              ['사과 두 개',   'sagwa du gae',       '2 apples'],
              ['학생 세 명',   'haksaeng se myeong', '3 students'],
              ['커피 한 잔',   'keopi han jan',      '1 cup of coffee'],
              ['책 다섯 권',   'chaek daseot gwon',  '5 books'],
              ['저는 스물다섯 살이에요.', 'jeoneun seumuldaseot sar-ieyo.', 'I am 25 years old.'],
            ],
          },
        ],
      },
      {
        title: 'Hours (native) and Minutes (Sino)',
        blocks: [
          {
            type: 'text',
            content: 'To tell time in Korean, you use <strong>both systems together</strong>: hours with native numbers + 시 (si), and minutes with Sino-Korean numbers + 분 (bun).',
          },
          {
            type: 'pattern',
            label: 'Formula',
            formula: '[native] 시 [Sino-Korean] 분',
            examples: [
              { korean: '두 시',         romanization: 'du si',          english: '2 o\'clock (sharp)' },
              { korean: '세 시 삼십 분', romanization: 'se si samsip bun', english: '3:30' },
              { korean: '열두 시 오 분', romanization: 'yeoldu si o bun', english: '12:05' },
              { korean: '몇 시예요?',    romanization: 'myeot siyeyo?',   english: 'What time is it?' },
            ],
          },
        ],
      },
      {
        title: 'When to use each system',
        blocks: [
          {
            type: 'table',
            headers: ['Context', 'System', 'Example'],
            rows: [
              ['Hours',           'Native',           '세 시 (3 o\'clock)'],
              ['Minutes',         'Sino-Korean',      '십오 분 (15 min)'],
              ['Age',             'Native + 살',      '스물두 살 (22 years old)'],
              ['Money',           'Sino-Korean',      '오천 원 (₩5,000)'],
              ['Months',          'Sino-Korean + 월', '삼월 (March)'],
              ['Days of month',   'Sino-Korean + 일', '이십일 일 (the 21st)'],
              ['Floors',          'Sino-Korean + 층', '삼 층 (3rd floor)'],
              ['Counting objects','Native + counter', '사과 한 개 (1 apple)'],
              ['Phone',           'Sino-Korean',      '공일공 (010…)'],
              ['Years',           'Sino-Korean + 년', '이천이십육 년 (2026)'],
            ],
          },
          {
            type: 'tip',
            title: 'Zero in phone numbers',
            content: 'For zero in Sino-Korean contexts (phone, address), use <strong>공</strong> (gong) instead of 영 (yeong). Both mean zero, but 공 is the standard in number sequences.',
          },
        ],
      },
    ],
  },

  // ─── Lesson 4: Present-tense verbs ────────────────────────────────
  {
    id: 'present-tense',
    title: 'Present-Tense Verbs',
    titleKorean: '현재형',
    description: 'Learn to conjugate verbs in the polite present with the -아요 and -어요 endings.',
    level: 'basic',
    sections: [
      {
        title: 'The polite present form',
        blocks: [
          {
            type: 'text',
            content: 'Korean has different levels of formality. The one you will use most day to day is the <strong>polite form</strong> (존댓말), which ends in <strong>-아요</strong> or <strong>-어요</strong>. It is safe to use with anyone you do not know well.',
          },
          {
            type: 'tip',
            title: 'Dictionary verbs end in 다',
            content: 'In the dictionary, verbs appear in the base form ending in <strong>다</strong>. Ex: 먹<strong>다</strong> (to eat), 가<strong>다</strong> (to go). To conjugate, we drop the 다 and are left with the <strong>stem</strong>: 먹, 가.',
          },
        ],
      },
      {
        title: 'Rule: which ending do you use?',
        blocks: [
          {
            type: 'text',
            content: 'The choice between <strong>아요</strong> and <strong>어요</strong> depends on the last vowel of the verb stem — this is called <strong>vowel harmony</strong>.',
          },
          {
            type: 'pattern',
            label: 'Rule 1',
            formula: 'Stem whose last vowel is ㅏ or ㅗ → + 아요',
            examples: [
              { korean: '가요', romanization: 'gayo', english: 'go / goes (가다 → 가 + 아요 → 가요)' },
              { korean: '와요', romanization: 'wayo', english: 'comes (오다 → 오 + 아요 → 와요)' },
              { korean: '봐요', romanization: 'bwayo', english: 'sees (보다 → 보 + 아요 → 봐요)' },
            ],
          },
          {
            type: 'pattern',
            label: 'Rule 2',
            formula: 'Stem with any other vowel → + 어요',
            examples: [
              { korean: '먹어요', romanization: 'meogeoyo', english: 'eats (먹다 → 먹 + 어요)' },
              { korean: '마셔요', romanization: 'masyeoyo', english: 'drinks (마시다 → 마시 + 어요 → 마셔요)' },
              { korean: '읽어요', romanization: 'ilgeoyo', english: 'reads (읽다 → 읽 + 어요)' },
            ],
          },
          {
            type: 'pattern',
            label: 'Rule 3 — 하다',
            formula: 'Verbs ending in 하다 (to do / to be) → 해요 (always)',
            examples: [
              { korean: '공부해요', romanization: 'gongbuhaeyo', english: 'studies (공부하다 → 공부해요)' },
              { korean: '일해요', romanization: 'ilhaeyo', english: 'works (일하다 → 일해요)' },
              { korean: '좋아해요', romanization: 'joahaeyo', english: 'likes (좋아하다 → 좋아해요)' },
            ],
          },
        ],
      },
      {
        title: 'Common verbs conjugated',
        blocks: [
          {
            type: 'table',
            headers: ['Base (다)', 'Stem', 'Polite present', 'English'],
            rows: [
              ['가다', '가', '가요', 'to go'],
              ['오다', '오', '와요', 'to come'],
              ['먹다', '먹', '먹어요', 'to eat'],
              ['마시다', '마시', '마셔요', 'to drink'],
              ['보다', '보', '봐요', 'to see / to watch'],
              ['듣다', '듣', '들어요', 'to listen (irregular)'],
              ['자다', '자', '자요', 'to sleep'],
              ['사다', '사', '사요', 'to buy'],
              ['읽다', '읽', '읽어요', 'to read'],
              ['쓰다', '쓰', '써요', 'to write / to use'],
              ['공부하다', '공부하', '공부해요', 'to study'],
              ['일하다', '일하', '일해요', 'to work'],
              ['좋아하다', '좋아하', '좋아해요', 'to like'],
            ],
          },
          {
            type: 'warning',
            title: 'ㄷ-irregular verbs',
            content: 'Some verbs whose stem ends in ㄷ change to ㄹ before a vowel. Ex: 듣<strong>다</strong> (to listen) → 들<strong>어요</strong> (not 듣어요). Others like 받다 (to receive) are regular: 받<strong>아요</strong>. Unfortunately this difference has to be memorized case by case.',
          },
        ],
      },
      {
        title: 'To be: 이다',
        blocks: [
          {
            type: 'text',
            content: 'The verb "to be" in Korean is <strong>이다</strong>. It behaves differently from other verbs — it attaches directly to the noun.',
          },
          {
            type: 'pattern',
            label: 'Polite form',
            formula: '[noun ending in consonant] + 이에요 · [noun ending in vowel] + 예요',
            examples: [
              { korean: '학생이에요.', romanization: 'haksaeng-ieyo.', english: 'I am a student.' },
              { korean: '의사예요.', romanization: 'uisayo.', english: 'I am a doctor.' },
              { korean: '한국 사람이에요.', romanization: 'hanguk saram-ieyo.', english: 'I am Korean.' },
            ],
          },
          {
            type: 'tip',
            title: 'Negation: 아니에요',
            content: 'The negation of 이다 is <strong>아니에요</strong> (anieyo) = "am / is / are not". Ex: 학생이 아니에요 = I am not a student. Note: the particle 이/가 is used before 아니에요.',
          },
        ],
      },
    ],
  },
]
