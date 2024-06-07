import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../../../UI/Logo/Logo';
import ThemeSwitcher from '../../../UI/ThemeSwitcher/ThemeSwitcher';
import style from './SelectCategoriesPage.module.css'
import WhiteFlutterBlock from '../../../UI/WhiteFlutterBlock/WhiteFlutterBlock';
import SelectCategoriesService from '../api/SelectCategoriesService';
import useStore from '../../../state/useStore';
import { Category } from '../../CategoriesPage/api/CategoriesPageServise';
import Text from '../../../UI/Text/Text';
import CheckBox from '../../../UI/CheckBox/CheckBox';
import MyButton from '../../../UI/MyButton/MyButton';
import { RouteNames } from '../../../app/router';
const SelectCategoriesPage = () => {
    const {type} = useParams();
    const [categories,setCategories] = useState<Category[]>([]);
    const {userId} = useStore();
    const [selectedCategories,setSelectedCategories] = useState<number[]>([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetch = async () =>{
            const {data} = await SelectCategoriesService.getCategories(Number(userId));
            setCategories(data.data)
        }
        fetch()
    },[])
    const handleAddCategorie = (id:number,isChecked:boolean) =>{
        if (isChecked) {
            setSelectedCategories(prev => [...prev, id]);
        } else {
            setSelectedCategories(prev => prev.filter(categoryId => categoryId !== id));
        }

    }
    const handleSubmit = () =>{
        if(selectedCategories.length <=0){
            alert('Оберіть хочаб одну категорію')
            return;
        }
       
        if(type == 'repeat'){
            localStorage.setItem('repeat',JSON.stringify(selectedCategories))
            console.log('repeatrepeatrepeatrepeat')
            navigate(RouteNames.REPEAT_WORDS)
        }else{
            localStorage.setItem('learn',JSON.stringify(selectedCategories))
            navigate(RouteNames.LEARN_WORDS)
        }
        
    }
  return (
    <div className={style.page}>
        <Logo/>
        <ThemeSwitcher/>
        <div className={style.header}>
            <Text className={style.title}>Виберіть категорію</Text>
            <MyButton onClick={handleSubmit} className={style.button}>
               {type == 'repeat'? 'Повторювати': 'Вчити'} 
            </MyButton>
        </div>
  
        <div className={style.categoriesList}>
            {categories.map(categorie =>
                <WhiteFlutterBlock className={style.categorie} onClick={()=>{}}>
                <div className={style.categorieName}>{categorie.categoryName}</div>
                <div className={style.categorieLength}>{categorie.categoryLength} слова</div>
                <CheckBox setIsChecked={(value:boolean) => {handleAddCategorie(categorie.categoryId,value )}} text=''/>
            </WhiteFlutterBlock>
            )}
           
        </div>
    </div>
  )
}

export default SelectCategoriesPage
