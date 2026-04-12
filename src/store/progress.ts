// Simple spaced repetition based on SM-2 lite
export interface CardProgress {
  id: string
  easeFactor: number   // starts at 2.5
  interval: number     // days until next review
  repetitions: number
  nextReview: number   // timestamp
  lastRating?: number
}

export interface ProgressStore {
  cards: Record<string, CardProgress>
  completedLessons: string[]
}

const STORAGE_KEY = 'k-train-progress'

export function loadProgress(): ProgressStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { cards: {}, completedLessons: [] }
}

export function saveProgress(store: ProgressStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

// Rating: 0=errei, 1=difícil, 2=ok, 3=fácil
export function updateCardProgress(
  store: ProgressStore,
  id: string,
  rating: 0 | 1 | 2 | 3
): ProgressStore {
  const now = Date.now()
  const card: CardProgress = store.cards[id] ?? {
    id,
    easeFactor: 2.5,
    interval: 1,
    repetitions: 0,
    nextReview: now,
  }

  let { easeFactor, interval, repetitions } = card

  if (rating < 2) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easeFactor)
    repetitions += 1
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02))

  const updated: CardProgress = {
    id,
    easeFactor,
    interval,
    repetitions,
    nextReview: now + interval * 24 * 60 * 60 * 1000,
    lastRating: rating,
  }

  const newStore = {
    ...store,
    cards: { ...store.cards, [id]: updated },
  }
  saveProgress(newStore)
  return newStore
}

export function isDue(card: CardProgress): boolean {
  return Date.now() >= card.nextReview
}

export function getCardProgress(store: ProgressStore, id: string): CardProgress | null {
  return store.cards[id] ?? null
}
