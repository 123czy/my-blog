import React from 'react';
import s from './index.scss';
import Card from '@/components/Card';

interface notice {
    text:string;
    id:number;
}

const NoticeCard: React.FC = () => {
    const notice:notice[] = [
        {
           id:1,
           text:'后台管理平台已更新2.0版本，欢迎右上角体验~',
        }
    ]
    return (
        <Card className={s.card}>
          {
            notice.map((item,index)=>(
                <div className={s.block} key={index}>{item.text}</div>
            ))
          }
        </Card>
    );
};

export default NoticeCard;
