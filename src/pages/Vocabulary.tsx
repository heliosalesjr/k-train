import { useState } from 'react'
import { VOCABULARY, VOCAB_CATEGORIES, type VocabCard } from '../data/vocabulary'
import { useSpeech } from '../hooks/useSpeech'
import { loadProgress, updateCardProgress } from '../store/progress'
import NoVoiceBanner from '../components/NoVoiceBanner'

function VocabCardItem({ card }: { card: VocabCard }) {
  const { speak, isSupported, hasKoreanVoice } = useSpeech()
  const [flipped, setFlipped] = useState(false)
  const progress = loadProgress()
  const cardProgress = progress.cards[card.id]

  function handleRate(rating: 0 | 1 | 2 | 3) {
    const p = loadProgress()
    updateCardProgress(p, card.id, rating)
  }

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden">
      <div
        className="p-5 cursor-pointer hover:bg-stone-750 transition-colors"
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-3xl font-bold text-white mb-1">{card.korean}</div>
            <div className="text-red-400 font-mono text-sm">{card.romanization}</div>
          </div>
          <div className="flex items-center gap-2">
            {cardProgress && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                cardProgress.lastRating === 3 ? 'bg-emerald-900/50 text-emerald-400' :
                cardProgress.lastRating === 2 ? 'bg-teal-900/50 text-teal-400' :
                'bg-red-900/50 text-red-400'
              }`}>
                {cardProgress.repetitions}x
              </span>
            )}
            {isSupported && hasKoreanVoice && (
              <button
                onClick={e => { e.stopPropagation(); speak(card.korean) }}
                className="text-stone-500 hover:text-red-400 transition-colors text-xl"
                title="Listen"
              >
                🔊
              </button>
            )}
          </div>
        </div>

        {flipped && (
          <div className="mt-4 pt-4 border-t border-stone-700 space-y-2">
            <div className="text-stone-200 text-lg">{card.english}</div>
            {card.example && (
              <div className="bg-stone-700/50 rounded-xl p-3 space-y-1">
                <div
                  className="text-white cursor-pointer hover:text-red-300 transition-colors"
                  onClick={e => { e.stopPropagation(); speak(card.example!.sentence) }}
                >
                  {card.example.sentence}
                </div>
                <div className="text-stone-400 text-sm">{card.example.translation}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {flipped && (
        <div className="px-5 pb-4 flex gap-2">
          <span className="text-xs text-stone-500 mr-auto self-center">How was it?</span>
          {([
            { rating: 0 as const, label: '✗ Wrong', cls: 'bg-red-900/40 hover:bg-red-800 text-red-400' },
            { rating: 1 as const, label: '~ Hard', cls: 'bg-orange-900/40 hover:bg-orange-800 text-orange-400' },
            { rating: 2 as const, label: '◯ Ok', cls: 'bg-teal-900/40 hover:bg-teal-800 text-teal-400' },
            { rating: 3 as const, label: '✓ Easy', cls: 'bg-emerald-900/40 hover:bg-emerald-800 text-emerald-400' },
          ]).map(({ rating, label, cls }) => (
            <button
              key={rating}
              onClick={() => handleRate(rating)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${cls}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const CATEGORY_NOTES: Partial<Record<string, { title: string; content: string }>> = {
  numbers: {
    title: 'Two number systems',
    content:
      'Korean has <strong>two number systems</strong> that live side by side in everyday life — each with its own specific contexts.<br/><br/>' +
      '<strong>Sino-Korean</strong> (일 이 삼 사…): borrowed from Chinese. Used for dates, prices, phone numbers, minutes, floors, and large counts.<br/><br/>' +
      '<strong>Native Korean</strong> (하나 둘 셋 넷…): the language\'s original form. Used to count objects with counters (1 cup, 2 people…), clock hours, and numbers up to 99 in informal contexts.<br/><br/>' +
      'Practical example: "2 hours and 30 minutes" = <strong>두</strong> 시 <strong>삼십</strong> 분 — hour in native (두), minutes in Sino-Korean (삼십).',
  },
}

export default function Vocabulary() {
  const [category, setCategory] = useState<string>('greetings')
  const { hasKoreanVoice, voicesLoading } = useSpeech()

  const filtered = VOCABULARY.filter(v => v.category === category)
  const note = CATEGORY_NOTES[category]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">어휘 — Vocabulary</h1>
        <p className="text-stone-400">Click a word to see the translation. Rate it to train.</p>
      </div>

      {!voicesLoading && !hasKoreanVoice && <NoVoiceBanner />}

      <div className="flex flex-wrap gap-2">
        {VOCAB_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm capitalize transition-colors ${
              category === cat
                ? 'bg-red-600 text-white'
                : 'bg-stone-800 text-stone-400 hover:text-white border border-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {note && (
        <div className="bg-teal-950/40 border border-teal-700/40 rounded-xl p-4 space-y-1">
          <div className="text-teal-300 font-semibold text-sm">💡 {note.title}</div>
          <p
            className="text-stone-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: note.content }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map(card => (
          <VocabCardItem key={card.id} card={card} />
        ))}
        {filtered.length === 0 && (
          <p className="text-stone-500 col-span-2 text-center py-12">
            No words in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}
