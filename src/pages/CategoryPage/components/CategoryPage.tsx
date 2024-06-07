import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackArrow from '../../../UI/BackArrow/BackArrow';
import WhiteFlutterBlock from '../../../UI/WhiteFlutterBlock/WhiteFlutterBlock';
import style from './CategoryPage.module.css'
import MyImage from '../../../UI/MyImage/MyImage';

import clockIcon from '../../../assets/images/clock-icon.png'
import Icon2 from '../../../assets/images/image 9.png'
import Icon3 from '../../../assets/images/image 11.png'
import Icon4 from '../../../assets/images/image 10.png'
import CategoryPageService from '../api/CategoryPageService';
import { Word } from '../models/Word';
import { getWordTypeText } from '../helpers/wordRep';
import AddCategoryForm from '../../../components/CategoriesPage/AddCategoryForm';
const CategoryPage = () => {
  const { categoryId } = useParams();
  const [words, setWords] = useState<Word[]>([]);
  const navigate = useNavigate();
  const fetchWords = async () => {
    const { data } = await CategoryPageService.getWords(Number(categoryId))
    setWords(data.data)

  }
  useEffect(() => {
    fetchWords()
  }, [])
  const resetProgres = async() => {
    await CategoryPageService.resetProgres(Number(categoryId));
   await  fetchWords()
  }
  const clearCategory = async () => {
    await CategoryPageService.clearCategory(Number(categoryId));
    await fetchWords()
  }
  const deleteCategory = async () =>{
    await CategoryPageService.deleteCategory(Number(categoryId));
    navigate('/categories');
  }
  const [isEditOpen,setIsEditOpen] = useState<boolean>(false)
  return (
    <div className={style.page}>
      <BackArrow />
      {
        isEditOpen&&
        <AddCategoryForm onCloseForm = {() =>setIsEditOpen(false)} isEdit={Number(categoryId)}/>
      }
      {categoryId}
      <div className={style.topRow}>
        <WhiteFlutterBlock className={style.actionElement} onClick={resetProgres} >
          <MyImage src={clockIcon} alt='clockIcon' className={style.actionElementIcon} />
          Скинути прогрес
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.actionElement} onClick={()=>setIsEditOpen(true)} >
          <MyImage src={Icon2} alt='Icon2' className={style.actionElementIcon} height={51} width={36} />
          Редагувати категорію
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.actionElement} onClick={clearCategory} >
          <MyImage src={Icon3} alt='Icon3' className={style.actionElementIcon} height={36} width={39} />
          Очистити категорію
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.actionElement} onClick={deleteCategory} >
          <MyImage src={Icon4} alt='Icon4' className={style.actionElementIcon} height={56} width={33} />
          Видалити категорію
        </WhiteFlutterBlock>
      </div>
      <div className={style.topRow}>
        <div className={style.subTitle}>Слова</div>
        <div className={style.wordsList}>
          {words.map(word =>
            <WhiteFlutterBlock className={style.wordItem} onClick={resetProgres} >
              <svg width="10" height="100%" viewBox="0 0 10 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.61377 4.64551C0.61377 2.07986 2.69364 0 5.25928 0C7.82492 0 9.90479 2.07986 9.90479 4.64551V90.3545C9.90479 92.9201 7.82492 95 5.25928 95C2.69364 95 0.61377 92.9201 0.61377 90.3545V4.64551Z" 
                fill={getWordTypeText(word.repetitionNum).color} />
              </svg>
              <div className={style.wordItemRow}>
                <div className={style.wordItemSubText}>{getWordTypeText(word.repetitionNum).text}</div>
                <div className={style.wordItemWord}>{word.name}</div>
                <div className={style.wordItemTranslation}>{word.translation}</div>
              </div>
            </WhiteFlutterBlock>

          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
