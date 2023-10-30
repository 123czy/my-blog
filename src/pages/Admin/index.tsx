import { Button } from '@arco-design/web-react';
import { useTitle } from 'ahooks';
import React from 'react';
import s from './index.scss'
import { Link, Route, Routes } from 'react-router-dom';

const Admin: React.FC = () => {
  useTitle('Admin');
  return (
    <>
      <div className={s.first}>
        <div className={s.content}>
        <div className={s.text}>欢迎来到我的世界</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
