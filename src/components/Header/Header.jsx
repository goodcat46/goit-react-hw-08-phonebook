import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { NavLink } from 'react-router-dom';

import NavBar from './AppBar/AppBar';
import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './Header.module.scss';

const Header = () => {
  const { isLoggedIn, user } = useSelector(selectUserData);

  return (
    <div className={scss.Header}>
      <div className={scss.headerContainer}>
        <div className={scss.UserInfo}>
          <LetterAvatar login={user.name} />
          {isLoggedIn ? (
            <NavLink to="/contacts">{`Hello ${user.email}`}</NavLink>
          ) : (
            <p>Hello Anonymus</p>
          )}
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
