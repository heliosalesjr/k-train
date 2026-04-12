import { Link } from 'react-router-dom'
import { loadProgress } from '../store/progress'

const modules = [
  {
    to: '/hangul',
    emoji: '🔤',
    title: '한글 (Hangul)',
    desc: 'Aprenda o alfabeto coreano — vogais e consoantes com pronúncia.',
    color: 'from-violet-600 to-violet-800',
    tag: 'Começe aqui',
  },
  {
    to: '/vocab',
    emoji: '📖',
    title: '어휘 (Vocabulário)',
    desc: 'Explore palavras por categoria com exemplos e pronúncia.',
    color: 'from-sky-600 to-sky-800',
    tag: null,
  },
  {
    to: '/flashcards',
    emoji: '🔁',
    title: '복습 (Revisão)',
    desc: 'Flashcards com repetição espaçada para fixar o que aprendeu.',
    color: 'from-emerald-600 to-emerald-800',
    tag: null,
  },
  {
    to: '/lessons',
    emoji: '📚',
    title: '수업 (Lições)',
    desc: 'Lições estruturadas de gramática e frases essenciais.',
    color: 'from-amber-600 to-amber-800',
    tag: 'Em breve',
  },
]

export default function Home() {
  const progress = loadProgress()
  const cardsStudied = Object.keys(progress.cards).length

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white">안녕하세요!</h1>
        <p className="text-slate-400 text-lg">Bem-vindo ao k-train. Vamos aprender coreano.</p>
        {cardsStudied > 0 && (
          <div className="inline-flex items-center gap-2 bg-violet-900/40 border border-violet-700/50 rounded-full px-4 py-1.5 text-sm text-violet-300 mt-2">
            <span>🔥</span>
            <span>{cardsStudied} {cardsStudied === 1 ? 'carta estudada' : 'cartas estudadas'}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map(mod => (
          <Link
            key={mod.to}
            to={mod.to}
            className={`relative bg-gradient-to-br ${mod.color} rounded-2xl p-6 hover:scale-[1.02] transition-transform block`}
          >
            {mod.tag && (
              <span className="absolute top-3 right-3 text-xs bg-black/30 text-white/80 rounded-full px-2 py-0.5">
                {mod.tag}
              </span>
            )}
            <div className="text-3xl mb-3">{mod.emoji}</div>
            <h2 className="text-xl font-bold text-white mb-1">{mod.title}</h2>
            <p className="text-white/70 text-sm">{mod.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-slate-300 font-semibold mb-3">Por onde começar?</h3>
        <ol className="space-y-2 text-sm text-slate-400">
          <li className="flex gap-3">
            <span className="text-violet-400 font-bold">1.</span>
            <span>Aprenda o <strong className="text-slate-300">Hangul</strong> — o alfabeto. São ~30 caracteres e você consegue em poucos dias.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-violet-400 font-bold">2.</span>
            <span>Explore o <strong className="text-slate-300">Vocabulário</strong> por categorias e ouça a pronúncia.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-violet-400 font-bold">3.</span>
            <span>Use os <strong className="text-slate-300">Flashcards</strong> diariamente para revisar o que aprendeu.</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
