import React, { useState } from 'react';
import style from './RegistrationPage.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import Logo from '../../UI/Logo/Logo'
import RegistrationService from './api/RegistrationService';
import { useNavigate } from 'react-router-dom';
import Text from '../../UI/Text/Text';
import BackArrow from '../../UI/BackArrow/BackArrow';

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
  const navigate = useNavigate()
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (validate()) {
      try {
        const response = await RegistrationService.register(username, email, password);
       alert ("Ви успішно регістр")
       navigate("/login")
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };    
  
  return (
    <div className={style.registerPage}>
      <Logo />
      <Text className={style.title} type='title'>Реєстрація нового акаунту</Text>
    <BackArrow/>
      <div className={style.inputRow}>
          <MyInput
            value={username}
            setValue={handleUsernameChange}
            placeholder="ім'я користувача"
            className={style.input}
          />
          <MyInput
            value={email}
            setValue={handleEmailChange}
            placeholder="пошта"
            className={style.input}
          />
          <MyInput
            value={password}
            setValue={handlePasswordChange}
            placeholder="пароль"
            className={style.input}
          />
          </div>
        <MyButton onClick={handleSubmit} className={style.button} border>
          Зареєструватися
        </MyButton>
      
    </div>
  );
};

export default RegistrationPage;
