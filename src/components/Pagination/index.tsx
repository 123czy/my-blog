import React from 'react';
import s from './index.scss'
import { Pagination } from 'antd';
const Pagination : React.FC = () => {
    return (
        <>
        <Pagination defaultCurrent={6} total={500} />
        </>
    )
}