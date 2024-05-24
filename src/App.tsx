import React from 'react'
import AuthGuard from './app/components/AuthGuard'
import AppRouter from './app/router/AppRouter'

const App = () => {
  return (
    <AuthGuard>
        <AppRouter />
    </AuthGuard>
  )
}

export default App
