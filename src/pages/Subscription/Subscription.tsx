
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Subscription.module.css';

const Subscription: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Логіка для виходу
    navigate('/login'); // Перенаправлення на сторінку входу
  };

  const handleSubscribe = () => {
    // Логіка для підписки
    console.log('Підписка оформлена!');
  };

  return (
    <div className={styles.subscriptionPage}>
      <button className={styles.logoutButton} onClick={handleLogout}>Вихід</button>
      
          
       
      <div className={styles.plansContainer}>
        <div className={styles.plan}>
          <p>Щомісяця</p>
          <p className={styles.priceLabel}>200 грн</p>
        </div>
       
        <div className={`${styles.plan} ${styles.popular}`}>
          <p className={styles.popularLabel}>Найпопулярніший!</p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p>Щорічно</p>
          <p>Необмежений досвід</p>
          <p>Необмежена кількість мов</p>
          <p>Відсутність реклами</p>
          <p className={styles.priceLabel}>75 грн/місяць</p>
          <p className={styles.priceLabel}>900,00 грн</p>
          <button className={styles.subscribeButton} onClick={handleSubscribe}>Підписатися</button>
        </div>
        <div className={styles.plan}>
          <p>Сім'я</p>
          <p className={styles.priceLabel}>100 грн/місяць</p>
          <p className={styles.priceLabel}>до 6 осіб</p>
          <p className={styles.priceLabel}>1200,00 грн</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;