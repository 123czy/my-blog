import React from 'react';
import s from './index.scss'

interface Props {
    title?: string;
    text?: string;
    date?:string;
    tag?:Array<string>;
}



const ListItem : React.FC<Props> = () => {
    const list = [
        { 
          title:'1234',
          text:'dfadafafdfdsfddsfsdfsdfsdf',
          date:'2021-12-21',
          tag:['javascript','html']
        },
        { 
          title:'1235',
          text:'dfadafafdfdsfddsfsdfsdfsdf',
          date:'2021-12-21',
          tag:['webpack']
        },
        { 
          title:'1236',
          text:'dfadafafdfdsfddsfsdfsdfsdf',
          date:'2021-12-21',
          tag:['javascript','html']
        },
    ]
    return (
        <>
          {/* {
            list.map((item,index)=>{
                <div className={s.item} key={index}>
                    <div>{item.title}</div>
                </div>
            })
          } */}
           4234234234234
        </>
    )

}

export default ListItem;