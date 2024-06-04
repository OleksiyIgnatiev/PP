import React from 'react';
import styles from './ColorizedText.module.css';

interface ColorizedTextProps {
  text: string;
}

const ColorizedText: React.FC<ColorizedTextProps> = ({ text }) => {
  // Розділити рядок на частини, використовуючи "Smart" як роздільник
  const parts = text.split('Smart');
  
  return (
    <p>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== parts.length - 1 && <span className={styles.highlight}>Smart</span>}
        </React.Fragment>
      ))}
    </p>
  );
};

export default ColorizedText;
