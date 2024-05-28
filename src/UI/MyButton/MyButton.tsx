import  { FC, MouseEvent, ReactNode } from 'react'
import style from './MyButton.module.css';
interface Props{
    className:string,
    onClick: ()=>void,
    children: ReactNode
}
const MyButton:FC<Props> = (props) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick();
      };
    
  return (
    <button onClick = {e => handleClick(e)} className={`${style.button} ${props.className}`}>
        {props.children}
    </button>
  )
}

export default MyButton
