import React from 'react';
import s from './index.scss';
import MyCard from './MyCard'
import TagCard from './TagCard'
import NoticeCard from './NoticeCard'
import DataCard from './DataCard'
import InfoCard from './InfoCard'
import {cardUrl} from '@/utils/config'
const Aside:React.FC = () => {
  return (
    <>
     <MyCard></MyCard>
     <TagCard></TagCard>
     <NoticeCard></NoticeCard>
     <DataCard></DataCard>
     <InfoCard></InfoCard>
    </>
  )
}
export default Aside;