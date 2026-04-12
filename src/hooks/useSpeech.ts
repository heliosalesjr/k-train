import { useCallback, useEffect, useState } from 'react'

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(resolve => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices)
      return
    }
    const handler = () => {
      resolve(window.speechSynthesis.getVoices())
      window.speechSynthesis.removeEventListener('voiceschanged', handler)
    }
    window.speechSynthesis.addEventListener('voiceschanged', handler)
    // fallback after 2s caso o evento nunca dispare
    setTimeout(() => resolve(window.speechSynthesis.getVoices()), 2000)
  })
}

export type SpeechStatus = 'idle' | 'speaking' | 'no-voice'

export function useSpeech() {
  const isSupported = 'speechSynthesis' in window
  const [koreanVoice, setKoreanVoice] = useState<SpeechSynthesisVoice | null | undefined>(undefined)
  // undefined = ainda carregando, null = não encontrou, voice = encontrou

  useEffect(() => {
    if (!isSupported) return
    loadVoices().then(voices => {
      const voice =
        voices.find(v => v.lang === 'ko-KR') ??
        voices.find(v => v.lang.startsWith('ko')) ??
        null
      setKoreanVoice(voice)
    })
  }, [isSupported])

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) return
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ko-KR'
      utterance.rate = 0.85
      if (koreanVoice) utterance.voice = koreanVoice
      window.speechSynthesis.speak(utterance)
    },
    [isSupported, koreanVoice]
  )

  const hasKoreanVoice = koreanVoice !== null && koreanVoice !== undefined
  const voicesLoading = koreanVoice === undefined

  return { speak, isSupported, hasKoreanVoice, voicesLoading }
}
