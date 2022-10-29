import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';

import css from './app.module.scss';

export const App = () => {
  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
};
