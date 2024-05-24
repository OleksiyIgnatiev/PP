import  { FC } from 'react'
import style from './Loader.module.css'
import MyImage from '../MyImage/MyImage'
type Size = 'small' | 'large'

interface Props{
  size?:Size
}
const Loader:FC<Props> = ({size = 'large'}) => {
  const loaderIcon = ''
  return (
    <div className={`${style.loader} ${size == 'small'&& style.loaderSmal}`}>
        <MyImage alt='' src ={loaderIcon} className={style.LoaderIcon}/>
    </div>
  )
}

export default Loader
