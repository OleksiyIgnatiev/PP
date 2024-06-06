import React, { FC, useState } from 'react';
import style from './Dropdown.module.css'
export interface DropdownEelement {
    name: string,
    value: number
}
interface Props {
    options: DropdownEelement[],
    value: number | null,
    setValue: (value: number | null) => void,
    text: string,
    className:string
}
const Dropdown: FC<Props> = (props) => {
    const [isOpen,setIsOpen] = useState<boolean>();
    const [selectedName,setSelectedName] = useState<string>('');
    const handleIsOpen = () =>{
        setIsOpen(prev => !prev)
  
    }

    const handleSelect = (el:DropdownEelement) =>{
        setIsOpen(false);
        props.setValue(el.value)
        setSelectedName(el.name)
    }

  

    return (
        <div className={`${style.main} ${props.className}`}>
        <button className={style.dropDown} onClick={handleIsOpen}>
            <div className={style.tite}>{selectedName.trim() !== '' ? selectedName: 'Вибрати категорію'} </div>
            <svg width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg" style = {{transform:`rotate(${isOpen? '180':'0'}deg)`}}>
                <path d="M2 2L21 22L40 2" stroke="#BBBBBB" stroke-width="4" />
            </svg>
        </button>
        <div className={style.optionList} style = {{display: `${isOpen? 'flex' : 'none'}`}} >
            {props.options.map(el =>
                <button className={style.optionItem} key = {el.value} 
                onClick={() => handleSelect(el)}
                >{el.name}</button>
            )}
        </div>
        </div>
    )
}

export default Dropdown
