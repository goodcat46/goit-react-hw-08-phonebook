import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { userCurrent } from 'redux/thunks/authThunks';

import Header from './Header/Header';
import HelloPage from './Pages/HelloPage';
import ContactsPage from './Pages/ContactsPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import NotFoundPage from './Pages/NotFoundPage';
import AppLoader from './AppLoader/AppLoader';

import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoged, isLoading } = useSelector(selectUserData);
  useEffect(() => {
    if (token) {
      dispatch(userCurrent());
    }
  }, [dispatch, isLoged, token]);

  return (
    <>
      <div className={css.app}>
        <Header />
        <div className={css.appContainer}>
          <Routes>
            <Route path="/" element={<HelloPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <AppLoader isLoading={isLoading} />
      </div>
    </>
  );
};
