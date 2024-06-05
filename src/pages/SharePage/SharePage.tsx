import React from 'react';
import styles from './SharePage.module.css';
import ColorizedText from './ColorizedText';
import image16 from '../../assets/images/image16.jpg';
import image17 from '../../assets/images/image17.png';
import image18 from '../../assets/images/image18.png';
import image19 from '../../assets/images/image19.png';
import image20 from '../../assets/images/image20.png';
import image21 from '../../assets/images/image21.png';

const SharePage: React.FC = () => {
  // Стилі для зображень
  const image16Style: React.CSSProperties = {
    backgroundImage: `url(${image16})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  const image17Style: React.CSSProperties = {
    backgroundImage: `url(${image17})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  const image18Style: React.CSSProperties = {
    backgroundImage: `url(${image18})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  const image19Style: React.CSSProperties = {
    backgroundImage: `url(${image19})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  const image20Style: React.CSSProperties = {
    backgroundImage: `url(${image20})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  const image21Style: React.CSSProperties = {
    backgroundImage: `url(${image21})`,
    backgroundSize: 'cover',
    borderRadius: '105.5px',
  };

  return (
    <div className={styles['share-preview']}>
      <div className={styles['background']}></div>
      <div className={styles['user-avatar']}></div>
      <div className={styles['fireworks']}></div>
      <div className={styles['card']}>
        <div
          className={styles['image-16']}
          style={image16Style}
        ></div>
        <div
          className={styles['image-17']}
          style={image17Style}
        ></div>
        <div
          className={styles['image-18']}
          style={image18Style}
        ></div>
        <div
          className={styles['image-19']}
          style={image19Style}
        ></div>
        <div
          className={styles['image-20']}
          style={image20Style}
        ></div>
        <div
          className={styles['image-21']}
          style={image21Style}
        ></div>
        <div className={styles['text']}>
          <p>10</p>
          <p>Днів у ударному режимі!</p>
          <ColorizedText text="Я, ім'я користувача, навчаюсь з SmartVocab вже (кількість днів) підряд!" />
        </div>
      </div>
      <div className={styles['share-button']}>
        <div className={styles['rectangle-15']}></div>
        <p className={styles['share-text']}>Поділитися</p>
      </div>
    </div>
  );
};

export default SharePage;
