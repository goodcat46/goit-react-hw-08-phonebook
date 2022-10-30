import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = props => {
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

Navigation.propTypes = {};

export default Navigation;
