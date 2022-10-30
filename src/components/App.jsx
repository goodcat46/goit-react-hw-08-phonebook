import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import NotFoundPage from './Pages/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import authThunks from 'redux/thunks/authThunks';
import { selectUserData } from 'redux/selectors';
import AppLoader from './AppLoader/AppLoader';

import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoged, isLoading } = useSelector(selectUserData);
  useEffect(() => {
    if (token) {
      dispatch(authThunks.current());
    }
  }, [dispatch, isLoged, token]);

  return (
    <>
      <div className={css.app}>
        <Header />
        <div className={css.appContainer}>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            {/* {isLoged ? (
              <Route path="/" element={<MainPage />} />
            ) : (
              <Route path="/" element={<SignInPage />} />
            )} */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <AppLoader isLoading={isLoading} />
      </div>
    </>
  );
};
