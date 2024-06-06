import React, { useState, useEffect } from 'react';
import styles from './AddWordPage.module.css';
import AddWordService, { Category } from './api/AddWordServise';
import placeholderImage from '../../assets/images/photo.png';
import useStore from '../../state/useStore';

const AddWordPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [word, setWord] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [image, setImage] = useState<string>(placeholderImage);
    const { userId } = useStore();
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

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

    const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(event.target.value, 10);
        setSelectedItem(isNaN(selectedValue) ? null : selectedValue);
        setSelectedCategoryId(selectedValue); // Оновлюємо вибрану категорію
    };
    

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    

    const handleTranslationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTranslation(event.target.value);
    };

    const handleAddWord = async () => {
        if (word && translation && selectedCategoryId !== null) {
            try {
                const response = await AddWordService.addWord(word, translation, selectedCategoryId, image);
                console.log('Слово успішно додано:', response.data);
                alert('Слово успішно додано!');
                setWord('');
                setTranslation('');
                setSelectedCategoryId(null);
                setImage('');
            } catch (error) {
                console.error('Помилка при додаванні слова:', error);
                alert('Помилка при додаванні слова.');
            }
        } else {
            alert('Будь ласка, заповніть усі поля.');
        }
    };
    
    const [imageSize, setImageSize] = useState<{ width: number; height: number }>({ width: 850, height: 390 });

    const handleUploadPhotoClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Отримати перший файл з вибраних
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // Функція, яка виконається після завантаження файлу
                const imageDataUrl = reader.result as string; // Отримати URL зображення
                setImage(imageDataUrl); // Встановити URL як частину стану зображення
            };
            reader.readAsDataURL(file); // Зчитати файл як Data URL
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.selectWrapper}>
                <select
                    className={`${styles.select} ${isDropdownOpen ? styles.open : ''}`}
                    value={selectedItem ?? ''}
                    onChange={handleSelectItem}
                >
                    <option value="" disabled>Виберіть категорію</option>
                    {categories.map(category => (
                        <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                    ))}
                </select>

                <svg
                    className={`${styles.arrowIcon} ${isDropdownOpen ? styles.rotated : ''}`}
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={toggleDropdown}
                >
                    <path d="M2 2L21 22L40 2" stroke="#BBBBBB" strokeWidth="4" />
                </svg>
            </div>

            <div className={styles.inputs}>
                <input
                    type="text"
                    className={styles.input}
                    value={word}
                    onChange={handleWordChange}
                    placeholder="Слово англійською"
                />
                <input
                    type="text"
                    className={styles.input}
                    value={translation}
                    onChange={handleTranslationChange}
                    placeholder="Переклад"
                />
                <button className={styles.addButton} onClick={handleAddWord}>Додати</button>

                <div className={styles.uploadPhotoContainer}>
                    <label className={styles.uploadPhotoButton}>
                        <input type="file" className={styles.uploadPhotoInput} onChange={handleUploadPhotoClick} />
                        <img src={image} alt="Зображення" className={styles.uploadPhotoImage} 
                             style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }} />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AddWordPage;