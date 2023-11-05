import { Button } from '@arco-design/web-react';
import { useTitle } from 'ahooks';
import React from 'react';
import TopBar from '../../components/topBar'
import s from './index.scss'
import {tabBarList} from '../../utils/config'
import { Link, Route, Routes } from 'react-router-dom';

const Admin: React.FC = () => {
  useTitle('Admin');
  return (
    <>
      <div className={s.first}>
        <TopBar></TopBar>
        <div className={s.content}>
        <div className={s.text}>欢迎来到我的世界</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
