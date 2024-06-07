import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import SearchInput from '../../UI/SearchInput/SearchInput';
import AddCategoryForm from '../../components/CategoriesPage/AddCategoryForm';
import CategoryService, { Category } from './api/CategoriesPageServise';
import useStore from '../../state/useStore';

const CategoriesPage: React.FC = () => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [wordCount, setWordCount] = useState(0);
    const { userId } = useStore();

    useEffect(() => {
        async function fetchCategoriesFromAPI() {
            try {
                const response = await CategoryService.fetchCategories(userId || 0);
                if (response.status === 200) {
                    setCategories(response.data.data);
                    console.log('Categories loaded:', response.data);
                } else {
                    console.error('Failed to fetch categories. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

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
            setCategories([...categories, response.data]);
        } catch (error) {
            console.error('Помилка при створенні категорії:', error);
        }
    };

    const handleCloseForm = () => {
        setShowAddCategory(false);
    };
    const navigate = useNavigate()
    return (
        <div className={styles.categoriesPage}>
            <div className={styles.header}>
                <h1>Словник</h1>
                <SearchInput placeholder="Пошук" onSearch={() => {}} />
            </div>

            <div className={styles.buttonsSection}>
                <button
                    className={styles.addCategoryButton}
                    title="Додати категорію"
                    onClick={() => setShowAddCategory(true)}
                >
                    Додати категорію
                </button>
                <Link to="/own-words" className={styles.ownWordsButton}>
                    Власні слова
                </Link>
            </div>

            <div className={styles.wordCountSection}>
                <div className={styles.totalWordCount}>{wordCount} слова</div>
                <div className={styles.percentage}>{wordCount === 0 ? '0%' : '100%'}</div>
            </div>

            {showAddCategory && (
                <>
                    <div className={`${styles.overlay} ${showAddCategory ? styles.showOverlay : ''}`}></div>
                    <AddCategoryForm onAddCategory={handleAddCategory} onCloseForm={handleCloseForm} />
                </>
            )}

            <div className={styles.categoryList}>
                {categories.map((category, index) => (
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
