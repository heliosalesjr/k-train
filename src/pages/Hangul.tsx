import { useState } from 'react'
import { VOWELS, CONSONANTS, type HangulChar } from '../data/hangul'
import { useSpeech } from '../hooks/useSpeech'
import NoVoiceBanner from '../components/NoVoiceBanner'

const BASIC_VOWELS = VOWELS.filter(v => v.group === 'basic')
const COMPOUND_VOWELS = VOWELS.filter(v => v.group === 'compound')

function HangulCard({ char, onSelect, selected }: { char: HangulChar; onSelect: (c: HangulChar | null) => void; selected: boolean }) {
  const { speak } = useSpeech()

  function handleClick() {
    speak(char.char)
    onSelect(selected ? null : char)
  }

  return (
    <button
      onClick={handleClick}
      className={`border rounded-xl flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 relative ${
        selected
          ? 'bg-violet-700 border-violet-400 text-white shadow-lg shadow-violet-500/40 scale-110 z-10 px-3 py-4'
          : 'bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-violet-500 px-3 py-3'
      }`}
    >
      <span className={`font-bold transition-all duration-200 ${selected ? 'text-5xl' : 'text-4xl text-white'}`}>
        {char.char}
      </span>
      <span className={`font-mono transition-all duration-200 ${selected ? 'text-sm text-violet-200' : 'text-xs text-violet-400'}`}>
        {char.romanization}
      </span>
      {selected && (
        <span className="text-[11px] text-violet-100 text-center leading-tight mt-0.5 max-w-[120px]">
          {char.sound}
        </span>
      )}
      {selected && char.examples && char.examples[0] && (
        <span className="text-[11px] text-slate-300 font-bold mt-0.5">
          {char.examples[0].word} <span className="font-normal text-slate-400">— {char.examples[0].meaning}</span>
        </span>
      )}
      {!selected && char.group === 'compound' && (
        <span className="text-[10px] text-slate-500 leading-none">{char.composition}</span>
      )}
    </button>
  )
}

export default function Hangul() {
  const [selected, setSelected] = useState<HangulChar | null>(null)
  const { hasKoreanVoice, voicesLoading } = useSpeech()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">한글 — O Alfabeto</h1>
        <p className="text-slate-400">
          Clique em qualquer caractere para destacá-lo e ouvir a pronúncia.
        </p>
      </div>

      {!voicesLoading && !hasKoreanVoice && <NoVoiceBanner />}

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-sm text-slate-400">
        <strong className="text-slate-300">Como funciona o Hangul:</strong> Cada sílaba é escrita em blocos. Um bloco sempre começa com uma consoante (ou ㅇ silencioso) + uma vogal, e opcionalmente uma consoante final. Ex: <span className="text-white font-bold">한</span> = ㅎ + ㅏ + ㄴ
      </div>

      {/* Vogais */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">
          모음 <span className="text-slate-400 font-normal text-base">Vogais ({VOWELS.length})</span>
        </h2>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-3">
            Básicas ({BASIC_VOWELS.length})
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 overflow-visible">
            {BASIC_VOWELS.map(char => (
              <HangulCard
                key={char.char}
                char={char}
                selected={selected?.char === char.char}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-3">
            Compostas / 이중모음 ({COMPOUND_VOWELS.length})
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 overflow-visible">
            {COMPOUND_VOWELS.map(char => (
              <HangulCard
                key={char.char}
                char={char}
                selected={selected?.char === char.char}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Consoantes */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">
          자음 <span className="text-slate-400 font-normal text-base">Consoantes ({CONSONANTS.length})</span>
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 overflow-visible">
          {CONSONANTS.map(char => (
            <HangulCard
              key={char.char}
              char={char}
              selected={selected?.char === char.char}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
