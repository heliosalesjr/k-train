import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { EmojiWord } from '../data/emojiQuiz'
import { EMOJI_WORDS } from '../data/emojiQuiz'
import { useSpeech } from '../hooks/useSpeech'
import { awardDailyBadge, hasDailyBadge, loadProgress } from '../store/progress'
import { playPlim } from '../utils/audio'

const TARGET_SCORE = 10

interface Question {
  correct: EmojiWord
  options: EmojiWord[]
}

function makeQuestion(excludeId?: string): Question {
  const pool = [...EMOJI_WORDS]
  const correctIdx = Math.floor(Math.random() * pool.length)
  const correct = pool[correctIdx]

  if (excludeId && pool.length > 1 && correct.id === excludeId) {
    return makeQuestion(excludeId)
  }

  pool.splice(correctIdx, 1)
  const wrongs: EmojiWord[] = []
  while (wrongs.length < 2) {
    const idx = Math.floor(Math.random() * pool.length)
    wrongs.push(pool.splice(idx, 1)[0])
  }

  return { correct, options: [correct, ...wrongs].sort(() => Math.random() - 0.5) }
}

type Phase = 'idle' | 'question' | 'answering' | 'correct' | 'wrong' | 'complete'

export default function QuizEmojiToWord() {
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
    setSelected(id)
    setPhase('answering')

    const isCorrect = id === question.correct.id
    setTimeout(() => {
      if (isCorrect) {
        const newScore = score + 1
        setScore(newScore)
        setPhase('correct')
        playPlim()
        if (newScore >= TARGET_SCORE) {
          awardDailyBadge(loadProgress())
          setTimeout(() => setPhase('complete'), 1800)
        } else {
          setTimeout(() => nextQuestion(), 1800)
        }
      } else {
        setPhase('wrong')
      }
    }, 300)
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
          <h1 className="text-xl font-bold text-white">이모지 → 단어</h1>
        </div>

        <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-8 text-center space-y-5 max-w-md mx-auto">
          <div className="text-5xl">🔤</div>
          <h2 className="text-xl font-bold text-white">Emoji → Palavra</h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            Veja o emoji, ouça a palavra coreana e escolha a grafia correta.
            Acerte <strong className="text-orange-300">{TARGET_SCORE}</strong> e ganhe o badge do dia!
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
          <button onClick={startQuiz} className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl py-3 transition-colors">
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
          <button onClick={startQuiz} className="bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors">
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
        <div className="flex items-center gap-2 bg-orange-900/40 border border-orange-700/50 rounded-full px-4 py-1 text-sm text-orange-300">
          <span>⭐</span><span>{score} / {TARGET_SCORE}</span>
        </div>
      </div>

      <div className="w-full bg-stone-800 rounded-full h-2">
        <div className="bg-orange-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(score / TARGET_SCORE) * 100}%` }} />
      </div>

      <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-8 text-center space-y-6">

        {/* Emoji + botão de som */}
        <div className="space-y-3">
          <p className="text-8xl">{question?.correct.emoji}</p>
          <button
            onClick={() => question && speak(question.correct.korean)}
            disabled={isLocked}
            className="inline-flex items-center gap-2 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:cursor-default text-stone-300 rounded-xl px-5 py-2.5 text-sm transition-colors"
          >
            <span className="text-lg">🔊</span>
            Ouvir novamente
          </button>
        </div>

        {/* Opções de texto coreano */}
        <div className="flex flex-col gap-3">
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

        {/* Feedback correto */}
        {(phase === 'correct' || phase === 'answering') && selected === question?.correct.id && (
          <p className="text-emerald-400 font-semibold text-sm">✓ Correto!</p>
        )}

        {/* Feedback errado */}
        {phase === 'wrong' && question && (
          <div className="space-y-4">
            <div className="bg-red-900/30 border border-red-700/40 rounded-xl p-4 text-left space-y-1">
              <p className="text-red-400 font-semibold text-sm">✗ Não foi dessa vez</p>
              <p className="text-stone-300 text-sm">
                A resposta era <span className="text-white font-bold text-xl">{question.correct.korean}</span>
              </p>
            </div>
            <button onClick={nextQuestion} className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl py-3 transition-colors">
              Próxima →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
