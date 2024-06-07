import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import SearchInput from '../../UI/SearchInput/SearchInput';
import AddCategoryForm from '../../components/CategoriesPage/AddCategoryForm';
import CategoryService, { Category } from './api/CategoriesPageServise';
import useStore from '../../state/useStore';
import BackArrow from '../../UI/BackArrow/BackArrow';
import MyButton from '../../UI/MyButton/MyButton';

const CategoriesPage: React.FC = () => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentCategories, setCurrentCategories] = useState<Category[]>([]);
    const [wordCount, setWordCount] = useState(0);
    const { userId } = useStore();
    async function fetchCategoriesFromAPI() {
        try {
            const response = await CategoryService.fetchCategories(userId || 0);
            if (response.status === 200) {
                setCategories(response.data.data);
                setCurrentCategories(response.data.data)
                console.log('Categories loaded:', response.data);
            } else {
                console.error('Failed to fetch categories. Status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    useEffect(() => {
        fetchCategoriesFromAPI();
    }, [userId]);

    useEffect(() => {
        const totalCount = categories.reduce((acc, category) => acc + category.categoryLength, 0);
        setWordCount(totalCount);
    }, [categories]);

    const handleAddCategory = async (newCategory: string) => {
        try {
            const response = await CategoryService.createCategory(newCategory, Number(userId));
            console.log('Категорію успішно створено:', response.data);
            //@ts-ignore
            navigate(`/categorie/${response.data.data}`)

        } catch (error) {
            console.error('Помилка при створенні категорії:', error);
        }
    };
    const handleSearch = (searchValue: string) => {
        const filteredCategories = categories.filter(category => category.categoryName.includes(searchValue));
        setCurrentCategories(filteredCategories);
    }

    const navigate = useNavigate()
    return (
        <div className={styles.categoriesPage}>
            <BackArrow className={styles.bachArrow} />
            <div className={styles.header}>
                <div className={styles.title}>Словник</div>
                <SearchInput placeholder="Пошук" onSearch={handleSearch} className={styles.searchMenu} />
                <MyButton onClick={() => setShowAddCategory(true)}
                    className={styles.addButton}
                >
                    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17" width="3.98187" height="32" fill="#232323" />
                        <rect y="17.4285" width="3.42857" height="37.1641" transform="rotate(-90 0 17.4285)" fill="#232323" />
                    </svg>

                </MyButton>

            </div>
            {showAddCategory && (
                <>
                    <div className={`${styles.overlay} ${showAddCategory ? styles.showOverlay : ''}`}></div>
                    <AddCategoryForm onAddCategory={handleAddCategory} onCloseForm={() => setShowAddCategory(false)} />
                </>
            )}

            <div className={styles.categoryList}>
                {currentCategories.map((category, index) => (
                    <button
                        className={styles.categoryButton}
                        key={index}
                        onClick={() => navigate('/categorie/' + category.categoryId)}
                    >
                        <span>{category.categoryName}</span>
                        <span className={styles.wordCount}>{category.categoryLength} слова</span>
                        <span className={styles.percentage}>
                            {category.categoryLength ? `${((category.categoryLength / wordCount) * 100).toFixed(2)}%` : '0%'}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
