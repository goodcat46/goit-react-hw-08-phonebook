import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import authThunks from 'redux/thunks/authThunks';

import { Button } from '@mui/material';
import Navigation from './Navigation/Navigation';

import scss from './NavBar.module.scss';

const NavBar = () => {
  const { isLoged } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(authThunks.logOut());
  };

  return (
    <div className={scss.NavBar}>
      {!isLoged ? (
        <Navigation />
      ) : (
        <Button onClick={handleLogOutClick}>Log Out</Button>
      )}
    </div>
  );
};

export default NavBar;
