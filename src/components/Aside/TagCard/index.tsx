import React from 'react';
import s from './index.scss'
import Card from '@/components/Card'

interface Tag {
    name: string;
    value: number;
}


const TagCard:React.FC = () => {
    const tagList:Tag[] = [
        {
            name:'文章',
            value:147
        },
        {
            name:'分类',
            value:12
        },
        {
            name:'标签',
            value:45
        }
    ]
    return (
     <>
       <Card className={s.card}>
       {
        tagList.map((item,index) => (
            <div className={s.block} key={index}>
                <p>{item.name}</p>
                <p className={s.value}>{item.value}</p>
            </div>
        )) 
       }
       </Card>
     </>
    )
}

export default TagCard;
