import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './NoticeViolation.module.css';
import { MainServise } from '../../api/MainServise';
import { NoteService } from './api/NoteService';

interface LocationState {
  adminEmail: string;
  userEmail: string;
  message: string;
}

const NoticeViolation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [adminEmail, setAdminEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const { id } = useParams()


  useEffect(() => {
    const fetch = async () => {
      const { data } = await MainServise.getUserInfo(Number(id))

      setAdminEmail(String(data.data.email))
    }

    fetch()
  }, [id])

  const handleSend = async () => {
    try{
      await NoteService.sendMessage({
        user_id: Number(userEmail),
        admin_id: Number(id),
        message: message
      })
      navigate('/admin-panel');
    }catch(e){
      alert('Помилка під час відпоавлення');
      console.log(e)
    }

  };

  return (
    <div className={styles.noticeViolationPage}>
      <div className={styles.emailBox}>
        <p className={styles.adminEmail}>{adminEmail}</p>
      </div>
      <input
        type="text"
        className={styles.inputBox}
        placeholder="Введіть id користувача"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <textarea
        className={styles.noticeBox}
        placeholder="Введіть повідомлення"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.sendButton} onClick={handleSend}>Відправити</button>
    </div>
  );
};

export default NoticeViolation;

