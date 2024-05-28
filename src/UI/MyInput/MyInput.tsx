import React, { FC } from 'react';
import style from './MyInput.module.css'
import useStore from '../../state/useStore';
interface Props{
    className:string,
    setValue: (value:string) => void,
    value:string,
    placeholder: string
}
const MyInput:FC<Props> = (props) => {
    const {  theme } = useStore();
  return (
  <input type="text" className = {`${style.input} ${props.className} ${theme == 'black' ? style.blackTheme: ''}`} placeholder={props.placeholder}
  
  onChange={e => props.setValue(e.target.value)} value={props.value}/>
  )
}

export default MyInput;
