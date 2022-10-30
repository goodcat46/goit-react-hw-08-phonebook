import React from 'react';
import NavBar from './AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './Header.module.scss';

const Header = () => {
  const { isLoged, user } = useSelector(selectUserData);

  return (
    <div className={scss.Header}>
      <div className={scss.headerContainer}>
        {/* {isLoged && ()} */}
        <div className={scss.UserInfo}>
          <LetterAvatar login={user.name} />
          <p>{isLoged?user.email:'Anonymus'}</p>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
