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
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
      <div
        className="p-5 cursor-pointer hover:bg-slate-750 transition-colors"
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-3xl font-bold text-white mb-1">{card.korean}</div>
            <div className="text-violet-400 font-mono text-sm">{card.romanization}</div>
          </div>
          <div className="flex items-center gap-2">
            {cardProgress && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                cardProgress.lastRating === 3 ? 'bg-emerald-900/50 text-emerald-400' :
                cardProgress.lastRating === 2 ? 'bg-sky-900/50 text-sky-400' :
                'bg-red-900/50 text-red-400'
              }`}>
                {cardProgress.repetitions}x
              </span>
            )}
            {isSupported && hasKoreanVoice && (
              <button
                onClick={e => { e.stopPropagation(); speak(card.korean) }}
                className="text-slate-500 hover:text-violet-400 transition-colors text-xl"
                title="Ouvir"
              >
                🔊
              </button>
            )}
          </div>
        </div>

        {flipped && (
          <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
            <div className="text-slate-200 text-lg">{card.portuguese}</div>
            {card.example && (
              <div className="bg-slate-700/50 rounded-xl p-3 space-y-1">
                <div
                  className="text-white cursor-pointer hover:text-violet-300 transition-colors"
                  onClick={e => { e.stopPropagation(); speak(card.example!.sentence) }}
                >
                  {card.example.sentence}
                </div>
                <div className="text-slate-400 text-sm">{card.example.translation}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {flipped && (
        <div className="px-5 pb-4 flex gap-2">
          <span className="text-xs text-slate-500 mr-auto self-center">Como foi?</span>
          {([
            { rating: 0 as const, label: '✗ Errei', cls: 'bg-red-900/40 hover:bg-red-800 text-red-400' },
            { rating: 1 as const, label: '~ Difícil', cls: 'bg-orange-900/40 hover:bg-orange-800 text-orange-400' },
            { rating: 2 as const, label: '◯ Ok', cls: 'bg-sky-900/40 hover:bg-sky-800 text-sky-400' },
            { rating: 3 as const, label: '✓ Fácil', cls: 'bg-emerald-900/40 hover:bg-emerald-800 text-emerald-400' },
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

export default function Vocabulary() {
  const [category, setCategory] = useState<string>('saudações')
  const { hasKoreanVoice, voicesLoading } = useSpeech()

  const filtered = VOCABULARY.filter(v => v.category === category)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">어휘 — Vocabulário</h1>
        <p className="text-slate-400">Clique em uma palavra para ver a tradução. Avalie para treinar.</p>
      </div>

      {!voicesLoading && !hasKoreanVoice && <NoVoiceBanner />}

      <div className="flex flex-wrap gap-2">
        {VOCAB_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm capitalize transition-colors ${
              category === cat
                ? 'bg-violet-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map(card => (
          <VocabCardItem key={card.id} card={card} />
        ))}
        {filtered.length === 0 && (
          <p className="text-slate-500 col-span-2 text-center py-12">
            Nenhuma palavra nessa categoria ainda.
          </p>
        )}
      </div>
    </div>
  )
}
