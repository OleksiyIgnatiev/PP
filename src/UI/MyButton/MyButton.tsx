import React, { MouseEvent, ReactNode } from 'react';
import style from './MyButton.module.css';

interface Props {
    className: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void; // Змінено тип onClick
    children: ReactNode;
}

const MyButton: React.FC<Props> = (props) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick(e);
    };
    
    return (
        <button onClick={handleClick} className={`${style.button} ${props.className}`}>
            {props.children}
        </button>
    );
}

export default MyButton;
