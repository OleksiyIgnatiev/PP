import React from 'react'
import useStore from '../../state/useStore'
import ThemeSwitcher from '../../UI/ThemeSwitcher/ThemeSwitcher'

const MainUserPage = () => {
  const {logout} = useStore()
  
  return (
    <div>
      MainUserPage
      <div onClick={logout}>logout</div>
      <ThemeSwitcher/>
    </div>
  )
}

export default MainUserPage
