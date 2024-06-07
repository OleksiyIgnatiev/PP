import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './NoticeViolation.module.css';

interface LocationState {
  adminEmail: string;
  userEmail: string;
  message: string;
}

const NoticeViolation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [adminEmail, setAdminEmail] = useState(state?.adminEmail || '');
  const [userEmail, setUserEmail] = useState(state?.userEmail || '');
  const [message, setMessage] = useState(state?.message || '');

  const handleSend = () => {
    
    console.log('Сповіщення відправлено користувачу!');
    navigate('/admin-panel'); 
  };

  return (
    <div className={styles.noticeViolationPage}>
      <input
        type="text"
        className={styles.inputBox}
        placeholder="Введіть email користувача"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <div className={styles.emailBox}>
        <p className={styles.adminEmail}>{adminEmail}</p>
      </div>
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

