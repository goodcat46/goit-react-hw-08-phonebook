import React from 'react';
import NavBar from './NavBar/NavBar';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './Header.module.scss';

const Header = () => {
  const userinfo = useSelector(selectUserData);

  return (
    <div className={scss.Header}>
      {userinfo.isLoged && (
        <div className={scss.UserInfo}>
          <LetterAvatar login={userinfo.user.name} />
          <p>{userinfo.user.email}</p>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default Header;
