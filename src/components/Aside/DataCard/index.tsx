import React from 'react';
import s from './index.scss'
import Card from '@/components/Card'

const DataCard:React.FC = () => {
    const dataList:string[] = [
        'Vue','React','Node','浏览器','BFC','性能优化'
    ]
    return (
        <Card className={s.card}>
            {
              dataList.map((item,index)=>(
                <span className={s.items} key={index}>{item}</span>
              ))
            }
        </Card>
    )
}

export default DataCard;