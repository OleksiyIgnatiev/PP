import React, { useEffect, useState } from 'react';
import BackArrow from '../../../UI/BackArrow/BackArrow';
import style from './AccountPage.module.css';
import { UserInfo } from '../models/UserInfo';
import { AccountService } from '../api/AccountService';
import useStore from '../../../state/useStore';
import accountIcon from '../../../assets/images/account_icon.png';
import shareIcon from '../../../assets/images/share_icon.png';
import bellIcon from '../../../assets/images/image 27.png';
import locgoutIcon from '../../../assets/images/image 22.png';
import settingsIcon from '../../../assets/images/image 23.png';
import subscriptionIcon from '../../../assets/images/image 24.png';
import testIcon from '../../../assets/images/image 26.png';

import { Link, useNavigate } from 'react-router-dom'
import WhiteFlutterBlock from '../../../UI/WhiteFlutterBlock/WhiteFlutterBlock'
import MyImage from '../../../UI/MyImage/MyImage'
const AccountPage = () => {
    const [userInfo,setUserInfo] = useState<UserInfo>();
    const {userId,logout} = useStore()
    const navigate = useNavigate();
    useEffect(()=>{
        const fetch = async() =>{
           const {data}=  await AccountService.getUserInfo(Number(userId))
           setUserInfo(data.data)
        }
        fetch()
    },[[]])


  return (
    <div className={style.page}>
      <BackArrow/>
      <div className={style.topRow}>
        <img src={accountIcon} alt="Account ing" className={style.accountImg}/>
        <div className={style.name}>{userInfo?.username}</div>
        <div className={style.email}>{userInfo?.email}</div>
        <Link to ={'/share'}><img  src={shareIcon} alt="" className={style.shareIcon}/></Link>
      </div>
      <div className={style.navRow}>
{/*         <WhiteFlutterBlock className={style.navItem} onClick={()=> navigate('/notice-violation')}>
            <MyImage src={bellIcon} alt="" className={style.navIcon}/>
            <div className={style.navText}>Сповіщення</div>
        </WhiteFlutterBlock> */}
        <WhiteFlutterBlock className={style.navItem} onClick={()=> navigate('/test')}>
            <MyImage src={testIcon} alt="" className={style.navIcon}/>
            <div className={style.navText}>Пройти тест для визначення рівня володіння англійською</div>
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.navItem} onClick={()=> navigate('/subscription')}>
            <MyImage src={subscriptionIcon} alt="" className={style.navIcon}/>
            <div className={style.navText}>Підписка</div>
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.navItem} onClick={()=> navigate('/edit-user')}>
            <MyImage src={settingsIcon} alt="" className={style.navIcon}/>
            <div className={style.navText}>Параметри входу</div>
        </WhiteFlutterBlock>
        <WhiteFlutterBlock className={style.navItem} onClick={()=> logout()}>
            <MyImage src={locgoutIcon} alt="" className={style.navIcon}/>
            <div className={style.navText}>Вийти</div>
        </WhiteFlutterBlock>
      </div>
    </div>
  )
}

export default AccountPage
