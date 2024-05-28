import React, { useEffect } from 'react'
import AuthGuard from './app/components/AuthGuard'
import AppRouter from './app/router/AppRouter'
import './App.css';
import useStore from './state/useStore';
const App = () => {
  const {theme,loginState} = useStore();
  const {role} = useStore();
  console.log(role)
  useEffect(()=>{
      const role = localStorage.getItem('role')
      const userId = localStorage.getItem('userId')
      if(role?.trim() !== '' && userId?.trim() !== '' ){
        loginState(Number(userId),String(role))
      }

  },[])
  return (
    <div className={`app ${theme}Theme`} style ={{backgroundColor: theme}}>
  
    <AuthGuard>
        <AppRouter />
    </AuthGuard>
    </div>
  )
}

export default App
