import React from 'react';
import s from './index.scss'

interface Props {
    list: Array<{
        title?: string;
        text?: string;
        date?:string;
        tag?:Array<string>;
    }> 
}



const ListItem : React.FC<Props> = ({list}) => {
    
    return (
        <>
          {
            list.map((item,index)=>
            (
            <div className={s.item} key={index}>
                <div className={s.title}>{item.title}</div>
                <div className={s.text}>{item.text}</div>
                <div className={s.bottom}>
                    <div className={s.date}>
                        {item.date}
                    </div>
                    <div className={s.tags}>
                        {
                        item.tag && item.tag.map((i,index) =>(
                            <span className={s.tag} key={index}>{i}</span>
                        ))
                        }
                    </div>
                </div>
              </div>
            )   
            )
          }
        </>
    )
}

export default ListItem;