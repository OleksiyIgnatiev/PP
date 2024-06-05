import { useEffect, useState } from 'react'
import style from './Login.module.css'
import LoginService from './api/UsersService'
import ThemeSwitcher from '../../UI/ThemeSwitcher/ThemeSwitcher'
import MyInput from '../../UI/MyInput/MyInput'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../../UI/MyButton/MyButton'
import { RouteNames } from '../../app/router'
import useStore from '../../state/useStore'
import Logo from '../../UI/Logo/Logo'
import Text from '../../UI/Text/Text'
import axios from 'axios'
const LoginPage = () => {
  const { theme, loginState } = useStore();
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const loginFacebook = () => {

  }
  const loginGoogle = async () => {
    await LoginService.loginGoogle();
  }
  const validate = (): boolean => {
    if (name.trim() !== '' && password.trim() !== '') {
      return true;
    }
    alert('Заповніть усі поля')
    return false;

  }
  const login = async () => {
    try {
      if (validate()) {
        const {data} = await LoginService.login(name, password);
        console.log(data) 
        loginState(data.data.userId, data.data.role);
        navigate(RouteNames.MAIN_USER);
      }

    } catch (e) {
      alert(e);
    }

  }


  return (
    <div className={`${style.loginPage} ${theme == 'black' ? style.blackTheme : ''}`}>
      <Logo />
      <ThemeSwitcher />
      <div className={style.title}>вхід до акаунту</div>
      <div className={style.inputRow}>
        <MyInput className={style.input} setValue={setName} value={name} placeholder='Ім’я користувача' />

        <MyInput className={style.input} setValue={setPassword} value={password} placeholder='пароль' />
      </div>
      <div className={style.buttomRow}>
        <Link to={RouteNames.FORGOT_PASSWORD} className={style.text}>
          <Text>
            забули пароль ?
          </Text>

        </Link>
      
      </div>
      <div className={style.buttomRow}>
        <MyButton onClick={loginFacebook} className={`${style.button} ${style.facebook}`}>
          <svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
            <rect x="0.494141" width="65.1165" height="69" rx="32.5582" fill="url(#pattern0_947_2667)" />
            <defs>
              <pattern id="pattern0_947_2667" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_947_2667" transform="matrix(0.00784918 0 0 0.00740741 -0.0337445 0)" />
              </pattern>
              <image id="image0_947_2667" width="136" height="135" href="data:image/png;base64,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" />
            </defs>
          </svg>

          зайти через facebook
        </MyButton>
        <MyButton onClick={loginGoogle} className={`${style.button} ${style.google}`}>
          <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
            <rect width="48" height="50" fill="url(#pattern0_947_2665)" />
            <defs>
              <pattern id="pattern0_947_2665" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_947_2665" transform="matrix(0.0110294 0 0 0.0105882 -0.148238 -0.08)" />
              </pattern>
              <image id="image0_947_2665" width="105" height="102" href="data:image/png;base64,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" />
            </defs>
          </svg>
          зайти через google
        </MyButton>
      </div>
      <div className={style.buttomRow}>
        <MyButton onClick={login} className={`${style.button} ${style.login}`}>

          Увійти
        </MyButton>
        <MyButton onClick={() => navigate(RouteNames.REGISTRATION)} className={`${style.button}  ${style.google}`}>

          Реєстрація
        </MyButton>
      </div>
    </div>
  )
}

export default LoginPage
