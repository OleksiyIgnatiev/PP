
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';

const AdminPanel: React.FC = () => {
  const [adminEmail, setAdminEmail] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Отримання пошти адміністратора (макет отримання даних)
    setAdminEmail('admin@example.com');
    
    // Отримання користувачів
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Виникла помилка при отриманні користувачів!', error);
      });
  }, []);

  const handleLogout = () => {
    // Логіка виходу
    navigate('/login');
  };

  const handleDeleteUser = (userId: number) => {
    // Логіка видалення користувача
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.id !== userId));
          setShowDeleteConfirm(false);
          setUserToDelete(null);
        } else {
          console.error('Виникла помилка при видаленні користувача!');
        }
      })
      .catch(error => {
        console.error('Виникла помилка при видаленні користувача!', error);
      });
  };

  const handleEditUser = (userId: number) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleNoticeViolation = (userId: number) => {
    navigate(`/notice-violation/${userId}`);
  };

  const openDeleteConfirm = (userId: number) => {
    setUserToDelete(userId);
    setShowDeleteConfirm(true);
  };

  const closeDeleteConfirm = () => {
    setUserToDelete(null);
    setShowDeleteConfirm(false);
  };

  return (
    <div className={styles.adminPanel}>
      <div className={styles.header}>
        <button className={styles.logoutButton} onClick={handleLogout}>Вийти</button>
        <span className={styles.adminEmail}>{adminEmail}</span>
      </div>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Редагувати</button>
                <button onClick={() => handleNoticeViolation(user.id)}>Повідомлення</button>
                <button onClick={() => openDeleteConfirm(user.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeDeleteConfirm}>✖</button>
            <p>Ви впевнені, що хочете видалити користувача?</p>
            <button
              className={styles.confirmDeleteButton}
              onClick={() => userToDelete !== null && handleDeleteUser(userToDelete)}
            >
              Видалити користувача
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;