import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: '홈', sublabel: 'Início' },
  { to: '/hangul', label: '한글', sublabel: 'Hangul' },
  { to: '/vocab', label: '어휘', sublabel: 'Vocabulário' },
  { to: '/flashcards', label: '복습', sublabel: 'Revisão' },
  { to: '/lessons', label: '수업', sublabel: 'Lições' },
  { to: '/quiz', label: '퀴즈', sublabel: 'Quiz' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-violet-400">K</span>
            <span className="text-slate-300 font-medium">train</span>
          </NavLink>
          <nav className="flex gap-1">
            {navItems.slice(1).map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`
                }
              >
                <span className="text-base leading-tight">{item.label}</span>
                <span className="leading-tight opacity-75">{item.sublabel}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 text-center text-xs text-slate-600 py-4">
        k-train — estude coreano do zero
      </footer>
    </div>
  )
}
