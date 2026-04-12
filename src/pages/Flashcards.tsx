import { useState, useMemo } from 'react'
import { VOCABULARY } from '../data/vocabulary'
import { loadProgress, updateCardProgress, isDue, type ProgressStore } from '../store/progress'
import { useSpeech } from '../hooks/useSpeech'

type Mode = 'ko→pt' | 'pt→ko'

export default function Flashcards() {
  const { speak, isSupported } = useSpeech()
  const [progress, setProgress] = useState<ProgressStore>(() => loadProgress())
  const [mode, setMode] = useState<Mode>('ko→pt')
  const [flipped, setFlipped] = useState(false)
  const [sessionIndex, setSessionIndex] = useState(0)
  const [sessionDone, setSessionDone] = useState(false)

  const dueCards = useMemo(() => {
    return VOCABULARY.filter(card => {
      const cp = progress.cards[card.id]
      if (!cp) return true // never seen = always due
      return isDue(cp)
    })
  }, [progress])

  const current = dueCards[sessionIndex % Math.max(dueCards.length, 1)]

  function handleRate(rating: 0 | 1 | 2 | 3) {
    if (!current) return
    const newProgress = updateCardProgress(progress, current.id, rating)
    setProgress(newProgress)
    setFlipped(false)
    if (sessionIndex + 1 >= dueCards.length) {
      setSessionDone(true)
    } else {
      setSessionIndex(i => i + 1)
    }
  }

  function restart() {
    setProgress(loadProgress())
    setSessionIndex(0)
    setSessionDone(false)
    setFlipped(false)
  }

  if (dueCards.length === 0 && !sessionDone) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">복습 — Revisão</h1>
        <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-2xl p-8 text-center space-y-3">
          <div className="text-5xl">🎉</div>
          <h2 className="text-xl font-bold text-emerald-300">Nenhuma carta para revisar!</h2>
          <p className="text-slate-400">Você está em dia. Volte mais tarde ou explore o vocabulário para adicionar mais cartas.</p>
        </div>
      </div>
    )
  }

  if (sessionDone) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">복습 — Revisão</h1>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center space-y-4">
          <div className="text-5xl">✅</div>
          <h2 className="text-xl font-bold text-white">Sessão concluída!</h2>
          <p className="text-slate-400">Você revisou {dueCards.length} {dueCards.length === 1 ? 'carta' : 'cartas'}.</p>
          <button
            onClick={restart}
            className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Nova sessão
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">복습 — Revisão</h1>
        <div className="flex gap-2">
          {(['ko→pt', 'pt→ko'] as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => { setMode(m); setFlipped(false) }}
              className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                mode === m ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-slate-500">
        {sessionIndex + 1} / {dueCards.length} cartas
        <div className="mt-1 bg-slate-800 rounded-full h-1.5">
          <div
            className="bg-violet-500 h-1.5 rounded-full transition-all"
            style={{ width: `${((sessionIndex) / dueCards.length) * 100}%` }}
          />
        </div>
      </div>

      {current && (
        <div
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 cursor-pointer hover:border-violet-500/50 transition-colors min-h-48 flex flex-col items-center justify-center text-center gap-4"
          onClick={() => !flipped && setFlipped(true)}
        >
          {mode === 'ko→pt' ? (
            <>
              <div className="flex items-center gap-3">
                <span className="text-5xl font-bold text-white">{current.korean}</span>
                {isSupported && (
                  <button
                    onClick={e => { e.stopPropagation(); speak(current.korean) }}
                    className="text-slate-500 hover:text-violet-400 text-2xl transition-colors"
                  >
                    🔊
                  </button>
                )}
              </div>
              <div className="text-violet-400 font-mono">{current.romanization}</div>
              {!flipped && <p className="text-slate-600 text-sm mt-2">Clique para revelar</p>}
              {flipped && (
                <div className="mt-2 pt-4 border-t border-slate-700 w-full space-y-2">
                  <div className="text-2xl text-slate-200">{current.portuguese}</div>
                  {current.example && (
                    <div className="text-slate-500 text-sm">{current.example.translation}</div>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="text-3xl text-slate-200">{current.portuguese}</div>
              {!flipped && <p className="text-slate-600 text-sm mt-2">Clique para revelar</p>}
              {flipped && (
                <div className="mt-2 pt-4 border-t border-slate-700 w-full space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl font-bold text-white">{current.korean}</span>
                    {isSupported && (
                      <button
                        onClick={e => { e.stopPropagation(); speak(current.korean) }}
                        className="text-slate-500 hover:text-violet-400 text-2xl transition-colors"
                      >
                        🔊
                      </button>
                    )}
                  </div>
                  <div className="text-violet-400 font-mono">{current.romanization}</div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {flipped && (
        <div className="grid grid-cols-4 gap-3">
          {([
            { rating: 0 as const, label: 'Errei', sub: 'repetir logo', cls: 'bg-red-900/30 hover:bg-red-800/50 border-red-700/50 text-red-400' },
            { rating: 1 as const, label: 'Difícil', sub: '+1 dia', cls: 'bg-orange-900/30 hover:bg-orange-800/50 border-orange-700/50 text-orange-400' },
            { rating: 2 as const, label: 'Ok', sub: 'intervalo normal', cls: 'bg-sky-900/30 hover:bg-sky-800/50 border-sky-700/50 text-sky-400' },
            { rating: 3 as const, label: 'Fácil', sub: 'intervalo maior', cls: 'bg-emerald-900/30 hover:bg-emerald-800/50 border-emerald-700/50 text-emerald-400' },
          ]).map(({ rating, label, sub, cls }) => (
            <button
              key={rating}
              onClick={() => handleRate(rating)}
              className={`border rounded-xl p-3 transition-colors text-center ${cls}`}
            >
              <div className="font-medium">{label}</div>
              <div className="text-xs opacity-60 mt-0.5">{sub}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
