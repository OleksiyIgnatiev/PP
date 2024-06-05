import React, { FC, ReactNode, useEffect, useState } from 'react'
import style from './Text.module.css';
import useStore from '../../state/useStore';
interface Props{
    children: ReactNode,
    className?: string,
    type?: 'title' | 'normal'
}
const Text:FC<Props> = (props)=> {
    const {theme} = useStore();


    return (
        <div className={`${style.text} ${props.className} ${theme == 'black' ? style.black: ''} ${props.type && (props.type == 'title'? style.titleText: style.normalText)}`}>
            {props.children}
        </div>
    )
}

export default Text
