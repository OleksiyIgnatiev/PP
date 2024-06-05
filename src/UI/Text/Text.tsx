import React, { FC, ReactNode } from 'react'
import style from './Text.module.css';
import useStore from '../../state/useStore';
interface Props{
    children: ReactNode,
    className?: string
}
const Text:FC<Props> = (props)=> {
    const {theme} = useStore();

    return (
        <div className={`${style.text} ${props.className} ${theme == 'black' ? style.black: ''}`}>
            {props.children}
        </div>
    )
}

export default Text
