import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { userCurrent } from 'redux/thunks/authThunks';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

import Header from './Header/Header';
import HelloPage from './Pages/HelloPage';
// import ContactsPage from './Pages/ContactsPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import NotFoundPage from './Pages/NotFoundPage';
import AppLoader from './AppLoader/AppLoader';

import { useMediaQuery } from 'react-responsive';

import css from './app.module.scss';

const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoading } = useSelector(selectUserData);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  console.log(isDesktopOrLaptop, 'isDesktopOrLaptop');
  console.log(isBigScreen, 'isBigScreen');
  console.log(isTabletOrMobile, 'isTabletOrMobile');
  console.log(isPortrait, 'isPortrait');
  console.log(isRetina, 'isRetina');

  useEffect(() => {
    if (token) {
      dispatch(userCurrent());
    }
  }, [dispatch, token]);

  return (
    <div className={css.app}>
      <Header />
      <div className={css.appContainer}>
        <Suspense>
          <Routes>
            <Route path="/" element={<HelloPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route
              path="/"
              element={<PrivateRoute redirectTo="/signin" />}
            >
              <Route path="contacts" element={<ContactsPage />}></Route>

            </Route>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <AppLoader isLoading={isLoading} />
    </div>
  );
};
