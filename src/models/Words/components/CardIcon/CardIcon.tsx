import React, { FC } from 'react';
import style from './YourStyleModule.module.css';
interface Props{
    imgLink: string,
    fallbackImgLink: string,
    className: string
}
const CardIcon:FC<Props> = ({ imgLink, fallbackImgLink,className}) => {
    //@ts-ignore
    const handleError = (e) => {
        e.target.src = fallbackImgLink;
    };

    return (
        <img 
            src={imgLink || 'null'} 
            alt="Card Icon" 
            className={className} 
            onError={handleError} 
         
        />
    );
};

export default CardIcon;
