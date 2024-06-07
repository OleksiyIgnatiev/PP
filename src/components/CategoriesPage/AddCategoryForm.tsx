// AddCategoryForm.tsx

import React, { useState } from 'react';
import styles from './AddCategoryForm.module.css';
import CategoryPageService from './api/CategoryPageService';

interface AddCategoryFormProps {
  onAddCategory?: (categoryName: string) => void;
  onCloseForm: () => void;
  isEdit?: number
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ onAddCategory, onCloseForm,isEdit}) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== '') {
      if(isEdit){
        CategoryPageService.editCategory(Number(isEdit),newCategoryName)
      }else if(onAddCategory){
        onAddCategory(newCategoryName);
        setNewCategoryName('');
      }
      onCloseForm()
    }
  };

  return (
    <div className={styles.darkOverlay}>
      <div className={styles.group31}>
        <div className={styles.rectangle183}>
          <div className={styles.title}>Додати категорію</div>
          <button className={styles.addCategoryCloseButton} onClick={onCloseForm}>
            X
          </button>
          <div className={styles.formField}>
            <input
              id="category-input"
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className={styles.input}
              placeholder="Назва категорії"
            />
          </div>
          <button className={styles.rectangle163} onClick={handleAddCategory}>
            <div className={styles.buttonTitle}>{isEdit ? 'Змінити категорію' : 'Додати категорію'}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryForm;
