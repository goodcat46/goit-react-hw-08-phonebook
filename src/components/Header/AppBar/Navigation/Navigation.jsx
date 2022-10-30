import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => {
  return (
    <>
      <Link to={'/signup'}>
        <Button>Register</Button>
      </Link>

      <Link to={'/signin'}>
        <Button>Log In</Button>
      </Link>
    </>
  );
};

export default Navigation;
