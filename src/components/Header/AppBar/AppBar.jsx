import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/thunks/authThunks';

import { Button } from '@mui/material';
import Navigation from './Navigation/Navigation';

import scss from './NavBar.module.scss';

const NavBar = () => {
  const { isLoggedIn } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(userLogOut());
  };

  return (
    <div className={scss.NavBar}>
      {!isLoggedIn ? (
        <Navigation />
      ) : (
        <>
          <Button onClick={handleLogOutClick}>Log Out</Button>
        </>
      )}
    </div>
  );
};

export default NavBar;
