import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditUserPage.module.css';
import { EditUserService } from './api/EditUserService';
import useStore from '../../state/useStore';

const EditUserPage: React.FC = () => {
  const [username, setUsername] = useState('sdsdsd');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {userId} = useParams();
  
  useEffect(() => {
    const fetch = async() =>{
      const {data} = await EditUserService.getUserInfo(Number(userId))
      console.log(data.data)
      setUsername(data.data.username)
      setEmail(data.data.email)
    }
    fetch()
  }, [userId]);

  const handleSaveChanges = async() => {
    await EditUserService.changeUserInfo(Number(userId),username,email,password)
    navigate('/account')
  };

  return (
    <div className={styles.editUserPage}>
      <h2>Зміни параметрів користувача</h2>
      <div className={styles.formGroup}>
        <label htmlFor="username">Ім'я користувача</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Електронна пошта</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Пароль</label>
        <input 
          type="text" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleSaveChanges}>Зберегти зміни</button>
    </div>
  );
};

export default EditUserPage;