import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import authThunks from 'redux/userApi/authThunks';
import { selectUserData } from 'redux/userApi/userSelectors';

import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoged } = useSelector(selectUserData);
  // console.log(token);
  useEffect(() => {
    if (isLoged) {
      return;
    }
    if (token) {
      dispatch(authThunks.current());
    }
  }, [dispatch, isLoged, token]);

  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <Header />
        <SignUpPage />
        <SignInPage />
        {/* <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/user/:id" element={<MainPage />} />
        </Routes> */}
      </div>
    </div>
  );
};
