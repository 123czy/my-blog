import React from 'react'
import s from './index.scss'
import Card from '@/components/Card'

interface info {
   name:string;
   value:number;
}

const InfoCard:React.FC = () => {
    const infoList:info[] = [
        {
            name:'总浏览量',
            value:7680
        },
        {
           name:'运行时间',
           value:2150
        }
    ]
    return (
     <Card className={s.card}>
        {
            infoList.map((item,index)=>(
                <div key={index}>
                    <p className={s.items}><span>{item.name}</span><span>{item.value}</span></p>
                </div>
            ))
        }
       
     </Card>
    )
}

export default InfoCard;
