import React from 'react';
import s from './index.scss'
import { Pagination } from 'antd';

interface Props  {
    current:number;
    defaultPageSize?:number;
    total?:number;
    setPage?:Function
}

const Mypagination : React.FC<Props> = (
    {
        current,
        defaultPageSize = 10,
        total = 0,
        setPage,
    }
) => {
    return (
        <>
        <Pagination defaultPageSize={6} total={50} />
        </>
    )
}

export default Mypagination;