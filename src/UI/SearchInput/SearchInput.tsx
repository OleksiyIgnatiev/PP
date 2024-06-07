import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import searchImage from '../../assets/images/search.png';
import MyInput from '../MyInput/MyInput';

interface SearchInputProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  className: string
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch, className }) => {
  const [searchTerm, setSearchTerm] = useState('');



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchForm} ${className}`}>
      <img src={searchImage} alt="Пошук" title="Шукати" className={styles.searchIcon} />

      <MyInput
        value={searchTerm}
        setValue={(value: string) => { onSearch(value); setSearchTerm(value) }}
        placeholder={placeholder}
        className={styles.input}
      />
    </form>
  );
};

export default SearchInput;
