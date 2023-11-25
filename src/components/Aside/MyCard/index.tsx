import React from 'react';
import s from './index.scss';
import { cardUrl } from '@/utils/config';
import Card from '@/components/Card'
const MyCard :React.FC = () => {
    return (
       
          <Card className={s.card}>
            <p className={s.text}>
                <span>你好，</span><br />
                <span>我是<span className={s.name}>cozy</span>,</span><br />
                <span >欢迎来到</span><br />
                <span>我的个人博客。</span>
            </p>
            <img src={cardUrl} className={s.img}></img>
          </Card>
        
    )
}

export default MyCard; 