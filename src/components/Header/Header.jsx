import React from 'react';
// import PropTypes from 'prop-types'
import NavBar from './NavBar/NavBar';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/userApi/userSelectors';

import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './Header.module.scss';

const Header = props => {
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

// Header.propTypes = {}

export default Header;
