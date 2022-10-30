import React from 'react';
import NavBar from './AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './Header.module.scss';

const Header = () => {
  const userinfo = useSelector(selectUserData);

  return (
    <div className={scss.Header}>
      <div className={scss.headerContainer}>
      {userinfo.isLoged && (
        <div className={scss.UserInfo}>
          <LetterAvatar login={userinfo.user.name} />
          <p>{userinfo.user.email}</p>
        </div>
      )}
      <NavBar />
      </div>
    </div>
  );
};

export default Header;
