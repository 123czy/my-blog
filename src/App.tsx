import './global.custom.scss';

import React, { lazy, Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import ErrorBoundary from '@/components/ErrorBoundary';
import { connect } from 'react-redux';
import s from './App.scss';

const Admin = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Admin')
);

interface Props {
  mode?: number;
  setMode?: Function;
} 

const App: React.FC = () => {
  const bgClasses = [s.bg0,s.bg1,s.bg2]
  return (
    <div className={classNames(s.AppBox)}>
      <ErrorBoundary>
        <Suspense fallback={<>loading...</>}>
          <Admin />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

// export default connect(
//   (state: storeState) => ({
//     mode: state.mode
//   }),
//   { setMode }
// )(App);

export default App;


