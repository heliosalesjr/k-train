import { useState } from 'react'
import { LESSONS, type Lesson, type ContentBlock } from '../data/lessons'
import { useSpeech } from '../hooks/useSpeech'

function Block({ block }: { block: ContentBlock }) {
  const { speak, hasKoreanVoice } = useSpeech()

  switch (block.type) {
    case 'text':
      return (
        <p
          className="text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )

    case 'tip':
      return (
        <div className="bg-violet-950/40 border border-violet-700/40 rounded-xl p-4 space-y-1">
          {block.title && (
            <div className="text-violet-300 font-semibold text-sm">💡 {block.title}</div>
          )}
          <p
            className="text-slate-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        </div>
      )

    case 'warning':
      return (
        <div className="bg-amber-950/40 border border-amber-700/40 rounded-xl p-4 space-y-1">
          {block.title && (
            <div className="text-amber-300 font-semibold text-sm">⚠️ {block.title}</div>
          )}
          <p
            className="text-slate-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        </div>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-700/50">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-2 text-slate-400 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 ${ci === 0 ? 'text-white font-bold' : ci === 1 ? 'text-violet-400 font-mono' : 'text-slate-300'}`}>
                      {ci === 0 && hasKoreanVoice ? (
                        <button
                          onClick={() => speak(cell)}
                          className="hover:text-violet-300 transition-colors text-left"
                          title="Ouvir"
                        >
                          {cell}
                        </button>
                      ) : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'example-list':
      return (
        <div className="space-y-2">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-700/30 rounded-xl px-4 py-3">
              <button
                onClick={() => hasKoreanVoice && speak(item.korean)}
                className={`text-2xl font-bold text-white min-w-[6rem] text-left ${hasKoreanVoice ? 'hover:text-violet-300 transition-colors cursor-pointer' : ''}`}
              >
                {item.korean}
              </button>
              <span className="text-violet-400 font-mono text-sm w-28">{item.romanization}</span>
              <span className="text-slate-300 text-sm">{item.portuguese}</span>
              {hasKoreanVoice && <span className="ml-auto text-slate-600 text-xs">🔊</span>}
            </div>
          ))}
        </div>
      )

    case 'vocab-highlight':
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {block.items.map((item, i) => (
            <button
              key={i}
              onClick={() => hasKoreanVoice && speak(item.char + '요일')}
              className="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-xl p-4 text-left transition-colors group"
            >
              <div className={`text-4xl font-bold mb-2 ${item.color ?? 'text-white'}`}>
                {item.char}
              </div>
              <div className="text-slate-300 text-sm font-medium leading-snug">{item.label}</div>
              <div className="text-slate-500 text-xs mt-1">{item.detail}</div>
            </button>
          ))}
        </div>
      )
  }
}

function LessonView({ lesson, onBack }: { lesson: Lesson; onBack: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-300 text-sm mb-4 flex items-center gap-1 transition-colors"
        >
          ← Voltar
        </button>
        <div className="flex items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{lesson.titleKorean} — {lesson.title}</h1>
            <p className="text-slate-400 mt-1">{lesson.description}</p>
          </div>
          <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 capitalize mt-1">
            {lesson.level}
          </span>
        </div>
      </div>

      {lesson.sections.map((section, si) => (
        <div key={si} className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-200 pb-2 border-b border-slate-700/50">
            {section.title}
          </h2>
          {section.blocks.map((block, bi) => (
            <Block key={bi} block={block} />
          ))}
        </div>
      ))}
    </div>
  )
}

function LessonCard({ lesson, onSelect }: { lesson: Lesson; onSelect: () => void }) {
  const levelColor = {
    iniciante: 'text-emerald-400 bg-emerald-900/30 border-emerald-800/50',
    básico: 'text-sky-400 bg-sky-900/30 border-sky-800/50',
    intermediário: 'text-amber-400 bg-amber-900/30 border-amber-800/50',
  }[lesson.level]

  return (
    <button
      onClick={onSelect}
      className="w-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-violet-500/50 rounded-2xl p-6 text-left transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
          {lesson.titleKorean}
          <span className="text-slate-400 font-normal ml-2 text-base">— {lesson.title}</span>
        </h2>
        <span className={`shrink-0 text-xs px-2 py-1 rounded-full border capitalize ${levelColor}`}>
          {lesson.level}
        </span>
      </div>
      <p className="text-slate-400 text-sm">{lesson.description}</p>
      <div className="mt-4 text-xs text-slate-600">
        {lesson.sections.length} seções
      </div>
    </button>
  )
}

export default function Lessons() {
  const [active, setActive] = useState<Lesson | null>(null)

  if (active) {
    return <LessonView lesson={active} onBack={() => setActive(null)} />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">수업 — Lições</h1>
        <p className="text-slate-400">Lições estruturadas para entender o coreano além do vocabulário.</p>
      </div>

      <div className="space-y-3">
        {LESSONS.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} onSelect={() => setActive(lesson)} />
        ))}
      </div>
    </div>
  )
}
