import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hangul from './pages/Hangul'
import Vocabulary from './pages/Vocabulary'
import Flashcards from './pages/Flashcards'
import Lessons from './pages/Lessons'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
