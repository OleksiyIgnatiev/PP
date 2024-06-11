import React, { FC, useRef } from 'react'
import { Word } from '../../../../pages/CategoryPage/models/Word';
import style from './WordCard.module.css';
import card_icon from '../../../../assets/images/card_icon.png'
import CardIcon from '../CardIcon/CardIcon';
import { WordsService } from '../../api/WordsService';
interface Props {
  wordData: Word,
  getNewWord: ()=> void,
  handleRealizedWord: (id: number) => void
}
const WordCard: FC<Props> = ({ wordData,getNewWord ,handleRealizedWord}) => {
  const blockRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!blockRef.current) return;

    const block = blockRef.current as HTMLDivElement; // Утверждение типа
    const rect = block.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const blockWidth = rect.width;

    if (clickX < blockWidth / 2) {

      console.log('Left side clicked');
      getNewWord()
    } else {
      handleRealizedWord(wordData.wordId);
      getNewWord()
      console.log('Right side clicked');
    }
  };

  return (
    <div className={style.card}   ref={blockRef}
    onClick={handleClick}>
      <div className={style.topBlock}>
        <div className={style.turnBlock}>
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82842 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768155 14.0948 0.0768155 13.3137 0.857864L0.585785 13.5858ZM32 13L2 13L2 17L32 17L32 13Z" fill="#D14F4F" />
          </svg>
          <div className={style.turnBlockText} style={{ color: '#D14F4F' }}>Якщо ти не знав проведи картку ліворуч </div>

        </div>
        <CardIcon imgLink={wordData?.imgLink} className={style.cardIcon} fallbackImgLink={card_icon} />
        <div className={style.turnBlock}>
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.4142 16.4142C32.1953 15.6332 32.1953 14.3668 31.4142 13.5858L18.6863 0.857864C17.9052 0.0768156 16.6389 0.0768156 15.8579 0.857864C15.0768 1.63891 15.0768 2.90524 15.8579 3.68629L27.1716 15L15.8579 26.3137C15.0768 27.0948 15.0768 28.3611 15.8579 29.1421C16.6389 29.9232 17.9052 29.9232 18.6863 29.1421L31.4142 16.4142ZM0 17L30 17V13L0 13L0 17Z" fill="#5ED486" />
          </svg>
          <div className={style.turnBlockText} style={{ color: '#5ED486' }}>Якщо ти це знав проведи праворуч</div>
        </div>
      </div>
 
      <div className={style.wordRow}>
        <div className={style.word}>{wordData?.name}</div>
        <div className={style.wordTranslation}>{wordData?.translation}</div>
      </div>
    </div>
  )
}

export default WordCard
