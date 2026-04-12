import { useCallback } from 'react'

export function useSpeech() {
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ko-KR'
    utterance.rate = 0.85
    window.speechSynthesis.speak(utterance)
  }, [])

  const isSupported = 'speechSynthesis' in window

  return { speak, isSupported }
}
