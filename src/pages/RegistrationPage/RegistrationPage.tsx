import React, { useState } from 'react';
import style from './RegistrationPage.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import Logo from '../../UI/Logo/Logo'
import RegistrationService from './api/RegistrationService';

const RegistrationPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = (): boolean => {
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      return true;
    }
    alert('Заповніть усі поля');
    return false;
  }

  const handleUsernameChange = (value: string) => {
    setUsername(value);
   
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (validate()) {
      try {
        const response = await RegistrationService.register(username, email, password);
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };    
  
  return (
    <div className={style.registerPage}>
      <Logo />
      <div className={style.title}>Реєстрація нового акаунту</div>
      <div className={style.inputRow}>
        <div className={style.rectangle10}>
          <MyInput
            value={username}
            setValue={handleUsernameChange}
            placeholder="ім'я користувача"
            className={style.registerInput}
          />
        </div>
        <div className={style.rectangle9}>
          <MyInput
            value={email}
            setValue={handleEmailChange}
            placeholder="пошта"
            className={style.registerInput}
          />
        </div>
        <div className={style.rectangle8}>
          <MyInput
            value={password}
            setValue={handlePasswordChange}
            placeholder="пароль"
            className={style.registerInput}
          />
        </div>
      </div>
      <div className={style.buttonRow}>
        <MyButton onClick={handleSubmit} className={style.button}>
          Зареєструватися
        </MyButton>
      </div>
    </div>
  );
};

export default RegistrationPage;
