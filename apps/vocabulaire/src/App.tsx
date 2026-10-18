import { useState } from 'react'
import { Home } from './pages/Home'
import { SessionPage } from './pages/SessionPage'
import { ThemePage } from './pages/ThemePage'
import type { Route } from './types'

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' })

  if (route.name === 'theme') {
    return (
      <ThemePage
        id={route.id}
        onBack={() => setRoute({ name: 'home' })}
        onStart={(config) => setRoute({ name: 'session', config })}
      />
    )
  }

  if (route.name === 'session') {
    return (
      <SessionPage
        config={route.config}
        onExit={() => setRoute({ name: 'theme', id: route.config.themeId })}
      />
    )
  }

  return <Home onOpenTheme={(id) => setRoute({ name: 'theme', id })} />
}
