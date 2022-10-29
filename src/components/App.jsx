import React from 'react';

import MainPage from './Pages/MainPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';

import css from './app.module.scss';

export const App = () => {
  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <SignUpPage />
        <MainPage />
        <SignInPage />
      </div>
    </div>
  );
};
