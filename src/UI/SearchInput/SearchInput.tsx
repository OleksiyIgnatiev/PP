import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import searchImage from '../../assets/images/search.png';

interface SearchInputProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  className:string
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch, ...props}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchForm} ${props.className}`}>
        <img src={searchImage} alt="Пошук" title="Шукати" className={styles.searchIcon} />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.input}
        />
    </form>
  );
};

export default SearchInput;
