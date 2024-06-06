import React, { useState, useEffect } from 'react';
import styles from './AddWordPage.module.css';
import AddWordService, { Category } from './api/AddWordServise';
import placeholderImage from '../../assets/images/photo.png';
import useStore from '../../state/useStore';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import BackArrow from '../../UI/BackArrow/BackArrow';
import Dropdown, { DropdownEelement } from '../../UI/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const AddWordPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [word, setWord] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    
    const { userId } = useStore();
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [genImage,setGenImage] = useState<string>('');
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchCategoriesFromAPI() {
            try {
                const response = await AddWordService.fetchCategories(userId || 0);
                if (response.status === 200) {
                    setCategories(response.data.data);
                    console.log('Categories loaded:', response.data.data);
                } else {
                    console.error('Failed to fetch categories. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategoriesFromAPI();
    }, [userId]);
    
    const getImage = async() =>{
        if(word.trim() == ''){
            alert('Заповніть поле слова')
            return;
        }
        const {data} = await AddWordService.genetateImage(word)
        setGenImage(data)
        
     
    }

    const handleAddWord = async () => {
        if (word && translation && selectedCategoryId !== null) {
            try {
                const image = genImage.trim() !== '' ? genImage: 'null'; // хардкод. При отправке пустой стркои прилетает ошибка. Привет бекендерам
                await AddWordService.addWord(word, translation, selectedCategoryId, image);
           
                alert('Слово успішно додано!');
                navigate('/')
            } catch (error) {
                console.error('Помилка при додаванні слова:', error);
                alert('Помилка при додаванні слова.');
            }
        } else {
            alert('Будь ласка, заповніть усі поля.');
        }
    };
    // helpers
    const convertCategoriesToDropdownElements = (categories: Category[]): DropdownEelement[] => {
        return categories.map(category => ({
            name: category.categoryName,
            value: category.categoryId,
        }));
    };
    return (
        <div className={styles.main}>
            <BackArrow className={styles.arrow} />
            <div className={styles.leftRow}>
                <Dropdown 
                className={styles.dropDown} options = {convertCategoriesToDropdownElements(categories)} 
                value = {selectedCategoryId} setValue = {setSelectedCategoryId} 
                text ={'Вибрати категорію'} />
                <div className={styles.inputs}>
                    <MyInput className={styles.input} setValue={setWord} value={word} placeholder={'Слово англійською'} />
                    <MyInput className={styles.input} setValue={setTranslation} value={translation} placeholder={'Переклад'} />

                </div>
                <MyButton className={styles.button} onClick={handleAddWord} >
                    Додати
                </MyButton>
            </div>
            <div className={styles.imageRow}>
                <div className={styles.iamgeWraper}>
                    <img src={genImage.trim() !== ''? genImage: placeholderImage} alt="Зображення" className={`${genImage.trim() !== ''?styles.genImage: ''}`}
                    />
                </div>
                <MyButton className={styles.button} onClick={getImage}>
                    Згенерувати 
                </MyButton>
            </div>
        </div>
    );
};

export default AddWordPage;