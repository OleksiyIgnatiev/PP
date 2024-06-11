
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import useStore from '../../state/useStore';
import commentIcon from '../../assets/images/Component 13.png'
import eyeIcon from '../../assets/images/image 47.png'
import openEyeIcon from '../../assets/images/image 46.png'
import blockIcon from '../../assets/images/Component 6.png'
import editIcon from '../../assets/images/image 10 (1).png'
import deleteIcon from '../../assets/images/image 11 (1).png'

import { AccountUser, AdminPanelService } from './api/AdminPanelService';
import { MainServise } from '../../api/MainServise';
import { RouteNames } from '../../app/router';

const AdminPanel: React.FC = () => {
  const [adminEmail, setAdminEmail] = useState<string>('');
  const [users, setUsers] = useState<AccountUser[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  const { userId, logout } = useStore()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await AdminPanelService.getAllUsers()
      console.log(data)
      setUsers(data.data)
      if (userId !== 0) {
        const userData = await MainServise.getUserInfo(Number(userId))
        setAdminEmail(userData.data.data.email)
      }


    }
    fetch();
  }, [])




  const handleDeleteUser = (userId: number) => {
  // eslint-disable-next-line no-restricted-globals
  const userConfirmed = confirm(`Ви впеснені, що хочете видалити коистувача з ід ${userId}?`);
  if(userConfirmed) AdminPanelService.deleteUser(userId);
  setUsers(users.filter(user => user.userId !== userId) )
  }

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  return (
    <div className={styles.adminPanel}>
      <div className={styles.header}>
        <button className={styles.logoutButton} onClick={logout}>Вийти</button>
        <span className={styles.adminEmail}>{adminEmail}</span>
      </div>
      <table className={styles.userTable}>
        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className={styles.passwordRow}>Password <img className={styles.eyeIcon} onClick={() => setIsShowPassword(prev => !prev)} src={isShowPassword ? openEyeIcon : eyeIcon} alt="" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{isShowPassword ? user.password : '****************'}</td>
              <td className={styles.buttonRow}>
                <img className = {styles.actionIcon} onClick={()=>navigate(`/notice-violation/${user.userId}`)} src={commentIcon} alt="" />
                <img className = {styles.actionIcon} onClick={()=>navigate(`/edit-user/${user.userId}`)} src={editIcon} alt="" />
                <img className = {styles.actionIcon} onClick={()=> handleDeleteUser(user.userId)} src={deleteIcon} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;