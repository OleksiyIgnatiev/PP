// CategoriesPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import SearchInput from '../../UI/SearchInput/SearchInput';
import AddCategoryForm from '../../components/CategoriesPage/AddCategoryForm';

const CategoriesPage: React.FC = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState(0); // Кількість слів

  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
  };

  const handleAddCategory = (newCategory: string) => {
    // Handle the add category logic here
    setShowAddCategory(false); // Close the add category form after adding a category
  };

  const handleCloseForm = () => {
    setShowAddCategory(false); // Встановлюємо showAddCategory в false при закритті форми
  };

  return (
    <div className={styles.categoriesPage}>
      <div className={styles.header}>
        <h1>Словник</h1>
        <SearchInput placeholder="Пошук" onSearch={handleSearch} />
      </div>
      <div className={styles.group6}>
        <div className={styles.rectangle37}></div>
        <div className={styles.group2}>
          <div className={styles.rectangle189}></div>
          <div className={styles.rectangle190}></div>
        </div>
        <button 
          className={styles.addCategoryButton} 
          title="Додати категорію" 
          onClick={() => setShowAddCategory(true)}>
          Додати категорію
        </button>
      </div>

      <div className={styles.group3}>
        <div className={styles.rectangle38}></div>
        <Link to="/own-words" className={styles.ownWordsButton}>
          Власні слова
        </Link>
        <div className={styles.wordCount}>{wordCount} слова</div> {/* Відображаємо кількість слів */}
        <div className={styles.percentage}>{wordCount === 0 ? '0%' : '100%'}</div> {/* Відображаємо відсоток */}
      </div>

      {showAddCategory && (
        <>
          <div className={styles.overlay}></div> {/* Затемнення */}
          <AddCategoryForm onAddCategory={handleAddCategory} onCloseForm={handleCloseForm} />
        </>
      )}

      <div className={styles.categoryList}>
        {filteredCategories.map((category, index) => (
          <Link to={`/categories/${index}`} key={index} className={styles.categoryLink}>
            <div className={styles.category}>{category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
