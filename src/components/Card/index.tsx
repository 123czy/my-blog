// import { Skeleton } from 'antd';
import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';
import s from './index.scss';

interface Props {
    className?:string;
    loading?: boolean;
}

const Card:React.FC<Props> = ({className,loading,children}) => {
    return (
        <div className={classNames(s.card,className)}>
           {children}
        </div>
    )
}

export default  Card;