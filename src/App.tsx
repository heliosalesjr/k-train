import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hangul from './pages/Hangul'
import Vocabulary from './pages/Vocabulary'
import Flashcards from './pages/Flashcards'
import Lessons from './pages/Lessons'
import Quiz from './pages/Quiz'
import QuizVowels from './pages/QuizVowels'
import QuizWords from './pages/QuizWords'
import QuizEmoji from './pages/QuizEmoji'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hangul" element={<Hangul />} />
          <Route path="vocab" element={<Vocabulary />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/vogais" element={<QuizVowels />} />
          <Route path="quiz/palavras" element={<QuizWords />} />
          <Route path="quiz/emoji" element={<QuizEmoji />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
