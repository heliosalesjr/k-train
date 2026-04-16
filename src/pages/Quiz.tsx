import { useCallback, useEffect, useRef, useState } from 'react'
import { VOWELS } from '../data/hangul'
import { useSpeech } from '../hooks/useSpeech'
import { awardDailyBadge, hasDailyBadge, loadProgress } from '../store/progress'

const BASIC_VOWELS = VOWELS.filter(v => v.group === 'basic')
const TARGET_SCORE = 10

interface Question {
  correct: (typeof BASIC_VOWELS)[0]
  options: (typeof BASIC_VOWELS)[0][]
}

function makeQuestion(exclude?: string): Question {
  const pool = [...BASIC_VOWELS]
  const correctIdx = Math.floor(Math.random() * pool.length)
  const correct = pool[correctIdx]

  // Avoid repeating same vowel twice in a row if possible
  if (exclude && pool.length > 1 && correct.char === exclude) {
    return makeQuestion(exclude)
  }

  pool.splice(correctIdx, 1)
  // Pick 2 unique wrong options
  const wrongs: (typeof BASIC_VOWELS)[0][] = []
  while (wrongs.length < 2) {
    const idx = Math.floor(Math.random() * pool.length)
    wrongs.push(pool.splice(idx, 1)[0])
  }

  const options = [correct, ...wrongs].sort(() => Math.random() - 0.5)
  return { correct, options }
}

type Phase = 'idle' | 'question' | 'correct' | 'wrong' | 'complete'

export default function Quiz() {
  const { speak, hasKoreanVoice, voicesLoading } = useSpeech()
  const [phase, setPhase] = useState<Phase>('idle')
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState<Question | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [badgeAlreadyHad, setBadgeAlreadyHad] = useState(false)
  const lastCharRef = useRef<string | undefined>(undefined)

  const nextQuestion = useCallback(() => {
    const q = makeQuestion(lastCharRef.current)
    lastCharRef.current = q.correct.char
    setQuestion(q)
    setSelected(null)
    setPhase('question')
    // small delay so TTS fires after render
    setTimeout(() => speak(q.correct.char), 150)
  }, [speak])

  function startQuiz() {
    const store = loadProgress()
    setBadgeAlreadyHad(hasDailyBadge(store))
    setScore(0)
    nextQuestion()
  }

  function handleAnswer(char: string) {
    if (phase !== 'question' || !question) return
    setSelected(char)
    const isCorrect = char === question.correct.char

    if (isCorrect) {
      const newScore = score + 1
      setScore(newScore)
      setPhase('correct')

      if (newScore >= TARGET_SCORE) {
        awardDailyBadge(loadProgress())
        setTimeout(() => setPhase('complete'), 900)
      } else {
        setTimeout(() => nextQuestion(), 900)
      }
    } else {
      setPhase('wrong')
      setTimeout(() => nextQuestion(), 1200)
    }
  }

  // Auto-speak when question loads
  useEffect(() => {
    if (phase === 'question' && question) {
      // already spoken in nextQuestion — nothing to do here
    }
  }, [phase, question])

  if (voicesLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400">
        Carregando vozes…
      </div>
    )
  }

  // ── Idle / Start screen ──────────────────────────────────────────────────
  if (phase === 'idle') {
    const alreadyBadged = hasDailyBadge(loadProgress())
    return (
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">퀴즈 (Quiz)</h1>
          <p className="text-slate-400">Treine o reconhecimento auditivo do Hangul.</p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 text-center space-y-5 max-w-md mx-auto">
          <div className="text-5xl">🎧</div>
          <h2 className="text-xl font-bold text-white">Sons das Vogais</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Você vai ouvir o som de uma vogal coreana e deve identificar qual caractere
            Hangul corresponde a esse som. Acerte <strong className="text-violet-300">10</strong> e ganhe um badge de prática do dia!
          </p>
          {alreadyBadged && (
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1.5 text-sm text-yellow-300">
              <span>🏅</span>
              <span>Badge de hoje já conquistado!</span>
            </div>
          )}
          {!hasKoreanVoice && (
            <p className="text-amber-400 text-xs bg-amber-900/30 border border-amber-700/40 rounded-lg p-3">
              Voz coreana não encontrada. Instale um pacote de voz ko-KR no sistema para ouvir o áudio.
            </p>
          )}
          <button
            onClick={startQuiz}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl py-3 transition-colors"
          >
            Começar
          </button>
        </div>

        <div className="text-center text-sm text-slate-500">
          Mais quizzes em breve — consoantes, sílabas e vocabulário.
        </div>
      </div>
    )
  }

  // ── Complete screen ──────────────────────────────────────────────────────
  if (phase === 'complete') {
    return (
      <div className="flex flex-col items-center justify-center gap-8 py-16 text-center">
        <div className="text-7xl animate-bounce">🏅</div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Parabéns!</h2>
          <p className="text-slate-400">
            Você acertou {TARGET_SCORE} respostas e ganhou o badge de prática do dia.
          </p>
          {badgeAlreadyHad && (
            <p className="text-slate-500 text-sm">(você já tinha o badge de hoje — continue praticando!)</p>
          )}
        </div>
        <button
          onClick={startQuiz}
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl px-8 py-3 transition-colors"
        >
          Jogar de novo
        </button>
      </div>
    )
  }

  // ── Question screen ──────────────────────────────────────────────────────
  return (
    <div className="space-y-8 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">Sons das Vogais</h1>
        <div className="flex items-center gap-2 bg-violet-900/40 border border-violet-700/50 rounded-full px-4 py-1 text-sm text-violet-300">
          <span>⭐</span>
          <span>{score} / {TARGET_SCORE}</span>
        </div>
      </div>

      {/* Score bar */}
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div
          className="bg-violet-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(score / TARGET_SCORE) * 100}%` }}
        />
      </div>

      {/* Audio prompt */}
      <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 text-center space-y-5">
        <p className="text-slate-400 text-sm uppercase tracking-widest">Qual vogal você ouviu?</p>

        <button
          onClick={() => question && speak(question.correct.char)}
          className="mx-auto flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white rounded-2xl px-8 py-5 text-2xl font-bold transition-colors"
          aria-label="Ouvir novamente"
        >
          <span className="text-3xl">🔊</span>
          <span className="text-slate-300 text-base font-normal">Ouvir novamente</span>
        </button>

        {/* Options */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {question?.options.map(opt => {
            const isSelected = selected === opt.char
            const isCorrect = opt.char === question.correct.char
            let style = 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'

            if (isSelected) {
              style = phase === 'correct' || (phase === 'wrong' && isCorrect)
                ? 'bg-emerald-600 border border-emerald-500 text-white'
                : 'bg-red-600 border border-red-500 text-white'
            } else if (phase === 'wrong' && isCorrect) {
              style = 'bg-emerald-600/40 border border-emerald-500 text-white'
            }

            return (
              <button
                key={opt.char}
                onClick={() => handleAnswer(opt.char)}
                disabled={phase !== 'question'}
                className={`${style} rounded-xl py-6 text-4xl font-bold transition-colors disabled:cursor-default`}
              >
                {opt.char}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {phase === 'correct' && (
          <p className="text-emerald-400 font-semibold text-sm animate-pulse">✓ Correto!</p>
        )}
        {phase === 'wrong' && question && (
          <p className="text-red-400 font-semibold text-sm">
            ✗ Era <span className="text-white">{question.correct.char}</span> ({question.correct.romanization}) — {question.correct.sound}
          </p>
        )}
      </div>
    </div>
  )
}
