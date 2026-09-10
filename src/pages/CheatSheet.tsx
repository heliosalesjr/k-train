import { useState } from 'react'
import { CHEAT_SECTIONS, type CheatSection } from '../data/cheatsheet'
import { useSpeech } from '../hooks/useSpeech'
import NoVoiceBanner from '../components/NoVoiceBanner'

function SpeakButton({ text }: { text: string }) {
  const { speak, isSupported, hasKoreanVoice } = useSpeech()
  if (!isSupported || !hasKoreanVoice) return null
  return (
    <button
      onClick={() => speak(text)}
      className="text-stone-500 hover:text-red-400 transition-colors text-xl shrink-0"
      title="Ouvir"
      aria-label="Ouvir pronúncia"
    >
      🔊
    </button>
  )
}

function RowsSection({ section }: { section: Extract<CheatSection, { type: 'rows' }> }) {
  return (
    <div className="bg-stone-800/60 border border-stone-700 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-3 text-xs uppercase tracking-wider text-stone-500 border-b border-stone-700">
        <div>Coreano / Romanização</div>
        <div className="hidden sm:block"></div>
        <div className="text-right sm:text-left">Português</div>
      </div>
      <ul className="divide-y divide-stone-700/70">
        {section.rows.map((row, i) => (
          <li
            key={i}
            className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 ${
              i % 2 === 0 ? 'bg-stone-800/40' : 'bg-stone-800/10'
            }`}
          >
            <div className="min-w-0">
              <div className="text-lg sm:text-xl font-semibold text-white break-keep">{row.korean}</div>
              <div className="text-red-400 font-mono text-xs mt-0.5">{row.romanization}</div>
            </div>
            <SpeakButton text={row.korean} />
            <div className="col-span-2 sm:col-span-1 text-stone-300 text-sm sm:text-right sm:pl-4">
              {row.english}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StructureSection({ section }: { section: Extract<CheatSection, { type: 'structure' }> }) {
  return (
    <div className="space-y-3">
      {section.items.map((item, i) => (
        <div key={i} className="bg-stone-800/60 border border-stone-700 rounded-2xl p-5">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">{item.label}</div>
          <div className="text-stone-200 font-medium mb-3">{item.pattern}</div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xl font-bold text-white mb-1 break-keep">{item.korean}</div>
              <div className="text-red-400 font-mono text-xs">{item.romanization}</div>
              <div className="text-stone-400 text-sm mt-1">{item.english}</div>
            </div>
            <SpeakButton text={item.korean} />
          </div>
        </div>
      ))}
      {section.tip && (
        <div className="rounded-2xl border border-amber-700/40 bg-amber-900/20 px-4 py-3 text-sm text-amber-200">
          {section.tip}
        </div>
      )}
    </div>
  )
}

export default function CheatSheet() {
  const [activeId, setActiveId] = useState(CHEAT_SECTIONS[0].id)
  const active = CHEAT_SECTIONS.find(s => s.id === activeId) ?? CHEAT_SECTIONS[0]
  const { hasKoreanVoice, voicesLoading } = useSpeech()

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">📋 Cheat Sheet</h1>
        <p className="text-stone-400">
          Referência rápida — saudações, apresentação, estrutura de frases e profissões.
        </p>
      </div>

      {!voicesLoading && !hasKoreanVoice && <NoVoiceBanner />}

      <div className="flex flex-wrap gap-2 justify-center">
        {CHEAT_SECTIONS.map(sec => {
          const isActive = sec.id === activeId
          return (
            <button
              key={sec.id}
              onClick={() => setActiveId(sec.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
              }`}
            >
              <span>{sec.emoji}</span>
              <span>{sec.title}</span>
            </button>
          )
        })}
      </div>

      <div>
        <div className="flex items-baseline gap-3 mb-3 px-1">
          <h2 className="text-xl font-bold text-white">
            {active.emoji} {active.title}
          </h2>
          {active.subtitle && (
            <span className="text-stone-500 text-sm">{active.subtitle}</span>
          )}
        </div>
        {active.type === 'rows' ? (
          <RowsSection section={active} />
        ) : (
          <StructureSection section={active} />
        )}
      </div>
    </div>
  )
}
