import { Link } from 'react-router-dom'
import { hasDailyBadge, loadProgress } from '../store/progress'

const quizzes = [
  {
    to: '/quiz/vogais',
    emoji: '🔤',
    title: '소리 → 모음',
    subtitle: 'Sons das Vogais',
    desc: 'Ouça uma vogal e identifique o caractere correto. Todas as 21 vogais do Hangul.',
    color: 'from-violet-600 to-violet-800',
  },
  {
    to: '/quiz/palavras',
    emoji: '🎧',
    title: '소리 → 단어',
    subtitle: 'Palavras',
    desc: 'Ouça uma palavra e encontre a grafia coreana correta entre as opções.',
    color: 'from-sky-600 to-sky-800',
  },
  {
    to: '/quiz/emoji',
    emoji: '😄',
    title: '단어 → 이모지',
    subtitle: 'Palavra → Emoji',
    desc: 'Veja e ouça a palavra coreana e escolha o emoji que representa seu significado.',
    color: 'from-amber-600 to-amber-800',
  },
]

export default function Quiz() {
  const hasBadge = hasDailyBadge(loadProgress())

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">퀴즈 (Quiz)</h1>
        <p className="text-slate-400">Treine o reconhecimento auditivo do Hangul.</p>
        {hasBadge && (
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1.5 text-sm text-yellow-300 mt-1">
            <span>🏅</span>
            <span>Prática do dia completa!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizzes.map(q => (
          <Link
            key={q.to}
            to={q.to}
            className={`bg-gradient-to-br ${q.color} rounded-2xl p-6 hover:scale-[1.02] transition-transform block space-y-2`}
          >
            <div className="text-3xl">{q.emoji}</div>
            <div>
              <h2 className="text-xl font-bold text-white">{q.title}</h2>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wide">{q.subtitle}</p>
            </div>
            <p className="text-white/70 text-sm">{q.desc}</p>
          </Link>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500">
        Mais quizzes em breve — consoantes, sílabas e muito mais.
      </p>
    </div>
  )
}
