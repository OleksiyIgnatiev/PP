import React, { FC, useState, useEffect } from 'react';
import style from './ThemeSwitcher.module.css';
import whiteLogo from '../../assets/images/switcherWhite.png';
import blackLogo from '../../assets/images/switcherBlack.png';
import useStore from '../../state/useStore';

interface Props{
  className?:string
}

const ThemeSwitcher: FC<Props> = (props) => {
  const {  theme, setTheme } = useStore();

  const handleStateChange = () => {
    const color  = theme === 'black' ? 'white' : 'black'
    setTheme(color)
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'white' | 'black');
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);



  return (
    <div className={`${style.main} ${theme === 'white' ? style.white : style.black} ${props.className}`} onClick={handleStateChange}>
      <div className={style.switcher}>
        <img src={theme === 'white' ? whiteLogo : blackLogo} alt="switcher" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
