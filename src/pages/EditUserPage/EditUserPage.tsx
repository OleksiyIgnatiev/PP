import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditUserPage.module.css';

const EditUserPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Завантаження даних користувача
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
      })
      .catch(error => {
        console.error('Виникла помилка при завантаженні даних користувача!', error);
      });
  }, [userId]);

  const handleSaveChanges = () => {
    // Логіка збереження змін
    navigate('/admin-panel')
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
    .then(response => {
      if (response.ok) {
        navigate('/admin-panel');
      } else {
        console.error('Виникла помилка при збереженні змін!');
      }
    })
    .catch(error => {
      console.error('Виникла помилка при збереженні змін!', error);
    });
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
          type="password" 
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