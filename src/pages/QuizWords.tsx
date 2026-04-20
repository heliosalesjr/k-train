import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { VocabCard } from '../data/vocabulary'
import { VOCABULARY } from '../data/vocabulary'
import { useSpeech } from '../hooks/useSpeech'
import { awardDailyBadge, hasDailyBadge, loadProgress } from '../store/progress'
import { playPlim } from '../utils/audio'

// Exclude very short suffix/standalone entries that don't work well in isolation
const EXCLUDED_IDS = new Set(['dia7', 'col16', 'dia12'])
const QUIZ_POOL = VOCABULARY.filter(v => !EXCLUDED_IDS.has(v.id))

const TARGET_SCORE = 10

interface Question {
  correct: VocabCard
  options: VocabCard[]
}

function makeQuestion(excludeId?: string): Question {
  const pool = [...QUIZ_POOL]
  const correctIdx = Math.floor(Math.random() * pool.length)
  const correct = pool[correctIdx]

  if (excludeId && pool.length > 1 && correct.id === excludeId) {
    return makeQuestion(excludeId)
  }

  pool.splice(correctIdx, 1)
  const wrongs: VocabCard[] = []
  while (wrongs.length < 2) {
    const idx = Math.floor(Math.random() * pool.length)
    wrongs.push(pool.splice(idx, 1)[0])
  }

  return { correct, options: [correct, ...wrongs].sort(() => Math.random() - 0.5) }
}

type Phase = 'idle' | 'question' | 'answering' | 'correct' | 'wrong' | 'complete'

