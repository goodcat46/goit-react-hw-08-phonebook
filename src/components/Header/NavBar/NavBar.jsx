import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/userApi/userSelectors';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authThunks from 'redux/userApi/authThunks';

import scss from './NavBar.module.scss';

const NavBar = () => {
  const { isLoged } = useSelector(selectUserData);
const dispatch = useDispatch()
  const handleLogOutClick=()=>{
    dispatch(authThunks.logOut())
  }

  return (
    <div className={scss.NavBar}>
      {!isLoged ? (
        <>
          <Button>Register</Button>
          <Button>Log In</Button>
        </>
      ) : (
        <Button onClick={handleLogOutClick}>Log Out</Button>
      )}
    </div>
  );
};

export default NavBar;
