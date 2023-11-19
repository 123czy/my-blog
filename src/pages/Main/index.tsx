import React from 'react';
import s from './index.scss';
import { useSafeState } from 'ahooks'
import ListItem from '@/components/ListItem'
import Mypagination from '@/components/Pagination'
const Main: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const [homeSize, setHomeSize] = useSafeState(10)
  return (
    <>
      <div className={s.main}>
        <div className={s.leftBlock}>
          {
            [1, 2].map((item, index) => (
              <div className={s.item} >
                <ListItem />
              </div>
            ))
          }

          {/* <Mypagination current={page}   /> */}
        </div>
        <div className={s.rightBlock}>
          8989898989
        </div>
      </div>
    </>
  )
}

export default Main 