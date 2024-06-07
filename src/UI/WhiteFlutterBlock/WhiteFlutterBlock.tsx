import  { FC, ReactNode } from 'react';
import style from './WhiteFlutterBlock.module.css'
interface Props{
    children: ReactNode,
    className:string,
    onClick: () => void
}
const WhiteFlutterBlock:FC<Props> = (props) => {
  return (
    <div className={`${style.block} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default WhiteFlutterBlock
