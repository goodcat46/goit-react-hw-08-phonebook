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

import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoged } = useSelector(selectUserData);

  useEffect(() => {
    if (token) {
      dispatch(authThunks.current());
    }
  }, [dispatch, isLoged, token]);

  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <Header />
        {/* {isLoged ? <MainPage /> : <SignInPage />} */}
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          {/* <Route path="/" element={<MainPage />} /> */}
          {isLoged ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <Route path="/" element={<SignInPage />} />
          )}
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </div>
  );
};
