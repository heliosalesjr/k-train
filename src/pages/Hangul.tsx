import { useState } from 'react'
import { VOWELS, CONSONANTS, type HangulChar } from '../data/hangul'
import { useSpeech } from '../hooks/useSpeech'

type Tab = 'vowels' | 'consonants'

function HangulCard({ char, onSelect }: { char: HangulChar; onSelect: (c: HangulChar) => void }) {
  const { speak } = useSpeech()

  return (
    <button
      onClick={() => {
        speak(char.char)
        onSelect(char)
      }}
      className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500 rounded-xl p-4 flex flex-col items-center gap-1 transition-all cursor-pointer group"
    >
      <span className="text-4xl font-bold text-white group-hover:text-violet-300 transition-colors">
        {char.char}
      </span>
      <span className="text-sm text-violet-400 font-mono">{char.romanization}</span>
    </button>
  )
}

function DetailPanel({ char, onClose }: { char: HangulChar; onClose: () => void }) {
  const { speak, isSupported } = useSpeech()

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <span className="text-7xl font-bold text-white">{char.char}</span>
          <div>
            <div className="text-violet-400 font-mono text-2xl">{char.romanization}</div>
            <div className="text-slate-400 text-sm mt-1">{char.type === 'vowel' ? 'Vogal' : 'Consoante'}</div>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-white text-xl">✕</button>
      </div>

      <div className="bg-slate-700/50 rounded-xl p-4">
        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Som</div>
        <div className="text-slate-200">{char.sound}</div>
      </div>

      {char.examples && char.examples.length > 0 && (
        <div className="bg-slate-700/50 rounded-xl p-4 space-y-2">
          <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Exemplos</div>
          {char.examples.map((ex, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl text-white font-bold">{ex.word}</span>
              <span className="text-slate-400">—</span>
              <span className="text-slate-300">{ex.meaning}</span>
            </div>
          ))}
        </div>
      )}

      {isSupported && (
        <button
          onClick={() => speak(char.char)}
          className="w-full bg-violet-600 hover:bg-violet-500 text-white rounded-xl py-3 font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>🔊</span> Ouvir pronúncia
        </button>
      )}
    </div>
  )
}

export default function Hangul() {
  const [tab, setTab] = useState<Tab>('vowels')
  const [selected, setSelected] = useState<HangulChar | null>(null)

  const items = tab === 'vowels' ? VOWELS : CONSONANTS

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">한글 — O Alfabeto</h1>
        <p className="text-slate-400">
          Clique em qualquer caractere para ver detalhes e ouvir a pronúncia.
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-sm text-slate-400">
        <strong className="text-slate-300">Como funciona o Hangul:</strong> Cada sílaba é escrita em blocos. Um bloco sempre começa com uma consoante (ou ㅇ silencioso) + uma vogal, e opcionalmente uma consoante final. Ex: <span className="text-white font-bold">한</span> = ㅎ + ㅏ + ㄴ
      </div>

      <div className="flex gap-2">
        {(['vowels', 'consonants'] as Tab[]).map(t => (
          <button
            key={t}
            onClick={() => { setTab(t); setSelected(null) }}
            className={`px-5 py-2 rounded-xl font-medium transition-colors ${
              tab === t
                ? 'bg-violet-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t === 'vowels' ? `모음 Vogais (${VOWELS.length})` : `자음 Consoantes (${CONSONANTS.length})`}
          </button>
        ))}
      </div>

      {selected && (
        <DetailPanel char={selected} onClose={() => setSelected(null)} />
      )}

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {items.map(char => (
          <HangulCard
            key={char.char}
            char={char}
            onSelect={setSelected}
          />
        ))}
      </div>
    </div>
  )
}
