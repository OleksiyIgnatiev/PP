import React, { useEffect, useState } from 'react'
import style from './MessagePage.module.css'
import Logo from '../../UI/Logo/Logo'
import BackArrow from '../../UI/BackArrow/BackArrow'
import WhiteFlutterBlock from '../../UI/WhiteFlutterBlock/WhiteFlutterBlock'
import { MessageData, MessageService } from './api/Message'
import useStore from '../../state/useStore'
import { MainServise } from '../../api/MainServise'
const MessagePage = () => {
    const [messages,setMessages] = useState<MessageData[]>([]);
    const {userId} = useStore();
/*     const [userEmail,setUserEmail] = useState<string>() */
    useEffect(()=>{
        const fetch = async () =>{
            const {data} = await MessageService.getMessages(Number(userId))
          /*   const adminData = await MainServise.getUserInfo(data.data) */
            setMessages(data.data)
        }
        fetch()
    },[userId])
  return (
    <div className={style.mail}>
      <Logo />
      <BackArrow className={style.arrow}/>
      <div className={style.title}>Ваші сповіщення від админів</div>
      <div className={style.messagesList}>
        {messages.map(message=>
                <WhiteFlutterBlock className={style.messageItem} onClick={()=>{}}>
                    <div style  ={{width: '10%'}}>Admin</div> <div style  ={{width: '90%'}}>{message.message}</div>
                </WhiteFlutterBlock>
        )}

      </div>
    </div>
  )
}

export default MessagePage