export default function QuizWords() {
  const { speak, hasKoreanVoice, voicesLoading } = useSpeech()
  const [phase, setPhase] = useState<Phase>('idle')
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState<Question | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [badgeAlreadyHad, setBadgeAlreadyHad] = useState(false)
  const lastIdRef = useRef<string | undefined>(undefined)

  const nextQuestion = useCallback(() => {
    const q = makeQuestion(lastIdRef.current)
    lastIdRef.current = q.correct.id
    setQuestion(q)
    setSelected(null)
    setPhase('question')
    setTimeout(() => speak(q.correct.korean), 150)
  }, [speak])

  function startQuiz() {
    setBadgeAlreadyHad(hasDailyBadge(loadProgress()))
    setScore(0)
    nextQuestion()
  }

  function handleAnswer(id: string) {
    if (phase !== 'question' || !question) return
    const chosen = question.options.find(o => o.id === id)!
    setSelected(id)
    setPhase('answering')
    speak(chosen.korean)

    const isCorrect = id === question.correct.id
    setTimeout(() => {
      if (isCorrect) {
        const newScore = score + 1
        setScore(newScore)
        setPhase('correct')
        playPlim()
        if (newScore >= TARGET_SCORE) {
          awardDailyBadge(loadProgress())
          setTimeout(() => setPhase('complete'), 2200)
        } else {
          setTimeout(() => nextQuestion(), 2200)
        }
      } else {
        setPhase('wrong')
      }
    }, 900) // palavras são mais longas que vogais, dar mais tempo ao TTS
  }

  if (voicesLoading) {
    return <div className="flex items-center justify-center h-64 text-stone-400">Carregando vozes…</div>
  }

  if (phase === 'idle') {
    const alreadyBadged = hasDailyBadge(loadProgress())
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Link to="/quiz" className="text-stone-500 hover:text-stone-300 transition-colors text-sm">← Quiz</Link>
          <h1 className="text-xl font-bold text-white">소리 → 단어</h1>
        </div>

        <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-8 text-center space-y-5 max-w-md mx-auto">
          <div className="text-5xl">🎧</div>
          <h2 className="text-xl font-bold text-white">Palavras</h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            Ouça uma palavra coreana e encontre a grafia correta entre as três opções.
            Acerte <strong className="text-teal-300">{TARGET_SCORE}</strong> e ganhe o badge do dia!
          </p>
          {alreadyBadged && (
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1.5 text-sm text-yellow-300">
              <span>🏅</span><span>Badge de hoje já conquistado!</span>
            </div>
          )}
          {!hasKoreanVoice && (
            <p className="text-amber-400 text-xs bg-amber-900/30 border border-amber-700/40 rounded-lg p-3">
              Voz coreana não encontrada. Instale um pacote ko-KR no sistema.
            </p>
          )}
          <button onClick={startQuiz} className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl py-3 transition-colors">
            Começar
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'complete') {
    return (
      <div className="flex flex-col items-center justify-center gap-8 py-16 text-center">
        <div className="text-7xl animate-bounce">🏅</div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Parabéns!</h2>
          <p className="text-stone-400">Você acertou {TARGET_SCORE} respostas e ganhou o badge de prática do dia.</p>
          {badgeAlreadyHad && (
            <p className="text-stone-500 text-sm">(você já tinha o badge de hoje — continue praticando!)</p>
          )}
        </div>
        <div className="flex gap-3">
          <Link to="/quiz" className="bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-xl px-6 py-3 transition-colors">
            ← Quizzes
          </Link>
          <button onClick={startQuiz} className="bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors">
            Jogar de novo
          </button>
        </div>
      </div>
    )
  }

  const isLocked = phase !== 'question'

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/quiz" className="text-stone-500 hover:text-stone-300 transition-colors text-sm">← Quiz</Link>
        <div className="flex items-center gap-2 bg-teal-900/40 border border-teal-700/50 rounded-full px-4 py-1 text-sm text-teal-300">
          <span>⭐</span><span>{score} / {TARGET_SCORE}</span>
        </div>
      </div>

      <div className="w-full bg-stone-800 rounded-full h-2">
        <div className="bg-teal-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(score / TARGET_SCORE) * 100}%` }} />
      </div>

      <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-8 text-center space-y-5">
        <p className="text-stone-400 text-sm uppercase tracking-widest">Qual palavra você ouviu?</p>

        <button
          onClick={() => question && speak(question.correct.korean)}
          disabled={isLocked}
          className="mx-auto flex items-center gap-3 bg-stone-700 hover:bg-stone-600 disabled:opacity-50 disabled:cursor-default text-white rounded-2xl px-8 py-5 transition-colors"
        >
          <span className="text-3xl">🔊</span>
          <span className="text-stone-300 text-base font-normal">Ouvir novamente</span>
        </button>

        <div className="flex flex-col gap-3 pt-2">
          {question?.options.map(opt => {
            const isSelected = selected === opt.id
            const isCorrectOpt = opt.id === question.correct.id
            let style = 'bg-stone-700 hover:bg-stone-600 text-white border border-stone-600'

            if (isSelected && (phase === 'correct' || phase === 'answering')) {
              style = 'bg-emerald-600 border border-emerald-500 text-white scale-[1.02]'
            } else if (isSelected && phase === 'wrong') {
              style = 'bg-red-600 border border-red-500 text-white'
            } else if (phase === 'wrong' && isCorrectOpt) {
              style = 'bg-emerald-600/40 border border-emerald-500 text-white'
            } else if (isLocked) {
              style = 'bg-stone-700 text-white border border-stone-600 opacity-60'
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleAnswer(opt.id)}
                disabled={isLocked}
                className={`${style} rounded-xl px-6 py-4 text-2xl font-bold transition-all disabled:cursor-default`}
              >
                {opt.korean}
              </button>
            )
          })}
        </div>

        {(phase === 'correct' || phase === 'answering') && selected === question?.correct.id && (
          <div className="space-y-0.5">
            <p className="text-emerald-400 font-semibold text-sm">✓ Correto!</p>
            {phase === 'correct' && (
              <p className="text-stone-400 text-sm">{question.correct.portuguese}</p>
            )}
          </div>
        )}

        {phase === 'wrong' && question && (
          <div className="space-y-4 pt-1">
            <div className="bg-red-900/30 border border-red-700/40 rounded-xl p-4 text-left space-y-1">
              <p className="text-red-400 font-semibold text-sm">✗ Não foi dessa vez</p>
              <p className="text-stone-300 text-sm">
                A resposta era <span className="text-white font-bold text-xl">{question.correct.korean}</span>
              </p>
              <p className="text-stone-400 text-sm">{question.correct.romanization}</p>
            </div>
            <button onClick={nextQuestion} className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl py-3 transition-colors">
              Próxima palavra →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
