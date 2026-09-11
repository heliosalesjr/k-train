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
          ? 'bg-red-700 border-red-400 text-white shadow-lg shadow-red-500/40 scale-110 z-10 px-3 py-4'
          : 'bg-stone-800 hover:bg-stone-700 border-stone-700 hover:border-red-500 px-3 py-3'
      }`}
    >
      <span className={`font-bold transition-all duration-200 ${selected ? 'text-5xl' : 'text-4xl text-white'}`}>
        {char.char}
      </span>
      <span className={`font-mono transition-all duration-200 ${selected ? 'text-sm text-red-200' : 'text-xs text-red-400'}`}>
        {char.romanization}
      </span>
      {selected && (
        <span className="text-[11px] text-red-100 text-center leading-tight mt-0.5 max-w-[120px]">
          {char.sound}
        </span>
      )}
      {selected && char.examples && char.examples[0] && (
        <span className="text-[11px] text-stone-300 font-bold mt-0.5">
          {char.examples[0].word} <span className="font-normal text-stone-400">— {char.examples[0].meaning}</span>
        </span>
      )}
      {!selected && char.group === 'compound' && (
        <span className="text-[10px] text-stone-500 leading-none">{char.composition}</span>
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
        <h1 className="text-3xl font-bold text-white mb-1">한글 — The Alphabet</h1>
        <p className="text-stone-400">
          Click any character to highlight it and hear the pronunciation.
        </p>
      </div>

      {!voicesLoading && !hasKoreanVoice && <NoVoiceBanner />}

      <div className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-4 text-sm text-stone-400">
        <strong className="text-stone-300">How Hangul works:</strong> Each syllable is written in blocks. A block always starts with a consonant (or a silent ㅇ) + a vowel, plus an optional final consonant. Ex: <span className="text-white font-bold">한</span> = ㅎ + ㅏ + ㄴ
      </div>

      {/* Vowels */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">
          모음 <span className="text-stone-400 font-normal text-base">Vowels ({VOWELS.length})</span>
        </h2>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Basic ({BASIC_VOWELS.length})
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
          <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Compound / 이중모음 ({COMPOUND_VOWELS.length})
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

      {/* Consonants */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">
          자음 <span className="text-stone-400 font-normal text-base">Consonants ({CONSONANTS.length})</span>
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
