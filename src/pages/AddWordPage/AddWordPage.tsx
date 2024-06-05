import React, { useState, useEffect } from 'react';
import styles from './AddWordPage.module.css';
import { fetchCategories } from './api/AddWordServise';
import placeholderImage from '../../assets/images/photo.png'; // Імпорт зображення

const AddWordPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);
    const [word, setWord] = useState<string>('');
    const [transcription, setTranscription] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [image, setImage] = useState<string>(placeholderImage); // Додаємо стан для зображення

    useEffect(() => {
        async function fetchCategoriesFromAPI() {
            const categories = await fetchCategories();
            setCategories(categories);
        }

        fetchCategoriesFromAPI();
    }, []);

    const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedItem(event.target.value);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleTranscriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTranscription(event.target.value);
    };

    const handleTranslationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTranslation(event.target.value);
    };

    const handleAddWord = () => {
        // Додати логіку для додавання слова
    };
    const [imageSize, setImageSize] = useState<{ width: number; height: number }>({ width: 850, height: 390 });

    const handleUploadPhotoClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    };
    
    
    

    return (
        <div className={styles.container}>
            <div className={styles.selectWrapper}>
                <select
                    className={`${styles.select} ${isDropdownOpen ? styles.open : ''}`}
                    value={selectedItem}
                    onChange={handleSelectItem}
                    onClick={toggleDropdown}
                >
                    <option value="" disabled={!isDropdownOpen}>Виберіть категорію</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <svg
                    className={`${styles.arrowIcon} ${isDropdownOpen ? styles.rotated : ''}`}
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                    value={transcription}
                    onChange={handleTranscriptionChange}
                    placeholder="Транскрипція"
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
                        <img src={image} alt="Зображення" className={styles.uploadPhotoImage} style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }} />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AddWordPage;
