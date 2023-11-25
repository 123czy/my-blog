import React from 'react';
import s from './index.scss';
import { useSafeState } from 'ahooks'
import ListItem from '@/components/ListItem'
import Aside from '@/components/Aside'
import Mypagination from '@/components/Pagination'
const Main: React.FC = () => {
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
  const [page, setPage] = useSafeState(1);
  const [homeSize, setHomeSize] = useSafeState(10)
  return (
    <>
      <div className={s.main}>
        <div className={s.leftBlock}>
          {
              <div className={s.item} >
                <ListItem list={list} />
              </div>
          }
        </div>
        <div className={s.rightBlock}>
          <Aside />
        </div>
      </div>
    </>
  )
}

export default Main 